import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service codestar-notifications
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodestarnotifications.html
 */
export class CodestarNotifications extends PolicyStatement {
    public servicePrefix = 'codestar-notifications';
    public actions : Actions = { "CreateNotificationRule": { "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_CreateNotificationRule.html", "description": "Grants permission to create a notification rule for a resource", "accessLevel": "Write", "resourceTypes": { "notificationrule": { "required": true } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys", "codestar-notifications:NotificationsForResource"] }, "DeleteNotificationRule": { "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DeleteNotificationRule.html", "description": "Grants permission to delete a notification rule for a resource", "accessLevel": "Write", "resourceTypes": { "notificationrule": { "required": true } }, "conditions": ["aws:ResourceTag/${TagKey}", "aws:RequestTag/${TagKey}", "aws:TagKeys", "codestar-notifications:NotificationsForResource"] }, "DeleteTarget": { "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DeleteTarget.html", "description": "Grants permission to delete a target for a notification rule", "accessLevel": "Write", "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "DescribeNotificationRule": { "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DescribeNotificationRule.html", "description": "Grants permission to get information about a notification rule", "accessLevel": "Read", "resourceTypes": { "notificationrule": { "required": true } }, "conditions": ["aws:ResourceTag/${TagKey}", "aws:RequestTag/${TagKey}", "aws:TagKeys", "codestar-notifications:NotificationsForResource"] }, "ListEventTypes": { "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListEventTypes.html", "description": "Grants permission to list notifications event types", "accessLevel": "List" }, "ListNotificationRules": { "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListNotificationRules.html", "description": "Grants permission to list notification rules in an AWS account", "accessLevel": "List" }, "ListTagsForResource": { "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListTagsForResource.html", "description": "Grants permission to list the tags attached to a notification rule resource ARN", "accessLevel": "List", "resourceTypes": { "notificationrule": { "required": true } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "ListTargets": { "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListTargets.html", "description": "Grants permission to list the notification rule targets for an AWS account", "accessLevel": "List", "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "Subscribe": { "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_Subscribe.html", "description": "Grants permission to create an association between a notification rule and an Amazon SNS topic", "accessLevel": "Write", "resourceTypes": { "notificationrule": { "required": true } }, "conditions": ["aws:ResourceTag/${TagKey}", "aws:RequestTag/${TagKey}", "aws:TagKeys", "codestar-notifications:NotificationsForResource"] }, "TagResource": { "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_TagResource.html", "description": "Grants permission to attach resource tags to a notification rule resource ARN", "accessLevel": "Tagging", "resourceTypes": { "notificationrule": { "required": true } }, "conditions": ["aws:ResourceTag/${TagKey}", "aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "Unsubscribe": { "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_Unsubscribe.html", "description": "Grants permission to remove an association between a notification rule and an Amazon SNS topic", "accessLevel": "Write", "resourceTypes": { "notificationrule": { "required": true } }, "conditions": ["aws:ResourceTag/${TagKey}", "aws:RequestTag/${TagKey}", "aws:TagKeys", "codestar-notifications:NotificationsForResource"] }, "UntagResource": { "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_UntagResource.html", "description": "Grants permission to disassociate resource tags from a notification rule resource ARN", "accessLevel": "Tagging", "resourceTypes": { "notificationrule": { "required": true } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "UpdateNotificationRule": { "url": "https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_UpdateNotificationRule.html", "description": "Grants permission to change a notification rule for a resource", "accessLevel": "Write", "resourceTypes": { "notificationrule": { "required": true } }, "conditions": ["aws:ResourceTag/${TagKey}", "aws:RequestTag/${TagKey}", "aws:TagKeys", "codestar-notifications:NotificationsForResource"] } };

    /**
     * Grants permission to create a notification rule for a resource
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_CreateNotificationRule.html
     */
    public createNotificationRule () {
        this.add('codestar-notifications:CreateNotificationRule');
        return this;
    }

    /**
     * Grants permission to delete a notification rule for a resource
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DeleteNotificationRule.html
     */
    public deleteNotificationRule () {
        this.add('codestar-notifications:DeleteNotificationRule');
        return this;
    }

    /**
     * Grants permission to delete a target for a notification rule
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DeleteTarget.html
     */
    public deleteTarget () {
        this.add('codestar-notifications:DeleteTarget');
        return this;
    }

    /**
     * Grants permission to get information about a notification rule
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_DescribeNotificationRule.html
     */
    public describeNotificationRule () {
        this.add('codestar-notifications:DescribeNotificationRule');
        return this;
    }

    /**
     * Grants permission to list notifications event types
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListEventTypes.html
     */
    public listEventTypes () {
        this.add('codestar-notifications:ListEventTypes');
        return this;
    }

    /**
     * Grants permission to list notification rules in an AWS account
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListNotificationRules.html
     */
    public listNotificationRules () {
        this.add('codestar-notifications:ListNotificationRules');
        return this;
    }

    /**
     * Grants permission to list the tags attached to a notification rule resource ARN
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListTagsForResource.html
     */
    public listTagsForResource () {
        this.add('codestar-notifications:ListTagsForResource');
        return this;
    }

    /**
     * Grants permission to list the notification rule targets for an AWS account
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_ListTargets.html
     */
    public listTargets () {
        this.add('codestar-notifications:ListTargets');
        return this;
    }

    /**
     * Grants permission to create an association between a notification rule and an Amazon SNS topic
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_Subscribe.html
     */
    public subscribe () {
        this.add('codestar-notifications:Subscribe');
        return this;
    }

    /**
     * Grants permission to attach resource tags to a notification rule resource ARN
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_TagResource.html
     */
    public tagResource () {
        this.add('codestar-notifications:TagResource');
        return this;
    }

    /**
     * Grants permission to remove an association between a notification rule and an Amazon SNS topic
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_Unsubscribe.html
     */
    public unsubscribe () {
        this.add('codestar-notifications:Unsubscribe');
        return this;
    }

    /**
     * Grants permission to disassociate resource tags from a notification rule resource ARN
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_UntagResource.html
     */
    public untagResource () {
        this.add('codestar-notifications:UntagResource');
        return this;
    }

    /**
     * Grants permission to change a notification rule for a resource
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/codestar-notifications/latest/APIReference/API_UpdateNotificationRule.html
     */
    public updateNotificationRule () {
        this.add('codestar-notifications:UpdateNotificationRule');
        return this;
    }
}
