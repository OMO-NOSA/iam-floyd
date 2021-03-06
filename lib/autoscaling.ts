import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service autoscaling
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2autoscaling.html
 */
export class Autoscaling extends PolicyStatement {
    public servicePrefix = 'autoscaling';
    public actions : Actions = { "AttachInstances": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachInstances.html", "description": "Attaches one or more EC2 instances to the specified Auto Scaling group.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "AttachLoadBalancerTargetGroups": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachLoadBalancerTargetGroups.html", "description": "Attaches one or more target groups to the specified Auto Scaling group.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } }, "conditions": ["autoscaling:TargetGroupARNs"] }, "AttachLoadBalancers": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachLoadBalancers.html", "description": "Attaches one or more load balancers to the specified Auto Scaling group.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } }, "conditions": ["autoscaling:LoadBalancerNames"] }, "BatchDeleteScheduledAction": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_BatchDeleteScheduledAction.html", "description": "Deletes the specified scheduled actions.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "BatchPutScheduledUpdateGroupAction": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_BatchPutScheduledUpdateGroupAction.html", "description": "Creates or updates multiple scheduled scaling actions for an Auto Scaling group.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "CompleteLifecycleAction": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CompleteLifecycleAction.html", "description": "Completes the lifecycle action for the specified token or instance with the specified result.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "CreateAutoScalingGroup": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateAutoScalingGroup.html", "description": "Creates an Auto Scaling group with the specified name and attributes.", "accessLevel": "Tagging", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } }, "conditions": ["autoscaling:InstanceTypes", "autoscaling:LaunchConfigurationName", "autoscaling:LaunchTemplateVersionSpecified", "autoscaling:LoadBalancerNames", "autoscaling:MaxSize", "autoscaling:MinSize", "autoscaling:TargetGroupARNs", "autoscaling:VPCZoneIdentifiers", "aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "CreateLaunchConfiguration": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateLaunchConfiguration.html", "description": "Creates a launch configuration.", "accessLevel": "Write", "resourceTypes": { "launchConfiguration": { "required": true } }, "conditions": ["autoscaling:ImageId", "autoscaling:InstanceType", "autoscaling:SpotPrice"] }, "CreateOrUpdateTags": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateOrUpdateTags.html", "description": "Creates or updates tags for the specified Auto Scaling group.", "accessLevel": "Tagging", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "DeleteAutoScalingGroup": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteAutoScalingGroup.html", "description": "Deletes the specified Auto Scaling group.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "DeleteLaunchConfiguration": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteLaunchConfiguration.html", "description": "Deletes the specified launch configuration.", "accessLevel": "Write", "resourceTypes": { "launchConfiguration": { "required": true } } }, "DeleteLifecycleHook": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteLifecycleHook.html", "description": "Deletes the specified lifecycle hook.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "DeleteNotificationConfiguration": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteNotificationConfiguration.html", "description": "Deletes the specified notification.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "DeletePolicy": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeletePolicy.html", "description": "Deletes the specified Auto Scaling policy.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "DeleteScheduledAction": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteScheduledAction.html", "description": "Deletes the specified scheduled action.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "DeleteTags": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteTags.html", "description": "Deletes the specified tags.", "accessLevel": "Tagging", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "DescribeAccountLimits": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAccountLimits.html", "description": "Describes the current Auto Scaling resource limits for your AWS account.", "accessLevel": "List" }, "DescribeAdjustmentTypes": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAdjustmentTypes.html", "description": "Describes the policy adjustment types for use with PutScalingPolicy.", "accessLevel": "List" }, "DescribeAutoScalingGroups": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingGroups.html", "description": "Describes one or more Auto Scaling groups. If a list of names is not provided, the call describes all Auto Scaling groups.", "accessLevel": "List" }, "DescribeAutoScalingInstances": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingInstances.html", "description": "Describes one or more Auto Scaling instances. If a list is not provided, the call describes all instances.", "accessLevel": "List" }, "DescribeAutoScalingNotificationTypes": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingNotificationTypes.html", "description": "Describes the notification types that are supported by Auto Scaling.", "accessLevel": "List" }, "DescribeLaunchConfigurations": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLaunchConfigurations.html", "description": "Describes one or more launch configurations. If you omit the list of names, then the call describes all launch configurations.", "accessLevel": "List" }, "DescribeLifecycleHookTypes": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLifecycleHookTypes.html", "description": "Describes the available types of lifecycle hooks.", "accessLevel": "List" }, "DescribeLifecycleHooks": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLifecycleHooks.html", "description": "Describes the lifecycle hooks for the specified Auto Scaling group.", "accessLevel": "List" }, "DescribeLoadBalancerTargetGroups": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLoadBalancerTargetGroups.html", "description": "Describes the target groups for the specified Auto Scaling group.", "accessLevel": "List" }, "DescribeLoadBalancers": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLoadBalancers.html", "description": "Describes the load balancers for the specified Auto Scaling group.", "accessLevel": "List" }, "DescribeMetricCollectionTypes": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeMetricCollectionTypes.html", "description": "Describes the available CloudWatch metrics for Auto Scaling.", "accessLevel": "List" }, "DescribeNotificationConfigurations": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeNotificationConfigurations.html", "description": "Describes the notification actions associated with the specified Auto Scaling group.", "accessLevel": "List" }, "DescribePolicies": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribePolicies.html", "description": "Describes the policies for the specified Auto Scaling group.", "accessLevel": "List" }, "DescribeScalingActivities": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScalingActivities.html", "description": "Describes one or more scaling activities for the specified Auto Scaling group.", "accessLevel": "List" }, "DescribeScalingProcessTypes": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScalingProcessTypes.html", "description": "Describes the scaling process types for use with ResumeProcesses and SuspendProcesses.", "accessLevel": "List" }, "DescribeScheduledActions": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScheduledActions.html", "description": "Describes the actions scheduled for your Auto Scaling group that haven't run.", "accessLevel": "List" }, "DescribeTags": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeTags.html", "description": "Describes the specified tags.", "accessLevel": "Read" }, "DescribeTerminationPolicyTypes": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeTerminationPolicyTypes.html", "description": "Describes the termination policies supported by Auto Scaling.", "accessLevel": "List" }, "DetachInstances": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachInstances.html", "description": "Removes one or more instances from the specified Auto Scaling group.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "DetachLoadBalancerTargetGroups": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachLoadBalancerTargetGroups.html", "description": "Detaches one or more target groups from the specified Auto Scaling group.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } }, "conditions": ["autoscaling:TargetGroupARNs"] }, "DetachLoadBalancers": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachLoadBalancers.html", "description": "Removes one or more load balancers from the specified Auto Scaling group.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } }, "conditions": ["autoscaling:LoadBalancerNames"] }, "DisableMetricsCollection": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DisableMetricsCollection.html", "description": "Disables monitoring of the specified metrics for the specified Auto Scaling group.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "EnableMetricsCollection": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_EnableMetricsCollection.html", "description": "Enables monitoring of the specified metrics for the specified Auto Scaling group.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "EnterStandby": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_EnterStandby.html", "description": "Moves the specified instances into Standby mode.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "ExecutePolicy": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ExecutePolicy.html", "description": "Executes the specified policy.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "ExitStandby": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ExitStandby.html", "description": "Moves the specified instances out of Standby mode.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "PutLifecycleHook": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutLifecycleHook.html", "description": "Creates or updates a lifecycle hook for the specified Auto Scaling Group.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "PutNotificationConfiguration": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutNotificationConfiguration.html", "description": "Configures an Auto Scaling group to send notifications when specified events take place.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "PutScalingPolicy": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutScalingPolicy.html", "description": "Creates or updates a policy for an Auto Scaling group.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "PutScheduledUpdateGroupAction": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutScheduledUpdateGroupAction.html", "description": "Creates or updates a scheduled scaling action for an Auto Scaling group.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } }, "conditions": ["autoscaling:MaxSize", "autoscaling:MinSize"] }, "RecordLifecycleActionHeartbeat": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_RecordLifecycleActionHeartbeat.html", "description": "Records a heartbeat for the lifecycle action associated with the specified token or instance.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "ResumeProcesses": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ResumeProcesses.html", "description": "Resumes the specified suspended Auto Scaling processes, or all suspended process, for the specified Auto Scaling group.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "SetDesiredCapacity": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetDesiredCapacity.html", "description": "Sets the size of the specified Auto Scaling group.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "SetInstanceHealth": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetInstanceHealth.html", "description": "Sets the health status of the specified instance.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "SetInstanceProtection": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetInstanceProtection.html", "description": "Updates the instance protection settings of the specified instances.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "SuspendProcesses": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SuspendProcesses.html", "description": "Suspends the specified Auto Scaling processes, or all processes, for the specified Auto Scaling group.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "TerminateInstanceInAutoScalingGroup": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_TerminateInstanceInAutoScalingGroup.html", "description": "Terminates the specified instance and optionally adjusts the desired group size.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } } }, "UpdateAutoScalingGroup": { "url": "https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_UpdateAutoScalingGroup.html", "description": "Updates the configuration for the specified Auto Scaling group.", "accessLevel": "Write", "resourceTypes": { "autoScalingGroup": { "required": true, "conditions": ["autoscaling:ResourceTag/${TagKey}", "aws:ResourceTag/${TagKey}"] } }, "conditions": ["autoscaling:InstanceTypes", "autoscaling:LaunchConfigurationName", "autoscaling:LaunchTemplateVersionSpecified", "autoscaling:MaxSize", "autoscaling:MinSize", "autoscaling:VPCZoneIdentifiers"] } };

    /**
     * Attaches one or more EC2 instances to the specified Auto Scaling group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachInstances.html
     */
    public attachInstances () {
        this.add('autoscaling:AttachInstances');
        return this;
    }

    /**
     * Attaches one or more target groups to the specified Auto Scaling group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachLoadBalancerTargetGroups.html
     */
    public attachLoadBalancerTargetGroups () {
        this.add('autoscaling:AttachLoadBalancerTargetGroups');
        return this;
    }

    /**
     * Attaches one or more load balancers to the specified Auto Scaling group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachLoadBalancers.html
     */
    public attachLoadBalancers () {
        this.add('autoscaling:AttachLoadBalancers');
        return this;
    }

    /**
     * Deletes the specified scheduled actions.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_BatchDeleteScheduledAction.html
     */
    public batchDeleteScheduledAction () {
        this.add('autoscaling:BatchDeleteScheduledAction');
        return this;
    }

    /**
     * Creates or updates multiple scheduled scaling actions for an Auto Scaling group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_BatchPutScheduledUpdateGroupAction.html
     */
    public batchPutScheduledUpdateGroupAction () {
        this.add('autoscaling:BatchPutScheduledUpdateGroupAction');
        return this;
    }

    /**
     * Completes the lifecycle action for the specified token or instance with the specified result.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CompleteLifecycleAction.html
     */
    public completeLifecycleAction () {
        this.add('autoscaling:CompleteLifecycleAction');
        return this;
    }

    /**
     * Creates an Auto Scaling group with the specified name and attributes.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateAutoScalingGroup.html
     */
    public createAutoScalingGroup () {
        this.add('autoscaling:CreateAutoScalingGroup');
        return this;
    }

    /**
     * Creates a launch configuration.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateLaunchConfiguration.html
     */
    public createLaunchConfiguration () {
        this.add('autoscaling:CreateLaunchConfiguration');
        return this;
    }

    /**
     * Creates or updates tags for the specified Auto Scaling group.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateOrUpdateTags.html
     */
    public createOrUpdateTags () {
        this.add('autoscaling:CreateOrUpdateTags');
        return this;
    }

    /**
     * Deletes the specified Auto Scaling group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteAutoScalingGroup.html
     */
    public deleteAutoScalingGroup () {
        this.add('autoscaling:DeleteAutoScalingGroup');
        return this;
    }

    /**
     * Deletes the specified launch configuration.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteLaunchConfiguration.html
     */
    public deleteLaunchConfiguration () {
        this.add('autoscaling:DeleteLaunchConfiguration');
        return this;
    }

    /**
     * Deletes the specified lifecycle hook.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteLifecycleHook.html
     */
    public deleteLifecycleHook () {
        this.add('autoscaling:DeleteLifecycleHook');
        return this;
    }

    /**
     * Deletes the specified notification.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteNotificationConfiguration.html
     */
    public deleteNotificationConfiguration () {
        this.add('autoscaling:DeleteNotificationConfiguration');
        return this;
    }

    /**
     * Deletes the specified Auto Scaling policy.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeletePolicy.html
     */
    public deletePolicy () {
        this.add('autoscaling:DeletePolicy');
        return this;
    }

    /**
     * Deletes the specified scheduled action.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteScheduledAction.html
     */
    public deleteScheduledAction () {
        this.add('autoscaling:DeleteScheduledAction');
        return this;
    }

    /**
     * Deletes the specified tags.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteTags.html
     */
    public deleteTags () {
        this.add('autoscaling:DeleteTags');
        return this;
    }

    /**
     * Describes the current Auto Scaling resource limits for your AWS account.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAccountLimits.html
     */
    public describeAccountLimits () {
        this.add('autoscaling:DescribeAccountLimits');
        return this;
    }

    /**
     * Describes the policy adjustment types for use with PutScalingPolicy.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAdjustmentTypes.html
     */
    public describeAdjustmentTypes () {
        this.add('autoscaling:DescribeAdjustmentTypes');
        return this;
    }

    /**
     * Describes one or more Auto Scaling groups. If a list of names is not provided, the call describes all Auto Scaling groups.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingGroups.html
     */
    public describeAutoScalingGroups () {
        this.add('autoscaling:DescribeAutoScalingGroups');
        return this;
    }

    /**
     * Describes one or more Auto Scaling instances. If a list is not provided, the call describes all instances.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingInstances.html
     */
    public describeAutoScalingInstances () {
        this.add('autoscaling:DescribeAutoScalingInstances');
        return this;
    }

    /**
     * Describes the notification types that are supported by Auto Scaling.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingNotificationTypes.html
     */
    public describeAutoScalingNotificationTypes () {
        this.add('autoscaling:DescribeAutoScalingNotificationTypes');
        return this;
    }

    /**
     * Describes one or more launch configurations. If you omit the list of names, then the call describes all launch configurations.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLaunchConfigurations.html
     */
    public describeLaunchConfigurations () {
        this.add('autoscaling:DescribeLaunchConfigurations');
        return this;
    }

    /**
     * Describes the available types of lifecycle hooks.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLifecycleHookTypes.html
     */
    public describeLifecycleHookTypes () {
        this.add('autoscaling:DescribeLifecycleHookTypes');
        return this;
    }

    /**
     * Describes the lifecycle hooks for the specified Auto Scaling group.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLifecycleHooks.html
     */
    public describeLifecycleHooks () {
        this.add('autoscaling:DescribeLifecycleHooks');
        return this;
    }

    /**
     * Describes the target groups for the specified Auto Scaling group.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLoadBalancerTargetGroups.html
     */
    public describeLoadBalancerTargetGroups () {
        this.add('autoscaling:DescribeLoadBalancerTargetGroups');
        return this;
    }

    /**
     * Describes the load balancers for the specified Auto Scaling group.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLoadBalancers.html
     */
    public describeLoadBalancers () {
        this.add('autoscaling:DescribeLoadBalancers');
        return this;
    }

    /**
     * Describes the available CloudWatch metrics for Auto Scaling.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeMetricCollectionTypes.html
     */
    public describeMetricCollectionTypes () {
        this.add('autoscaling:DescribeMetricCollectionTypes');
        return this;
    }

    /**
     * Describes the notification actions associated with the specified Auto Scaling group.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeNotificationConfigurations.html
     */
    public describeNotificationConfigurations () {
        this.add('autoscaling:DescribeNotificationConfigurations');
        return this;
    }

    /**
     * Describes the policies for the specified Auto Scaling group.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribePolicies.html
     */
    public describePolicies () {
        this.add('autoscaling:DescribePolicies');
        return this;
    }

    /**
     * Describes one or more scaling activities for the specified Auto Scaling group.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScalingActivities.html
     */
    public describeScalingActivities () {
        this.add('autoscaling:DescribeScalingActivities');
        return this;
    }

    /**
     * Describes the scaling process types for use with ResumeProcesses and SuspendProcesses.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScalingProcessTypes.html
     */
    public describeScalingProcessTypes () {
        this.add('autoscaling:DescribeScalingProcessTypes');
        return this;
    }

    /**
     * Describes the actions scheduled for your Auto Scaling group that haven't run.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScheduledActions.html
     */
    public describeScheduledActions () {
        this.add('autoscaling:DescribeScheduledActions');
        return this;
    }

    /**
     * Describes the specified tags.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeTags.html
     */
    public describeTags () {
        this.add('autoscaling:DescribeTags');
        return this;
    }

    /**
     * Describes the termination policies supported by Auto Scaling.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeTerminationPolicyTypes.html
     */
    public describeTerminationPolicyTypes () {
        this.add('autoscaling:DescribeTerminationPolicyTypes');
        return this;
    }

    /**
     * Removes one or more instances from the specified Auto Scaling group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachInstances.html
     */
    public detachInstances () {
        this.add('autoscaling:DetachInstances');
        return this;
    }

    /**
     * Detaches one or more target groups from the specified Auto Scaling group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachLoadBalancerTargetGroups.html
     */
    public detachLoadBalancerTargetGroups () {
        this.add('autoscaling:DetachLoadBalancerTargetGroups');
        return this;
    }

    /**
     * Removes one or more load balancers from the specified Auto Scaling group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachLoadBalancers.html
     */
    public detachLoadBalancers () {
        this.add('autoscaling:DetachLoadBalancers');
        return this;
    }

    /**
     * Disables monitoring of the specified metrics for the specified Auto Scaling group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DisableMetricsCollection.html
     */
    public disableMetricsCollection () {
        this.add('autoscaling:DisableMetricsCollection');
        return this;
    }

    /**
     * Enables monitoring of the specified metrics for the specified Auto Scaling group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_EnableMetricsCollection.html
     */
    public enableMetricsCollection () {
        this.add('autoscaling:EnableMetricsCollection');
        return this;
    }

    /**
     * Moves the specified instances into Standby mode.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_EnterStandby.html
     */
    public enterStandby () {
        this.add('autoscaling:EnterStandby');
        return this;
    }

    /**
     * Executes the specified policy.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ExecutePolicy.html
     */
    public executePolicy () {
        this.add('autoscaling:ExecutePolicy');
        return this;
    }

    /**
     * Moves the specified instances out of Standby mode.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ExitStandby.html
     */
    public exitStandby () {
        this.add('autoscaling:ExitStandby');
        return this;
    }

    /**
     * Creates or updates a lifecycle hook for the specified Auto Scaling Group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutLifecycleHook.html
     */
    public putLifecycleHook () {
        this.add('autoscaling:PutLifecycleHook');
        return this;
    }

    /**
     * Configures an Auto Scaling group to send notifications when specified events take place.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutNotificationConfiguration.html
     */
    public putNotificationConfiguration () {
        this.add('autoscaling:PutNotificationConfiguration');
        return this;
    }

    /**
     * Creates or updates a policy for an Auto Scaling group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutScalingPolicy.html
     */
    public putScalingPolicy () {
        this.add('autoscaling:PutScalingPolicy');
        return this;
    }

    /**
     * Creates or updates a scheduled scaling action for an Auto Scaling group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutScheduledUpdateGroupAction.html
     */
    public putScheduledUpdateGroupAction () {
        this.add('autoscaling:PutScheduledUpdateGroupAction');
        return this;
    }

    /**
     * Records a heartbeat for the lifecycle action associated with the specified token or instance.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_RecordLifecycleActionHeartbeat.html
     */
    public recordLifecycleActionHeartbeat () {
        this.add('autoscaling:RecordLifecycleActionHeartbeat');
        return this;
    }

    /**
     * Resumes the specified suspended Auto Scaling processes, or all suspended process, for the specified Auto Scaling group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ResumeProcesses.html
     */
    public resumeProcesses () {
        this.add('autoscaling:ResumeProcesses');
        return this;
    }

    /**
     * Sets the size of the specified Auto Scaling group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetDesiredCapacity.html
     */
    public setDesiredCapacity () {
        this.add('autoscaling:SetDesiredCapacity');
        return this;
    }

    /**
     * Sets the health status of the specified instance.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetInstanceHealth.html
     */
    public setInstanceHealth () {
        this.add('autoscaling:SetInstanceHealth');
        return this;
    }

    /**
     * Updates the instance protection settings of the specified instances.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetInstanceProtection.html
     */
    public setInstanceProtection () {
        this.add('autoscaling:SetInstanceProtection');
        return this;
    }

    /**
     * Suspends the specified Auto Scaling processes, or all processes, for the specified Auto Scaling group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SuspendProcesses.html
     */
    public suspendProcesses () {
        this.add('autoscaling:SuspendProcesses');
        return this;
    }

    /**
     * Terminates the specified instance and optionally adjusts the desired group size.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_TerminateInstanceInAutoScalingGroup.html
     */
    public terminateInstanceInAutoScalingGroup () {
        this.add('autoscaling:TerminateInstanceInAutoScalingGroup');
        return this;
    }

    /**
     * Updates the configuration for the specified Auto Scaling group.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_UpdateAutoScalingGroup.html
     */
    public updateAutoScalingGroup () {
        this.add('autoscaling:UpdateAutoScalingGroup');
        return this;
    }
}
