import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service redshift
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonredshift.html
 */
export class Redshift extends PolicyStatement {
    public servicePrefix = 'redshift';
    public actions : Actions = { "AcceptReservedNodeExchange": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_AcceptReservedNodeExchange.html", "description": "Grants permission to exchange a DC1 reserved node for a DC2 reserved node with no changes to the configuration", "accessLevel": "Write" }, "AuthorizeClusterSecurityGroupIngress": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeClusterSecurityGroupIngress.html", "description": "Grants permission to add an inbound (ingress) rule to an Amazon Redshift security group", "accessLevel": "Permissions management", "resourceTypes": { "securitygroup": { "required": true }, "securitygroupingress-ec2securitygroup": { "required": true } } }, "AuthorizeSnapshotAccess": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeSnapshotAccess.html", "description": "Grants permission to the specified AWS account to restore a snapshot", "accessLevel": "Permissions management", "resourceTypes": { "snapshot": { "required": true } } }, "BatchDeleteClusterSnapshots": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_BatchDeleteClusterSnapshots.html", "description": "Grants permission to delete snapshots in a batch of size upto 100", "accessLevel": "Write", "resourceTypes": { "snapshot": { "required": true } } }, "BatchModifyClusterSnapshots": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_BatchModifyClusterSnapshots.html", "description": "Grants permission to modify settings for a list of snapshots", "accessLevel": "Write", "resourceTypes": { "snapshot": { "required": true } } }, "CancelQuery": { "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html", "description": "Grants permission to cancel a query through the Amazon Redshift console", "accessLevel": "Write" }, "CancelQuerySession": { "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html", "description": "Grants permission to see queries in the Amazon Redshift console", "accessLevel": "Write" }, "CancelResize": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CancelResize.html", "description": "Grants permission to cancel a resize operation", "accessLevel": "Write", "resourceTypes": { "cluster": { "required": true } } }, "CopyClusterSnapshot": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CopyClusterSnapshot.html", "description": "Grants permission to copy a cluster snapshot", "accessLevel": "Write", "resourceTypes": { "snapshot": { "required": true } } }, "CreateCluster": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateCluster.html", "description": "Grants permission to create a cluster", "accessLevel": "Write", "resourceTypes": { "cluster": { "required": true } } }, "CreateClusterParameterGroup": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterParameterGroup.html", "description": "Grants permission to create an Amazon Redshift parameter group", "accessLevel": "Write", "resourceTypes": { "parametergroup": { "required": true } } }, "CreateClusterSecurityGroup": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSecurityGroup.html", "description": "Grants permission to create an Amazon Redshift security group", "accessLevel": "Write", "resourceTypes": { "securitygroup": { "required": true } } }, "CreateClusterSnapshot": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSnapshot.html", "description": "Grants permission to create a manual snapshot of the specified cluster", "accessLevel": "Write", "resourceTypes": { "snapshot": { "required": true } } }, "CreateClusterSubnetGroup": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSubnetGroup.html", "description": "Grants permission to create an Amazon Redshift subnet group", "accessLevel": "Write", "resourceTypes": { "subnetgroup": { "required": true } } }, "CreateClusterUser": { "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/generating-iam-credentials-role-permissions.html", "description": "Grants permission to automatically create the specified Amazon Redshift user if it does not exist", "accessLevel": "Permissions management", "resourceTypes": { "dbuser": { "required": true } }, "conditions": ["redshift:DbUser"] }, "CreateEventSubscription": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateEventSubscription.html", "description": "Grants permission to create an Amazon Redshift event notification subscription", "accessLevel": "Write", "resourceTypes": { "eventsubscription": { "required": true } } }, "CreateHsmClientCertificate": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateHsmClientCertificate.html", "description": "Grants permission to create an HSM client certificate that a cluster uses to connect to an HSM", "accessLevel": "Write", "resourceTypes": { "hsmclientcertificate": { "required": true } } }, "CreateHsmConfiguration": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateHsmConfiguration.html", "description": "Grants permission to create an HSM configuration that contains information required by a cluster to store and use database encryption keys in a hardware security module (HSM)", "accessLevel": "Write", "resourceTypes": { "hsmconfiguration": { "required": true } } }, "CreateSavedQuery": { "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html", "description": "Grants permission to create saved SQL queries through the Amazon Redshift console", "accessLevel": "Write" }, "CreateScheduledAction": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateScheduledAction.html", "description": "Grants permission to create an Amazon Redshift scheduled action", "accessLevel": "Write" }, "CreateSnapshotCopyGrant": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateSnapshotCopyGrant.html", "description": "Grants permission to create a snapshot copy grant and encrypt copied snapshots in a destination AWS Region", "accessLevel": "Permissions management", "resourceTypes": { "snapshotcopygrant": { "required": true } } }, "CreateSnapshotSchedule": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateSnapshotSchedule.html", "description": "Grants permission to create a snapshot schedule", "accessLevel": "Write", "resourceTypes": { "snapshotschedule": { "required": true } } }, "CreateTags": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateTags.html", "description": "Grants permission to add one or more tags to a specified resource", "accessLevel": "Tagging" }, "DeleteCluster": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteCluster.html", "description": "Grants permission to delete a previously provisioned cluster", "accessLevel": "Write", "resourceTypes": { "cluster": { "required": true } } }, "DeleteClusterParameterGroup": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterParameterGroup.html", "description": "Grants permission to delete an Amazon Redshift parameter group", "accessLevel": "Write", "resourceTypes": { "parametergroup": { "required": true } } }, "DeleteClusterSecurityGroup": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSecurityGroup.html", "description": "Grants permission to delete an Amazon Redshift security group", "accessLevel": "Write", "resourceTypes": { "securitygroup": { "required": true } } }, "DeleteClusterSnapshot": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSnapshot.html", "description": "Grants permission to delete a manual snapshot", "accessLevel": "Write", "resourceTypes": { "snapshot": { "required": true } } }, "DeleteClusterSubnetGroup": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSubnetGroup.html", "description": "Grants permission to delete a cluster subnet group", "accessLevel": "Write", "resourceTypes": { "subnetgroup": { "required": true } } }, "DeleteEventSubscription": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteEventSubscription.html", "description": "Grants permission to delete an Amazon Redshift event notification subscription", "accessLevel": "Write", "resourceTypes": { "eventsubscription": { "required": true } } }, "DeleteHsmClientCertificate": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteHsmClientCertificate.html", "description": "Grants permission to delete an HSM client certificate", "accessLevel": "Write", "resourceTypes": { "hsmclientcertificate": { "required": true } } }, "DeleteHsmConfiguration": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteHsmConfiguration.html", "description": "Grants permission to delete an Amazon Redshift HSM configuration", "accessLevel": "Write", "resourceTypes": { "hsmconfiguration": { "required": true } } }, "DeleteSavedQueries": { "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html", "description": "Grants permission to delete saved SQL queries through the Amazon Redshift console", "accessLevel": "Write" }, "DeleteScheduledAction": { "url": "API_DeleteScheduledAction.html", "description": "Grants permission to delete an Amazon Redshift scheduled action", "accessLevel": "Write" }, "DeleteSnapshotCopyGrant": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteSnapshotCopyGrant.html", "description": "Grants permission to delete a snapshot copy grant", "accessLevel": "Write", "resourceTypes": { "snapshotcopygrant": { "required": true } } }, "DeleteSnapshotSchedule": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteSnapshotSchedule.html", "description": "Grants permission to delete a snapshot schedule", "accessLevel": "Write", "resourceTypes": { "snapshotschedule": { "required": true } } }, "DeleteTags": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteTags.html", "description": "Grants permission to delete a tag or tags from a resource", "accessLevel": "Tagging" }, "DescribeAccountAttributes": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeAccountAttributes.html", "description": "Grants permission to describe attributes attached to the specified AWS account", "accessLevel": "Read" }, "DescribeClusterDbRevisions": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterDbRevisions.html", "description": "Grants permission to describe database revisions for a cluster", "accessLevel": "List" }, "DescribeClusterParameterGroups": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterParameterGroups.html", "description": "Grants permission to describe Amazon Redshift parameter groups, including parameter groups you created and the default parameter group", "accessLevel": "Read" }, "DescribeClusterParameters": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterParameters.html", "description": "Grants permission to describe parameters contained within an Amazon Redshift parameter group", "accessLevel": "Read", "resourceTypes": { "parametergroup": { "required": true } } }, "DescribeClusterSecurityGroups": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSecurityGroups.html", "description": "Grants permission to describe Amazon Redshift security groups", "accessLevel": "Read" }, "DescribeClusterSnapshots": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSnapshots.html", "description": "Grants permission to describe one or more snapshot objects, which contain metadata about your cluster snapshots", "accessLevel": "Read" }, "DescribeClusterSubnetGroups": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSubnetGroups.html", "description": "Grants permission to describe one or more cluster subnet group objects, which contain metadata about your cluster subnet groups", "accessLevel": "Read" }, "DescribeClusterTracks": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterTracks.html", "description": "Grants permission to describe available maintenance tracks", "accessLevel": "List" }, "DescribeClusterVersions": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterVersions.html", "description": "Grants permission to describe available Amazon Redshift cluster versions", "accessLevel": "Read" }, "DescribeClusters": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusters.html", "description": "Grants permission to describe properties of provisioned clusters", "accessLevel": "List" }, "DescribeDefaultClusterParameters": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeDefaultClusterParameters.html", "description": "Grants permission to describe parameter settings for a parameter group family", "accessLevel": "Read" }, "DescribeEventCategories": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEventCategories.html", "description": "Grants permission to describe event categories for all event source types, or for a specified source type", "accessLevel": "Read" }, "DescribeEventSubscriptions": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEventSubscriptions.html", "description": "Grants permission to describe Amazon Redshift event notification subscriptions for the specified AWS account", "accessLevel": "Read" }, "DescribeEvents": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEvents.html", "description": "Grants permission to describe events related to clusters, security groups, snapshots, and parameter groups for the past 14 days", "accessLevel": "List" }, "DescribeHsmClientCertificates": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeHsmClientCertificates.html", "description": "Grants permission to describe HSM client certificates", "accessLevel": "Read" }, "DescribeHsmConfigurations": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeHsmConfigurations.html", "description": "Grants permission to describe Amazon Redshift HSM configurations", "accessLevel": "Read" }, "DescribeLoggingStatus": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeLoggingStatus.html", "description": "Grants permission to describe whether information, such as queries and connection attempts, is being logged for a cluster", "accessLevel": "Read", "resourceTypes": { "cluster": { "required": true } } }, "DescribeNodeConfigurationOptions": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeNodeConfigurationOptions.html", "description": "Grants permission to describe properties of possible node configurations such as node type, number of nodes, and disk usage for the specified action type", "accessLevel": "List" }, "DescribeOrderableClusterOptions": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeOrderableClusterOptions.html", "description": "Grants permission to describe orderable cluster options", "accessLevel": "Read" }, "DescribeQuery": { "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html", "description": "Grants permission to describe a query through the Amazon Redshift console", "accessLevel": "Read" }, "DescribeReservedNodeOfferings": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeReservedNodeOfferings.html", "description": "Grants permission to describe available reserved node offerings by Amazon Redshift", "accessLevel": "Read" }, "DescribeReservedNodes": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeReservedNodes.html", "description": "Grants permission to describe the reserved nodes", "accessLevel": "Read" }, "DescribeResize": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeResize.html", "description": "Grants permission to describe the last resize operation for a cluster", "accessLevel": "Read", "resourceTypes": { "cluster": { "required": true } } }, "DescribeSavedQueries": { "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html", "description": "Grants permission to describe saved queries through the Amazon Redshift console", "accessLevel": "Read" }, "DescribeScheduledActions": { "url": "API_DescribeScheduledActions.html", "description": "Grants permission to describe created Amazon Redshift scheduled actions", "accessLevel": "Read" }, "DescribeSnapshotCopyGrants": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeSnapshotCopyGrants.html", "description": "Grants permission to describe snapshot copy grants owned by the specified AWS account in the destination AWS Region", "accessLevel": "Read" }, "DescribeSnapshotSchedules": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeSnapshotSchedules.html", "description": "Grants permission to describe snapshot schedules", "accessLevel": "Read", "resourceTypes": { "snapshotschedule": { "required": true } } }, "DescribeStorage": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeStorage.html", "description": "Grants permission to describe account level backups storage size and provisional storage", "accessLevel": "Read" }, "DescribeTable": { "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html", "description": "Grants permission to describe a table through the Amazon Redshift console", "accessLevel": "Read" }, "DescribeTableRestoreStatus": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeTableRestoreStatus.html", "description": "Grants permission to describe status of one or more table restore requests made using the RestoreTableFromClusterSnapshot API action", "accessLevel": "Read" }, "DescribeTags": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeTags.html", "description": "Grants permission to describe tags", "accessLevel": "Read" }, "DisableLogging": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DisableLogging.html", "description": "Grants permission to disable logging information, such as queries and connection attempts, for a cluster", "accessLevel": "Write", "resourceTypes": { "cluster": { "required": true } } }, "DisableSnapshotCopy": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_DisableSnapshotCopy.html", "description": "Grants permission to disable the automatic copy of snapshots for a cluster", "accessLevel": "Write", "resourceTypes": { "cluster": { "required": true } } }, "EnableLogging": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_EnableLogging.html", "description": "Grants permission to enable logging information, such as queries and connection attempts, for a cluster", "accessLevel": "Write", "resourceTypes": { "cluster": { "required": true } } }, "EnableSnapshotCopy": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_EnableSnapshotCopy.html", "description": "Grants permission to enable the automatic copy of snapshots for a cluster", "accessLevel": "Write", "resourceTypes": { "cluster": { "required": true } } }, "ExecuteQuery": { "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html", "description": "Grants permission to execute a query through the Amazon Redshift console", "accessLevel": "Write" }, "FetchResults": { "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html", "description": "Grants permission to fetch query results through the Amazon Redshift console", "accessLevel": "Read" }, "GetClusterCredentials": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html", "description": "Grants permission to get temporary credentials to access an Amazon Redshift database by the specified AWS account", "accessLevel": "Write", "resourceTypes": { "dbuser": { "required": true }, "dbgroup": { "required": false }, "dbname": { "required": false } }, "conditions": ["redshift:DbName", "redshift:DbUser", "redshift:DurationSeconds"] }, "GetReservedNodeExchangeOfferings": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetReservedNodeExchangeOfferings.html", "description": "Grants permission to get an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node", "accessLevel": "Read" }, "JoinGroup": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html", "description": "Grants permission to join the specified Amazon Redshift group", "accessLevel": "Permissions management", "resourceTypes": { "dbgroup": { "required": true } } }, "ListDatabases": { "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html", "description": "Grants permission to list databases through the Amazon Redshift console", "accessLevel": "List" }, "ListSavedQueries": { "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html", "description": "Grants permission to list saved queries through the Amazon Redshift console", "accessLevel": "List" }, "ListSchemas": { "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html", "description": "Grants permission to list schemas through the Amazon Redshift console", "accessLevel": "List" }, "ListTables": { "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html", "description": "Grants permission to list tables through the Amazon Redshift console", "accessLevel": "List" }, "ModifyCluster": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyCluster.html", "description": "Grants permission to modify the settings of a cluster", "accessLevel": "Write", "resourceTypes": { "cluster": { "required": true } } }, "ModifyClusterDbRevision": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterDbRevision.html", "description": "Grants permission to modify the database revision of a cluster", "accessLevel": "Write", "resourceTypes": { "cluster": { "required": true } } }, "ModifyClusterIamRoles": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterIamRoles.html", "description": "Grants permission to modify the list of AWS Identity and Access Management (IAM) roles that can be used by a cluster to access other AWS services", "accessLevel": "Permissions management", "resourceTypes": { "cluster": { "required": true } } }, "ModifyClusterMaintenance": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterMaintenance.html", "description": "Grants permission to modify the maintenance settings of a cluster", "accessLevel": "Write" }, "ModifyClusterParameterGroup": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterParameterGroup.html", "description": "Grants permission to modify the parameters of a parameter group", "accessLevel": "Write", "resourceTypes": { "parametergroup": { "required": true } } }, "ModifyClusterSnapshot": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSnapshot.html", "description": "Grants permission to modify the settings of a snapshot", "accessLevel": "Write", "resourceTypes": { "snapshot": { "required": true } } }, "ModifyClusterSnapshotSchedule": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSnapshotSchedule.html", "description": "Grants permission to modify a snapshot schedule for a cluster", "accessLevel": "Write", "resourceTypes": { "cluster": { "required": true } } }, "ModifyClusterSubnetGroup": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSubnetGroup.html", "description": "Grants permission to modify a cluster subnet group to include the specified list of VPC subnets", "accessLevel": "Write", "resourceTypes": { "subnetgroup": { "required": true } } }, "ModifyEventSubscription": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyEventSubscription.html", "description": "Grants permission to modify an existing Amazon Redshift event notification subscription", "accessLevel": "Write", "resourceTypes": { "eventsubscription": { "required": true } } }, "ModifySavedQuery": { "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html", "description": "Grants permission to modify an existing saved query through the Amazon Redshift console", "accessLevel": "Write" }, "ModifyScheduledAction": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyScheduledAction.html", "description": "Grants permission to modify an existing Amazon Redshift scheduled action", "accessLevel": "Write" }, "ModifySnapshotCopyRetentionPeriod": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifySnapshotCopyRetentionPeriod.html", "description": "Grants permission to modify the number of days to retain snapshots in the destination AWS Region after they are copied from the source AWS Region", "accessLevel": "Write", "resourceTypes": { "cluster": { "required": true } } }, "ModifySnapshotSchedule": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifySnapshotSchedule.html", "description": "Grants permission to modify a snapshot schedule", "accessLevel": "Write", "resourceTypes": { "snapshotschedule": { "required": true } } }, "PauseCluster": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_PauseCluster.html", "description": "Grants permission to pause a cluster", "accessLevel": "Write", "resourceTypes": { "cluster": { "required": true } } }, "PurchaseReservedNodeOffering": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_PurchaseReservedNodeOffering.html", "description": "Grants permission to purchase a reserved node", "accessLevel": "Write" }, "RebootCluster": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_RebootCluster.html", "description": "Grants permission to reboot a cluster", "accessLevel": "Write", "resourceTypes": { "cluster": { "required": true } } }, "ResetClusterParameterGroup": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResetClusterParameterGroup.html", "description": "Grants permission to set one or more parameters of a parameter group to their default values and set the source values of the parameters to \"engine-default\"", "accessLevel": "Write", "resourceTypes": { "parametergroup": { "required": true } } }, "ResizeCluster": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResizeCluster.html", "description": "Grants permission to change the size of a cluster", "accessLevel": "Write", "resourceTypes": { "cluster": { "required": true } } }, "RestoreFromClusterSnapshot": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_RestoreFromClusterSnapshot.html", "description": "Grants permission to create a cluster from a snapshot", "accessLevel": "Write", "resourceTypes": { "snapshot": { "required": true } } }, "RestoreTableFromClusterSnapshot": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_RestoreTableFromClusterSnapshot.html", "description": "Grants permission to create a table from a table in an Amazon Redshift cluster snapshot", "accessLevel": "Write", "resourceTypes": { "cluster": { "required": true }, "snapshot": { "required": true } } }, "ResumeCluster": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResumeCluster.html", "description": "Grants permission to resume a cluster", "accessLevel": "Write", "resourceTypes": { "cluster": { "required": true } } }, "RevokeClusterSecurityGroupIngress": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_RevokeClusterSecurityGroupIngress.html", "description": "Grants permission to revoke an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group", "accessLevel": "Permissions management", "resourceTypes": { "securitygroup": { "required": true }, "securitygroupingress-ec2securitygroup": { "required": true } } }, "RevokeSnapshotAccess": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_RevokeSnapshotAccess.html", "description": "Grants permission to revoke access from the specified AWS account to restore a snapshot", "accessLevel": "Permissions management", "resourceTypes": { "snapshot": { "required": true } } }, "RotateEncryptionKey": { "url": "https://docs.aws.amazon.com/redshift/latest/APIReference/API_RotateEncryptionKey.html", "description": "Grants permission to rotate an encryption key for a cluster", "accessLevel": "Permissions management", "resourceTypes": { "cluster": { "required": true } } }, "ViewQueriesFromConsole": { "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html", "description": "Grants permission to view query results through the Amazon Redshift console", "accessLevel": "List" }, "ViewQueriesInConsole": { "url": "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html", "description": "Grants permission to terminate running queries and loads through the Amazon Redshift console", "accessLevel": "List" } };

    /**
     * Grants permission to exchange a DC1 reserved node for a DC2 reserved node with no changes to the configuration
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_AcceptReservedNodeExchange.html
     */
    public acceptReservedNodeExchange () {
        this.add('redshift:AcceptReservedNodeExchange');
        return this;
    }

    /**
     * Grants permission to add an inbound (ingress) rule to an Amazon Redshift security group
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeClusterSecurityGroupIngress.html
     */
    public authorizeClusterSecurityGroupIngress () {
        this.add('redshift:AuthorizeClusterSecurityGroupIngress');
        return this;
    }

    /**
     * Grants permission to the specified AWS account to restore a snapshot
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeSnapshotAccess.html
     */
    public authorizeSnapshotAccess () {
        this.add('redshift:AuthorizeSnapshotAccess');
        return this;
    }

    /**
     * Grants permission to delete snapshots in a batch of size upto 100
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_BatchDeleteClusterSnapshots.html
     */
    public batchDeleteClusterSnapshots () {
        this.add('redshift:BatchDeleteClusterSnapshots');
        return this;
    }

    /**
     * Grants permission to modify settings for a list of snapshots
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_BatchModifyClusterSnapshots.html
     */
    public batchModifyClusterSnapshots () {
        this.add('redshift:BatchModifyClusterSnapshots');
        return this;
    }

    /**
     * Grants permission to cancel a query through the Amazon Redshift console
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
     */
    public cancelQuery () {
        this.add('redshift:CancelQuery');
        return this;
    }

    /**
     * Grants permission to see queries in the Amazon Redshift console
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
     */
    public cancelQuerySession () {
        this.add('redshift:CancelQuerySession');
        return this;
    }

    /**
     * Grants permission to cancel a resize operation
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CancelResize.html
     */
    public cancelResize () {
        this.add('redshift:CancelResize');
        return this;
    }

    /**
     * Grants permission to copy a cluster snapshot
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CopyClusterSnapshot.html
     */
    public copyClusterSnapshot () {
        this.add('redshift:CopyClusterSnapshot');
        return this;
    }

    /**
     * Grants permission to create a cluster
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateCluster.html
     */
    public createCluster () {
        this.add('redshift:CreateCluster');
        return this;
    }

    /**
     * Grants permission to create an Amazon Redshift parameter group
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterParameterGroup.html
     */
    public createClusterParameterGroup () {
        this.add('redshift:CreateClusterParameterGroup');
        return this;
    }

    /**
     * Grants permission to create an Amazon Redshift security group
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSecurityGroup.html
     */
    public createClusterSecurityGroup () {
        this.add('redshift:CreateClusterSecurityGroup');
        return this;
    }

    /**
     * Grants permission to create a manual snapshot of the specified cluster
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSnapshot.html
     */
    public createClusterSnapshot () {
        this.add('redshift:CreateClusterSnapshot');
        return this;
    }

    /**
     * Grants permission to create an Amazon Redshift subnet group
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSubnetGroup.html
     */
    public createClusterSubnetGroup () {
        this.add('redshift:CreateClusterSubnetGroup');
        return this;
    }

    /**
     * Grants permission to automatically create the specified Amazon Redshift user if it does not exist
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/redshift/latest/mgmt/generating-iam-credentials-role-permissions.html
     */
    public createClusterUser () {
        this.add('redshift:CreateClusterUser');
        return this;
    }

    /**
     * Grants permission to create an Amazon Redshift event notification subscription
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateEventSubscription.html
     */
    public createEventSubscription () {
        this.add('redshift:CreateEventSubscription');
        return this;
    }

    /**
     * Grants permission to create an HSM client certificate that a cluster uses to connect to an HSM
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateHsmClientCertificate.html
     */
    public createHsmClientCertificate () {
        this.add('redshift:CreateHsmClientCertificate');
        return this;
    }

    /**
     * Grants permission to create an HSM configuration that contains information required by a cluster to store and use database encryption keys in a hardware security module (HSM)
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateHsmConfiguration.html
     */
    public createHsmConfiguration () {
        this.add('redshift:CreateHsmConfiguration');
        return this;
    }

    /**
     * Grants permission to create saved SQL queries through the Amazon Redshift console
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
     */
    public createSavedQuery () {
        this.add('redshift:CreateSavedQuery');
        return this;
    }

    /**
     * Grants permission to create an Amazon Redshift scheduled action
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateScheduledAction.html
     */
    public createScheduledAction () {
        this.add('redshift:CreateScheduledAction');
        return this;
    }

    /**
     * Grants permission to create a snapshot copy grant and encrypt copied snapshots in a destination AWS Region
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateSnapshotCopyGrant.html
     */
    public createSnapshotCopyGrant () {
        this.add('redshift:CreateSnapshotCopyGrant');
        return this;
    }

    /**
     * Grants permission to create a snapshot schedule
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateSnapshotSchedule.html
     */
    public createSnapshotSchedule () {
        this.add('redshift:CreateSnapshotSchedule');
        return this;
    }

    /**
     * Grants permission to add one or more tags to a specified resource
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateTags.html
     */
    public createTags () {
        this.add('redshift:CreateTags');
        return this;
    }

    /**
     * Grants permission to delete a previously provisioned cluster
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteCluster.html
     */
    public deleteCluster () {
        this.add('redshift:DeleteCluster');
        return this;
    }

    /**
     * Grants permission to delete an Amazon Redshift parameter group
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterParameterGroup.html
     */
    public deleteClusterParameterGroup () {
        this.add('redshift:DeleteClusterParameterGroup');
        return this;
    }

    /**
     * Grants permission to delete an Amazon Redshift security group
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSecurityGroup.html
     */
    public deleteClusterSecurityGroup () {
        this.add('redshift:DeleteClusterSecurityGroup');
        return this;
    }

    /**
     * Grants permission to delete a manual snapshot
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSnapshot.html
     */
    public deleteClusterSnapshot () {
        this.add('redshift:DeleteClusterSnapshot');
        return this;
    }

    /**
     * Grants permission to delete a cluster subnet group
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSubnetGroup.html
     */
    public deleteClusterSubnetGroup () {
        this.add('redshift:DeleteClusterSubnetGroup');
        return this;
    }

    /**
     * Grants permission to delete an Amazon Redshift event notification subscription
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteEventSubscription.html
     */
    public deleteEventSubscription () {
        this.add('redshift:DeleteEventSubscription');
        return this;
    }

    /**
     * Grants permission to delete an HSM client certificate
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteHsmClientCertificate.html
     */
    public deleteHsmClientCertificate () {
        this.add('redshift:DeleteHsmClientCertificate');
        return this;
    }

    /**
     * Grants permission to delete an Amazon Redshift HSM configuration
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteHsmConfiguration.html
     */
    public deleteHsmConfiguration () {
        this.add('redshift:DeleteHsmConfiguration');
        return this;
    }

    /**
     * Grants permission to delete saved SQL queries through the Amazon Redshift console
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
     */
    public deleteSavedQueries () {
        this.add('redshift:DeleteSavedQueries');
        return this;
    }

    /**
     * Grants permission to delete an Amazon Redshift scheduled action
     *
     * Access Level: Write
     *
     * API_DeleteScheduledAction.html
     */
    public deleteScheduledAction () {
        this.add('redshift:DeleteScheduledAction');
        return this;
    }

    /**
     * Grants permission to delete a snapshot copy grant
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteSnapshotCopyGrant.html
     */
    public deleteSnapshotCopyGrant () {
        this.add('redshift:DeleteSnapshotCopyGrant');
        return this;
    }

    /**
     * Grants permission to delete a snapshot schedule
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteSnapshotSchedule.html
     */
    public deleteSnapshotSchedule () {
        this.add('redshift:DeleteSnapshotSchedule');
        return this;
    }

    /**
     * Grants permission to delete a tag or tags from a resource
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteTags.html
     */
    public deleteTags () {
        this.add('redshift:DeleteTags');
        return this;
    }

    /**
     * Grants permission to describe attributes attached to the specified AWS account
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeAccountAttributes.html
     */
    public describeAccountAttributes () {
        this.add('redshift:DescribeAccountAttributes');
        return this;
    }

    /**
     * Grants permission to describe database revisions for a cluster
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterDbRevisions.html
     */
    public describeClusterDbRevisions () {
        this.add('redshift:DescribeClusterDbRevisions');
        return this;
    }

    /**
     * Grants permission to describe Amazon Redshift parameter groups, including parameter groups you created and the default parameter group
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterParameterGroups.html
     */
    public describeClusterParameterGroups () {
        this.add('redshift:DescribeClusterParameterGroups');
        return this;
    }

    /**
     * Grants permission to describe parameters contained within an Amazon Redshift parameter group
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterParameters.html
     */
    public describeClusterParameters () {
        this.add('redshift:DescribeClusterParameters');
        return this;
    }

    /**
     * Grants permission to describe Amazon Redshift security groups
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSecurityGroups.html
     */
    public describeClusterSecurityGroups () {
        this.add('redshift:DescribeClusterSecurityGroups');
        return this;
    }

    /**
     * Grants permission to describe one or more snapshot objects, which contain metadata about your cluster snapshots
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSnapshots.html
     */
    public describeClusterSnapshots () {
        this.add('redshift:DescribeClusterSnapshots');
        return this;
    }

    /**
     * Grants permission to describe one or more cluster subnet group objects, which contain metadata about your cluster subnet groups
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSubnetGroups.html
     */
    public describeClusterSubnetGroups () {
        this.add('redshift:DescribeClusterSubnetGroups');
        return this;
    }

    /**
     * Grants permission to describe available maintenance tracks
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterTracks.html
     */
    public describeClusterTracks () {
        this.add('redshift:DescribeClusterTracks');
        return this;
    }

    /**
     * Grants permission to describe available Amazon Redshift cluster versions
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterVersions.html
     */
    public describeClusterVersions () {
        this.add('redshift:DescribeClusterVersions');
        return this;
    }

    /**
     * Grants permission to describe properties of provisioned clusters
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusters.html
     */
    public describeClusters () {
        this.add('redshift:DescribeClusters');
        return this;
    }

    /**
     * Grants permission to describe parameter settings for a parameter group family
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeDefaultClusterParameters.html
     */
    public describeDefaultClusterParameters () {
        this.add('redshift:DescribeDefaultClusterParameters');
        return this;
    }

    /**
     * Grants permission to describe event categories for all event source types, or for a specified source type
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEventCategories.html
     */
    public describeEventCategories () {
        this.add('redshift:DescribeEventCategories');
        return this;
    }

    /**
     * Grants permission to describe Amazon Redshift event notification subscriptions for the specified AWS account
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEventSubscriptions.html
     */
    public describeEventSubscriptions () {
        this.add('redshift:DescribeEventSubscriptions');
        return this;
    }

    /**
     * Grants permission to describe events related to clusters, security groups, snapshots, and parameter groups for the past 14 days
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEvents.html
     */
    public describeEvents () {
        this.add('redshift:DescribeEvents');
        return this;
    }

    /**
     * Grants permission to describe HSM client certificates
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeHsmClientCertificates.html
     */
    public describeHsmClientCertificates () {
        this.add('redshift:DescribeHsmClientCertificates');
        return this;
    }

    /**
     * Grants permission to describe Amazon Redshift HSM configurations
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeHsmConfigurations.html
     */
    public describeHsmConfigurations () {
        this.add('redshift:DescribeHsmConfigurations');
        return this;
    }

    /**
     * Grants permission to describe whether information, such as queries and connection attempts, is being logged for a cluster
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeLoggingStatus.html
     */
    public describeLoggingStatus () {
        this.add('redshift:DescribeLoggingStatus');
        return this;
    }

    /**
     * Grants permission to describe properties of possible node configurations such as node type, number of nodes, and disk usage for the specified action type
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeNodeConfigurationOptions.html
     */
    public describeNodeConfigurationOptions () {
        this.add('redshift:DescribeNodeConfigurationOptions');
        return this;
    }

    /**
     * Grants permission to describe orderable cluster options
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeOrderableClusterOptions.html
     */
    public describeOrderableClusterOptions () {
        this.add('redshift:DescribeOrderableClusterOptions');
        return this;
    }

    /**
     * Grants permission to describe a query through the Amazon Redshift console
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
     */
    public describeQuery () {
        this.add('redshift:DescribeQuery');
        return this;
    }

    /**
     * Grants permission to describe available reserved node offerings by Amazon Redshift
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeReservedNodeOfferings.html
     */
    public describeReservedNodeOfferings () {
        this.add('redshift:DescribeReservedNodeOfferings');
        return this;
    }

    /**
     * Grants permission to describe the reserved nodes
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeReservedNodes.html
     */
    public describeReservedNodes () {
        this.add('redshift:DescribeReservedNodes');
        return this;
    }

    /**
     * Grants permission to describe the last resize operation for a cluster
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeResize.html
     */
    public describeResize () {
        this.add('redshift:DescribeResize');
        return this;
    }

    /**
     * Grants permission to describe saved queries through the Amazon Redshift console
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
     */
    public describeSavedQueries () {
        this.add('redshift:DescribeSavedQueries');
        return this;
    }

    /**
     * Grants permission to describe created Amazon Redshift scheduled actions
     *
     * Access Level: Read
     *
     * API_DescribeScheduledActions.html
     */
    public describeScheduledActions () {
        this.add('redshift:DescribeScheduledActions');
        return this;
    }

    /**
     * Grants permission to describe snapshot copy grants owned by the specified AWS account in the destination AWS Region
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeSnapshotCopyGrants.html
     */
    public describeSnapshotCopyGrants () {
        this.add('redshift:DescribeSnapshotCopyGrants');
        return this;
    }

    /**
     * Grants permission to describe snapshot schedules
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeSnapshotSchedules.html
     */
    public describeSnapshotSchedules () {
        this.add('redshift:DescribeSnapshotSchedules');
        return this;
    }

    /**
     * Grants permission to describe account level backups storage size and provisional storage
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeStorage.html
     */
    public describeStorage () {
        this.add('redshift:DescribeStorage');
        return this;
    }

    /**
     * Grants permission to describe a table through the Amazon Redshift console
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
     */
    public describeTable () {
        this.add('redshift:DescribeTable');
        return this;
    }

    /**
     * Grants permission to describe status of one or more table restore requests made using the RestoreTableFromClusterSnapshot API action
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeTableRestoreStatus.html
     */
    public describeTableRestoreStatus () {
        this.add('redshift:DescribeTableRestoreStatus');
        return this;
    }

    /**
     * Grants permission to describe tags
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeTags.html
     */
    public describeTags () {
        this.add('redshift:DescribeTags');
        return this;
    }

    /**
     * Grants permission to disable logging information, such as queries and connection attempts, for a cluster
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DisableLogging.html
     */
    public disableLogging () {
        this.add('redshift:DisableLogging');
        return this;
    }

    /**
     * Grants permission to disable the automatic copy of snapshots for a cluster
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_DisableSnapshotCopy.html
     */
    public disableSnapshotCopy () {
        this.add('redshift:DisableSnapshotCopy');
        return this;
    }

    /**
     * Grants permission to enable logging information, such as queries and connection attempts, for a cluster
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_EnableLogging.html
     */
    public enableLogging () {
        this.add('redshift:EnableLogging');
        return this;
    }

    /**
     * Grants permission to enable the automatic copy of snapshots for a cluster
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_EnableSnapshotCopy.html
     */
    public enableSnapshotCopy () {
        this.add('redshift:EnableSnapshotCopy');
        return this;
    }

    /**
     * Grants permission to execute a query through the Amazon Redshift console
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
     */
    public executeQuery () {
        this.add('redshift:ExecuteQuery');
        return this;
    }

    /**
     * Grants permission to fetch query results through the Amazon Redshift console
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
     */
    public fetchResults () {
        this.add('redshift:FetchResults');
        return this;
    }

    /**
     * Grants permission to get temporary credentials to access an Amazon Redshift database by the specified AWS account
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html
     */
    public getClusterCredentials () {
        this.add('redshift:GetClusterCredentials');
        return this;
    }

    /**
     * Grants permission to get an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetReservedNodeExchangeOfferings.html
     */
    public getReservedNodeExchangeOfferings () {
        this.add('redshift:GetReservedNodeExchangeOfferings');
        return this;
    }

    /**
     * Grants permission to join the specified Amazon Redshift group
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html
     */
    public joinGroup () {
        this.add('redshift:JoinGroup');
        return this;
    }

    /**
     * Grants permission to list databases through the Amazon Redshift console
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
     */
    public listDatabases () {
        this.add('redshift:ListDatabases');
        return this;
    }

    /**
     * Grants permission to list saved queries through the Amazon Redshift console
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
     */
    public listSavedQueries () {
        this.add('redshift:ListSavedQueries');
        return this;
    }

    /**
     * Grants permission to list schemas through the Amazon Redshift console
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
     */
    public listSchemas () {
        this.add('redshift:ListSchemas');
        return this;
    }

    /**
     * Grants permission to list tables through the Amazon Redshift console
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
     */
    public listTables () {
        this.add('redshift:ListTables');
        return this;
    }

    /**
     * Grants permission to modify the settings of a cluster
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyCluster.html
     */
    public modifyCluster () {
        this.add('redshift:ModifyCluster');
        return this;
    }

    /**
     * Grants permission to modify the database revision of a cluster
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterDbRevision.html
     */
    public modifyClusterDbRevision () {
        this.add('redshift:ModifyClusterDbRevision');
        return this;
    }

    /**
     * Grants permission to modify the list of AWS Identity and Access Management (IAM) roles that can be used by a cluster to access other AWS services
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterIamRoles.html
     */
    public modifyClusterIamRoles () {
        this.add('redshift:ModifyClusterIamRoles');
        return this;
    }

    /**
     * Grants permission to modify the maintenance settings of a cluster
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterMaintenance.html
     */
    public modifyClusterMaintenance () {
        this.add('redshift:ModifyClusterMaintenance');
        return this;
    }

    /**
     * Grants permission to modify the parameters of a parameter group
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterParameterGroup.html
     */
    public modifyClusterParameterGroup () {
        this.add('redshift:ModifyClusterParameterGroup');
        return this;
    }

    /**
     * Grants permission to modify the settings of a snapshot
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSnapshot.html
     */
    public modifyClusterSnapshot () {
        this.add('redshift:ModifyClusterSnapshot');
        return this;
    }

    /**
     * Grants permission to modify a snapshot schedule for a cluster
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSnapshotSchedule.html
     */
    public modifyClusterSnapshotSchedule () {
        this.add('redshift:ModifyClusterSnapshotSchedule');
        return this;
    }

    /**
     * Grants permission to modify a cluster subnet group to include the specified list of VPC subnets
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSubnetGroup.html
     */
    public modifyClusterSubnetGroup () {
        this.add('redshift:ModifyClusterSubnetGroup');
        return this;
    }

    /**
     * Grants permission to modify an existing Amazon Redshift event notification subscription
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyEventSubscription.html
     */
    public modifyEventSubscription () {
        this.add('redshift:ModifyEventSubscription');
        return this;
    }

    /**
     * Grants permission to modify an existing saved query through the Amazon Redshift console
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
     */
    public modifySavedQuery () {
        this.add('redshift:ModifySavedQuery');
        return this;
    }

    /**
     * Grants permission to modify an existing Amazon Redshift scheduled action
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyScheduledAction.html
     */
    public modifyScheduledAction () {
        this.add('redshift:ModifyScheduledAction');
        return this;
    }

    /**
     * Grants permission to modify the number of days to retain snapshots in the destination AWS Region after they are copied from the source AWS Region
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifySnapshotCopyRetentionPeriod.html
     */
    public modifySnapshotCopyRetentionPeriod () {
        this.add('redshift:ModifySnapshotCopyRetentionPeriod');
        return this;
    }

    /**
     * Grants permission to modify a snapshot schedule
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifySnapshotSchedule.html
     */
    public modifySnapshotSchedule () {
        this.add('redshift:ModifySnapshotSchedule');
        return this;
    }

    /**
     * Grants permission to pause a cluster
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_PauseCluster.html
     */
    public pauseCluster () {
        this.add('redshift:PauseCluster');
        return this;
    }

    /**
     * Grants permission to purchase a reserved node
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_PurchaseReservedNodeOffering.html
     */
    public purchaseReservedNodeOffering () {
        this.add('redshift:PurchaseReservedNodeOffering');
        return this;
    }

    /**
     * Grants permission to reboot a cluster
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RebootCluster.html
     */
    public rebootCluster () {
        this.add('redshift:RebootCluster');
        return this;
    }

    /**
     * Grants permission to set one or more parameters of a parameter group to their default values and set the source values of the parameters to "engine-default"
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResetClusterParameterGroup.html
     */
    public resetClusterParameterGroup () {
        this.add('redshift:ResetClusterParameterGroup');
        return this;
    }

    /**
     * Grants permission to change the size of a cluster
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResizeCluster.html
     */
    public resizeCluster () {
        this.add('redshift:ResizeCluster');
        return this;
    }

    /**
     * Grants permission to create a cluster from a snapshot
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RestoreFromClusterSnapshot.html
     */
    public restoreFromClusterSnapshot () {
        this.add('redshift:RestoreFromClusterSnapshot');
        return this;
    }

    /**
     * Grants permission to create a table from a table in an Amazon Redshift cluster snapshot
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RestoreTableFromClusterSnapshot.html
     */
    public restoreTableFromClusterSnapshot () {
        this.add('redshift:RestoreTableFromClusterSnapshot');
        return this;
    }

    /**
     * Grants permission to resume a cluster
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResumeCluster.html
     */
    public resumeCluster () {
        this.add('redshift:ResumeCluster');
        return this;
    }

    /**
     * Grants permission to revoke an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RevokeClusterSecurityGroupIngress.html
     */
    public revokeClusterSecurityGroupIngress () {
        this.add('redshift:RevokeClusterSecurityGroupIngress');
        return this;
    }

    /**
     * Grants permission to revoke access from the specified AWS account to restore a snapshot
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RevokeSnapshotAccess.html
     */
    public revokeSnapshotAccess () {
        this.add('redshift:RevokeSnapshotAccess');
        return this;
    }

    /**
     * Grants permission to rotate an encryption key for a cluster
     *
     * Access Level: Permissions management
     *
     * https://docs.aws.amazon.com/redshift/latest/APIReference/API_RotateEncryptionKey.html
     */
    public rotateEncryptionKey () {
        this.add('redshift:RotateEncryptionKey');
        return this;
    }

    /**
     * Grants permission to view query results through the Amazon Redshift console
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
     */
    public viewQueriesFromConsole () {
        this.add('redshift:ViewQueriesFromConsole');
        return this;
    }

    /**
     * Grants permission to terminate running queries and loads through the Amazon Redshift console
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
     */
    public viewQueriesInConsole () {
        this.add('redshift:ViewQueriesInConsole');
        return this;
    }
}
