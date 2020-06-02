# IAM Floyd

Helper library for [CDK] to easily generate AWS [IAM policy statements][statement].

> This is an early version of the package. The signature of methods will change while I implement new features. Therefore make sure you use an exact version in your `package.json` before it reaches 1.0.0.
>
> If you see something off, think something could be done better or have any other suggestion, speak up. :-)

<!-- vscode-markdown-toc -->
* [Usage](#Usage)
* [Examples](#Examples)
* [Methods](#Methods)
	* [allow](#allow)
	* [deny](#deny)
	* [allActions](#allActions)
	* [withCondition](#withCondition)
	* [onResources](#onResources)
	* [not](#not)
* [But I don't use CDK. Can I still use this package?](#ButIdontuseCDK.CanIstillusethispackage)
* [Roadmap](#Roadmap)
* [Floyd?](#Floyd)
* [Legal](#Legal)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

While [method chaining] is not seen a lot in CDK-land, this library's goal is to provide a way to generate policy statements in a single chain. Code completion FTW!

## <a name='Usage'></a>Usage

The package contains a statement provider for each AWS service, e.g. `Ec2`. A statement provider is an extension of the original `PolicyStatement` of the `@aws-cdk/aws-iam` package, so you can use it as drop-in replacement,

A statement provider has methods for every single action of a service. Calling such method will add the related action to the list of actions of the statement:

```typescript
import * as iam from '@aws-cdk/aws-iam';
import * as statement from 'iam-floyd';

new statement.Ec2().startInstances();
```

Every method again returns the statement provider, so you can chain method calls:

```typescript
new statement.Ec2()
    .startInstances()
    .stopInstances();
```

The default effect of any statement is `Allow`. To add some linguistic sugar you can explicitly call the `allow()` method:

```typescript
new statement.Ec2()
    .allow()
    .startInstances()
    .stopInstances();
```

And of course `deny()`:

```typescript
new statement.Ec2()
    .deny()
    .startInstances()
    .stopInstances();
```

All statements require `Resources`. Add them via `onResources()`

```typescript
new statement.S3()
    .allow()
    .allActions()
    .onResources(
        'arn:aws:s3:::some-bucket',
        'arn:aws:s3:::another-bucket'
    );
```

To allow all resources, pass a wildcard:

```typescript
new statement.S3()
    .allow()
    .allActions()
    .onResources('*');
```

If you don't want to be verbose and add every single action manually to the statement, you discovered the reason why I created this package. You can work with [access levels]!

There are 5 access levels you can use: `LIST`, `READ`, `WRITE`, `PERMISSION_MANAGEMENT` and `TAGGING`:

```typescript
new statement.Ec2()
    .allow()
    .allActions(
        statement.AccessLevel.LIST,
        statement.AccessLevel.READ
    )
    .onResources('*');
```

The `allActions()` method also accepts regular expressions which test against the action name:

```typescript
new statement.Ec2()
    .deny()
    .allActions(/vpn/i)
    .onResources('*');
```

If no value is passed, all actions (`ec2:*`) will be added:

```typescript
new statement.Ec2()
    .allow()
    .allActions()
    .onResources('*');
```

To add conditions to the statement you can use `withCondition()`:

```typescript
new statement.Ec2()
    .allow()
    .startInstances()
    .onResources('*')
    .withCondition('StringEquals', {
        'aws:RequestTag/Owner': '${aws:username}',
    });
```

What about [notAction]? Yes, simply add a `not()` to the chain. Though it is important that you add it **before** you add actions.

```typescript
new statement.S3()
    .allow()
    .not()
    .deleteBucket()
    .onResources('arn:aws:s3:::some-bucket');
```

## <a name='Examples'></a>Examples

```typescript
new iam.PolicyDocument({
    statements: [
        new statement.Ec2()
            .allow()
            .startInstances()
            .onResources('*')
            .withCondition('StringEquals', {
                'aws:RequestTag/Owner': '${aws:username}',
            }),
        new statement.Ec2()
            .allow()
            .stopInstances()
            .onResources('*')
            .withCondition('StringEquals', {
                'ec2:ResourceTag/Owner': '${aws:username}',
            }),
        new statement.Ec2()
            .allow()
            .allActions(
                statement.AccessLevel.LIST,
                statement.AccessLevel.READ
            )
            .onResources('*'),
    ],
});
```

```typescript
new iam.PolicyDocument({
    statements: [
        new statement.Cloudformation() // allow all CFN actions
            .allow()
            .allActions()
            .onResources('*'),
        new statement.All() // allow absolutely everything that is triggered via CFN
            .allow()
            .allActions()
            .onResources('*')
            .withCondition('ForAnyValue:StringEquals', {
                'aws:CalledVia': 'cloudformation.amazonaws.com',
            }),
        new statement.S3() // allow access to the CDK staging bucket
            .allow()
            .allActions()
            .onResources('arn:aws:s3:::cdktoolkit-stagingbucket-*'),
        new statement.Account() // even when triggered via CFN, do not allow modifications of the account
            .deny()
            .allActions(
                statement.AccessLevel.PERMISSION_MANAGEMENT,
                statement.AccessLevel.WRITE
            )
            .onResources('*'),
        new statement.Organizations() // even when triggered via CFN, do not allow modifications of the organization
            .deny()
            .allActions(
                statement.AccessLevel.PERMISSION_MANAGEMENT,
                statement.AccessLevel.WRITE
            )
            .onResources('*'),
    ],
});
```

## <a name='Methods'></a>Methods

### <a name='allow'></a>allow

Sets the `Effect` of the statement to `Allow`.

```typescript
new statement.Ec2()
    .allow()
    .stopInstances();
```

### <a name='deny'></a>deny

Sets the `Effect` of the statement to `Deny`.

```typescript
new statement.Ec2()
    .deny()
    .stopInstances();
```

### <a name='allActions'></a>allActions

This method allows you to add multiple actions at once. If called without parameters, it adds all actions of the service.

```typescript
new statement.Ec2()
    .allow()
    .allActions();
```

The method can take regular expressions and [access levels] as options and will add only the matching actions:

```typescript
new statement.Ec2()
    .allow()
    .allActions(/vpn/i);
```

```typescript
new statement.Ec2()
    .allow()
    .allActions(
        statement.AccessLevel.LIST,
        statement.AccessLevel.READ
    );
```

There exists 5 access levels:

* LIST
* READ
* WRITE
* PERMISSION_MANAGEMENT
* TAGGING

### <a name='withCondition'></a>withCondition

Adds a condition to the statement.

This is basically the same as `addCondition()` of the original `iam.PolicyStatement`. Only difference is, it returns the statement so you can use it with method chaining.

```typescript
new statement.Ec2()
    .allow()
    .startInstances()
    .onResources('*')
    .withCondition('StringEquals', {
        'aws:RequestTag/Owner': '${aws:username}',
    });
```

### <a name='onResources'></a>onResources

Limit statement to specified resources. Every statement requires a resource, so calling this method is mandatory.

This is basically the same as `addResources()` of the original `iam.PolicyStatement`. Only difference is, it returns the statement so you can use it with method chaining.

```typescript
new statement.S3()
    .allow()
    .allActions()
    .onResources('arn:aws:s3:::some-bucket');
```

```typescript
new statement.S3()
    .allow()
    .allActions()
    .onResources('*');
```

### <a name='not'></a>not

Switches the policy provider to use [notAction]. Calling this method will change the behavior of all successive called action methods. It will not modify actions that have been added before the call.

**Correct:** `s3:DeleteBucket` will be added to the list of `NotAction`

```typescript
new statement.S3()
    .allow()
    .not()
    .deleteBucket()
    .onResources('arn:aws:s3:::some-bucket');
```

**Wrong:** `s3:DeleteBucket` will be added to the list of `Action`

```typescript
new statement.S3()
    .allow()
    .deleteBucket()
    .not()
    .onResources('arn:aws:s3:::some-bucket');
```

## <a name='ButIdontuseCDK.CanIstillusethispackage'></a>But I don't use CDK. Can I still use this package?

Yes. While the package is designed to be used within CDK you can also just use it to generate policy statements in JSON format:

```typescript
new statement.Ec2()
    .allow()
    .startInstances()
    .stopInstances()
    .onResources('*')
    .toJSON();

new iam.PolicyDocument({
    statements: [
        new statement.Ec2()
            .allow()
            .startInstances()
            .stopInstances()
            .onResources('*'),
    ],
}).toJSON();
```

## <a name='Roadmap'></a>Roadmap

* Support for resource types in `allActions()`
* Support for resource types in action methods
* Support for conditions in action methods
* Compile action list down to the smallest possible pattern
* Add useful standard conditions as methods
* Add useful action collections based on common use cases
* Add support for `NotResources`

## <a name='Floyd'></a>Floyd?

George Floyd has been murdered by racist police officers on May 25th, 2020.

This package is not named after him to just remind you of him and his death. I want this package to be of great help to you and I want you to use it on a daily base. Every time you use it, I want you to remember our society is ill and needs change. The riots will stop. The news will fade. The issue persists!

If this statement annoys you, this package is not for you.

## <a name='Legal'></a>Legal

The code contained in the [lib](./lib) folder is generated from the [AWS documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html). The class- and function-names and their description therefore are property of AWS.

AWS and their services are trademarks, registered trademarks or trade dress of AWS in the U.S. and/or other countries.

This project is not affiliated, funded, or in any way associated with AWS.

   [CDK]: https://aws.amazon.com/cdk/
   [statement]: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_statement.html
   [method chaining]: https://en.wikipedia.org/wiki/Method_chaining
   [notAction]: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notaction.html
   [access levels]: https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_understand-policy-summary-access-level-summaries.html#access_policies_access-level