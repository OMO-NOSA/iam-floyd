import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service directconnect
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdirectconnect.html
 */
export class Directconnect extends PolicyStatement {
    public servicePrefix = 'directconnect';
    public actions : Actions = { "AcceptDirectConnectGatewayAssociationProposal": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AcceptDirectConnectGatewayAssociationProposal.html", "description": "Accepts a proposal request to attach a virtual private gateway to a Direct Connect gateway.", "accessLevel": "Write", "resourceTypes": { "dx-gateway": { "required": true } } }, "AllocateConnectionOnInterconnect": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateConnectionOnInterconnect.html", "description": "Creates a hosted connection on an interconnect.", "accessLevel": "Write", "resourceTypes": { "dxcon": { "required": true } } }, "AllocateHostedConnection": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateHostedConnection.html", "description": "Creates a new hosted connection between a AWS Direct Connect partner's network and a specific AWS Direct Connect location.", "accessLevel": "Write", "resourceTypes": { "dxcon": { "required": false }, "dxlag": { "required": false } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "AllocatePrivateVirtualInterface": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocatePrivateVirtualInterface.html", "description": "Provisions a private virtual interface to be owned by a different customer.", "accessLevel": "Write", "resourceTypes": { "dxcon": { "required": false }, "dxlag": { "required": false } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "AllocatePublicVirtualInterface": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocatePublicVirtualInterface.html", "description": "Provisions a public virtual interface to be owned by a different customer.", "accessLevel": "Write", "resourceTypes": { "dxcon": { "required": false }, "dxlag": { "required": false } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "AllocateTransitVirtualInterface": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateTransitVirtualInterface.html", "description": "Provisions a transit virtual interface to be owned by a different customer.", "accessLevel": "Write", "resourceTypes": { "dxcon": { "required": false }, "dxlag": { "required": false } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "AssociateConnectionWithLag": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateConnectionWithLag.html", "description": "Associates a connection with a LAG.", "accessLevel": "Write", "resourceTypes": { "dxcon": { "required": true }, "dxlag": { "required": true } } }, "AssociateHostedConnection": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateHostedConnection.html", "description": "Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect.", "accessLevel": "Write", "resourceTypes": { "dxcon": { "required": false }, "dxlag": { "required": false } } }, "AssociateVirtualInterface": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateVirtualInterface.html", "description": "Associates a virtual interface with a specified link aggregation group (LAG) or connection.", "accessLevel": "Write", "resourceTypes": { "dxvif": { "required": true }, "dxcon": { "required": false }, "dxlag": { "required": false } } }, "ConfirmConnection": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmConnection.html", "description": "Confirm the creation of a hosted connection on an interconnect.", "accessLevel": "Write", "resourceTypes": { "dxcon": { "required": true } } }, "ConfirmPrivateVirtualInterface": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmPrivateVirtualInterface.html", "description": "Accept ownership of a private virtual interface created by another customer.", "accessLevel": "Write", "resourceTypes": { "dxvif": { "required": true } } }, "ConfirmPublicVirtualInterface": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmPublicVirtualInterface.html", "description": "Accept ownership of a public virtual interface created by another customer", "accessLevel": "Write", "resourceTypes": { "dxvif": { "required": true } } }, "ConfirmTransitVirtualInterface": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmTransitVirtualInterface.html", "description": "Accept ownership of a transit virtual interface created by another customer", "accessLevel": "Write", "resourceTypes": { "dxvif": { "required": true } } }, "CreateBGPPeer": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateBGPPeer.html", "description": "Creates a BGP peer on the specified virtual interface.", "accessLevel": "Write", "resourceTypes": { "dxvif": { "required": true } } }, "CreateConnection": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateConnection.html", "description": "Creates a new connection between the customer network and a specific AWS Direct Connect location.", "accessLevel": "Write", "resourceTypes": { "dxlag": { "required": false } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "CreateDirectConnectGateway": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGateway.html", "description": "Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways.", "accessLevel": "Write" }, "CreateDirectConnectGatewayAssociation": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGatewayAssociation.html", "description": "Creates an association between a Direct Connect gateway and a virtual private gateway.", "accessLevel": "Write", "resourceTypes": { "dx-gateway": { "required": true } } }, "CreateDirectConnectGatewayAssociationProposal": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGatewayAssociationProposal.html", "description": "Creates a proposal to associate the specified virtual private gateway with the specified Direct Connect gateway.", "accessLevel": "Write", "resourceTypes": { "dx-gateway": { "required": true } } }, "CreateInterconnect": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateInterconnect.html", "description": "Creates a new interconnect between a AWS Direct Connect partner's network and a specific AWS Direct Connect location.", "accessLevel": "Write", "resourceTypes": { "dxlag": { "required": false } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "CreateLag": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateLag.html", "description": "Creates a link aggregation group (LAG) with the specified number of bundled physical connections between the customer network and a specific AWS Direct Connect location.", "accessLevel": "Write", "resourceTypes": { "dxcon": { "required": false } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "CreatePrivateVirtualInterface": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreatePrivateVirtualInterface.html", "description": "Creates a new private virtual interface.", "accessLevel": "Write", "resourceTypes": { "dxcon": { "required": false }, "dxlag": { "required": false } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "CreatePublicVirtualInterface": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreatePublicVirtualInterface.html", "description": "Creates a new public virtual interface.", "accessLevel": "Write", "resourceTypes": { "dxcon": { "required": false }, "dxlag": { "required": false } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "CreateTransitVirtualInterface": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateTransitVirtualInterface.html", "description": "Creates a new transit virtual interface.", "accessLevel": "Write", "resourceTypes": { "dxcon": { "required": false }, "dxlag": { "required": false } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "DeleteBGPPeer": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteBGPPeer.html", "description": "Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.", "accessLevel": "Write", "resourceTypes": { "dxvif": { "required": true } } }, "DeleteConnection": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteConnection.html", "description": "Deletes the connection.", "accessLevel": "Write", "resourceTypes": { "dxcon": { "required": true } } }, "DeleteDirectConnectGateway": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGateway.html", "description": "Deletes the specified Direct Connect gateway.", "accessLevel": "Write", "resourceTypes": { "dx-gateway": { "required": true } } }, "DeleteDirectConnectGatewayAssociation": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGatewayAssociation.html", "description": "Deletes the association between the specified Direct Connect gateway and virtual private gateway.", "accessLevel": "Write", "resourceTypes": { "dx-gateway": { "required": true } } }, "DeleteDirectConnectGatewayAssociationProposal": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGatewayAssociationProposal.html", "description": "Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway.", "accessLevel": "Write" }, "DeleteInterconnect": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteInterconnect.html", "description": "Deletes the specified interconnect.", "accessLevel": "Write", "resourceTypes": { "dxcon": { "required": true } } }, "DeleteLag": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteLag.html", "description": "Deletes the specified link aggregation group (LAG).", "accessLevel": "Write", "resourceTypes": { "dxlag": { "required": true } } }, "DeleteVirtualInterface": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteVirtualInterface.html", "description": "Deletes a virtual interface.", "accessLevel": "Write", "resourceTypes": { "dxvif": { "required": true } } }, "DescribeConnectionLoa": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnectionLoa.html", "description": "Returns the LOA-CFA for a Connection.", "accessLevel": "Read", "resourceTypes": { "dxcon": { "required": true } } }, "DescribeConnections": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnections.html", "description": "Displays all connections in this region.", "accessLevel": "Read", "resourceTypes": { "dxcon": { "required": false } } }, "DescribeConnectionsOnInterconnect": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnectionsOnInterconnect.html", "description": "Return a list of connections that have been provisioned on the given interconnect.", "accessLevel": "Read", "resourceTypes": { "dxcon": { "required": true } } }, "DescribeDirectConnectGatewayAssociationProposals": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAssociationProposals.html", "description": "Describes one or more association proposals for connection between a virtual private gateway and a Direct Connect gateway.", "accessLevel": "Read", "resourceTypes": { "dx-gateway": { "required": false } } }, "DescribeDirectConnectGatewayAssociations": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAssociations.html", "description": "Lists the associations between your Direct Connect gateways and virtual private gateways.", "accessLevel": "Read", "resourceTypes": { "dx-gateway": { "required": false } } }, "DescribeDirectConnectGatewayAttachments": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAttachments.html", "description": "Lists the attachments between your Direct Connect gateways and virtual interfaces.", "accessLevel": "Read", "resourceTypes": { "dx-gateway": { "required": false } } }, "DescribeDirectConnectGateways": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGateways.html", "description": "Lists all your Direct Connect gateways or only the specified Direct Connect gateway.", "accessLevel": "Read", "resourceTypes": { "dx-gateway": { "required": false } } }, "DescribeHostedConnections": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeHostedConnections.html", "description": "Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG).", "accessLevel": "Read", "resourceTypes": { "dxcon": { "required": false }, "dxlag": { "required": false } } }, "DescribeInterconnectLoa": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeInterconnectLoa.html", "description": "Returns the LOA-CFA for an Interconnect.", "accessLevel": "Read", "resourceTypes": { "dxcon": { "required": true } } }, "DescribeInterconnects": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeInterconnects.html", "description": "Returns a list of interconnects owned by the AWS account.", "accessLevel": "Read", "resourceTypes": { "dxcon": { "required": false } } }, "DescribeLags": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLags.html", "description": "Describes all your link aggregation groups (LAG) or the specified LAG.", "accessLevel": "Read", "resourceTypes": { "dxlag": { "required": false } } }, "DescribeLoa": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLoa.html", "description": "Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).", "accessLevel": "Read", "resourceTypes": { "dxcon": { "required": false }, "dxlag": { "required": false } } }, "DescribeLocations": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLocations.html", "description": "Returns the list of AWS Direct Connect locations in the current AWS region.", "accessLevel": "List" }, "DescribeTags": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeTags.html", "description": "Describes the tags associated with the specified AWS Direct Connect resources.", "accessLevel": "Read", "resourceTypes": { "dxcon": { "required": false }, "dxlag": { "required": false }, "dxvif": { "required": false } } }, "DescribeVirtualGateways": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeVirtualGateways.html", "description": "Returns a list of virtual private gateways owned by the AWS account.", "accessLevel": "Read" }, "DescribeVirtualInterfaces": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeVirtualInterfaces.html", "description": "Displays all virtual interfaces for an AWS account.", "accessLevel": "Read", "resourceTypes": { "dxcon": { "required": false }, "dxlag": { "required": false }, "dxvif": { "required": false } } }, "DisassociateConnectionFromLag": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DisassociateConnectionFromLag.html", "description": "Disassociates a connection from a link aggregation group (LAG).", "accessLevel": "Write", "resourceTypes": { "dxcon": { "required": true }, "dxlag": { "required": true } } }, "TagResource": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_TagResource.html", "description": "Adds the specified tags to the specified AWS Direct Connect resource. Each resource can have a maximum of 50 tags.", "accessLevel": "Tagging", "resourceTypes": { "dxcon": { "required": false }, "dxlag": { "required": false }, "dxvif": { "required": false } }, "conditions": ["aws:RequestTag/${TagKey}", "aws:TagKeys"] }, "UntagResource": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UntagResource.html", "description": "Removes one or more tags from the specified AWS Direct Connect resource.", "accessLevel": "Tagging", "resourceTypes": { "dxcon": { "required": false }, "dxlag": { "required": false }, "dxvif": { "required": false } }, "conditions": ["aws:TagKeys"] }, "UpdateDirectConnectGatewayAssociation": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateDirectConnectGatewayAssociation.html", "description": "Updates the specified attributes of the Direct Connect gateway association.", "accessLevel": "Write" }, "UpdateLag": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateLag.html", "description": "Updates the attributes of the specified link aggregation group (LAG).", "accessLevel": "Write", "resourceTypes": { "dxlag": { "required": true } } }, "UpdateVirtualInterfaceAttributes": { "url": "https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateVirtualInterfaceAttributes.html", "description": "Updates the specified attributes of the specified virtual private interface.", "accessLevel": "Write", "resourceTypes": { "dxvif": { "required": true } } } };

    /**
     * Accepts a proposal request to attach a virtual private gateway to a Direct Connect gateway.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AcceptDirectConnectGatewayAssociationProposal.html
     */
    public acceptDirectConnectGatewayAssociationProposal () {
        this.add('directconnect:AcceptDirectConnectGatewayAssociationProposal');
        return this;
    }

    /**
     * Creates a hosted connection on an interconnect.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateConnectionOnInterconnect.html
     */
    public allocateConnectionOnInterconnect () {
        this.add('directconnect:AllocateConnectionOnInterconnect');
        return this;
    }

    /**
     * Creates a new hosted connection between a AWS Direct Connect partner's network and a specific AWS Direct Connect location.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateHostedConnection.html
     */
    public allocateHostedConnection () {
        this.add('directconnect:AllocateHostedConnection');
        return this;
    }

    /**
     * Provisions a private virtual interface to be owned by a different customer.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocatePrivateVirtualInterface.html
     */
    public allocatePrivateVirtualInterface () {
        this.add('directconnect:AllocatePrivateVirtualInterface');
        return this;
    }

    /**
     * Provisions a public virtual interface to be owned by a different customer.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocatePublicVirtualInterface.html
     */
    public allocatePublicVirtualInterface () {
        this.add('directconnect:AllocatePublicVirtualInterface');
        return this;
    }

    /**
     * Provisions a transit virtual interface to be owned by a different customer.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateTransitVirtualInterface.html
     */
    public allocateTransitVirtualInterface () {
        this.add('directconnect:AllocateTransitVirtualInterface');
        return this;
    }

    /**
     * Associates a connection with a LAG.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateConnectionWithLag.html
     */
    public associateConnectionWithLag () {
        this.add('directconnect:AssociateConnectionWithLag');
        return this;
    }

    /**
     * Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateHostedConnection.html
     */
    public associateHostedConnection () {
        this.add('directconnect:AssociateHostedConnection');
        return this;
    }

    /**
     * Associates a virtual interface with a specified link aggregation group (LAG) or connection.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateVirtualInterface.html
     */
    public associateVirtualInterface () {
        this.add('directconnect:AssociateVirtualInterface');
        return this;
    }

    /**
     * Confirm the creation of a hosted connection on an interconnect.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmConnection.html
     */
    public confirmConnection () {
        this.add('directconnect:ConfirmConnection');
        return this;
    }

    /**
     * Accept ownership of a private virtual interface created by another customer.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmPrivateVirtualInterface.html
     */
    public confirmPrivateVirtualInterface () {
        this.add('directconnect:ConfirmPrivateVirtualInterface');
        return this;
    }

    /**
     * Accept ownership of a public virtual interface created by another customer
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmPublicVirtualInterface.html
     */
    public confirmPublicVirtualInterface () {
        this.add('directconnect:ConfirmPublicVirtualInterface');
        return this;
    }

    /**
     * Accept ownership of a transit virtual interface created by another customer
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmTransitVirtualInterface.html
     */
    public confirmTransitVirtualInterface () {
        this.add('directconnect:ConfirmTransitVirtualInterface');
        return this;
    }

    /**
     * Creates a BGP peer on the specified virtual interface.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateBGPPeer.html
     */
    public createBGPPeer () {
        this.add('directconnect:CreateBGPPeer');
        return this;
    }

    /**
     * Creates a new connection between the customer network and a specific AWS Direct Connect location.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateConnection.html
     */
    public createConnection () {
        this.add('directconnect:CreateConnection');
        return this;
    }

    /**
     * Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGateway.html
     */
    public createDirectConnectGateway () {
        this.add('directconnect:CreateDirectConnectGateway');
        return this;
    }

    /**
     * Creates an association between a Direct Connect gateway and a virtual private gateway.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGatewayAssociation.html
     */
    public createDirectConnectGatewayAssociation () {
        this.add('directconnect:CreateDirectConnectGatewayAssociation');
        return this;
    }

    /**
     * Creates a proposal to associate the specified virtual private gateway with the specified Direct Connect gateway.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGatewayAssociationProposal.html
     */
    public createDirectConnectGatewayAssociationProposal () {
        this.add('directconnect:CreateDirectConnectGatewayAssociationProposal');
        return this;
    }

    /**
     * Creates a new interconnect between a AWS Direct Connect partner's network and a specific AWS Direct Connect location.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateInterconnect.html
     */
    public createInterconnect () {
        this.add('directconnect:CreateInterconnect');
        return this;
    }

    /**
     * Creates a link aggregation group (LAG) with the specified number of bundled physical connections between the customer network and a specific AWS Direct Connect location.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateLag.html
     */
    public createLag () {
        this.add('directconnect:CreateLag');
        return this;
    }

    /**
     * Creates a new private virtual interface.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreatePrivateVirtualInterface.html
     */
    public createPrivateVirtualInterface () {
        this.add('directconnect:CreatePrivateVirtualInterface');
        return this;
    }

    /**
     * Creates a new public virtual interface.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreatePublicVirtualInterface.html
     */
    public createPublicVirtualInterface () {
        this.add('directconnect:CreatePublicVirtualInterface');
        return this;
    }

    /**
     * Creates a new transit virtual interface.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateTransitVirtualInterface.html
     */
    public createTransitVirtualInterface () {
        this.add('directconnect:CreateTransitVirtualInterface');
        return this;
    }

    /**
     * Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteBGPPeer.html
     */
    public deleteBGPPeer () {
        this.add('directconnect:DeleteBGPPeer');
        return this;
    }

    /**
     * Deletes the connection.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteConnection.html
     */
    public deleteConnection () {
        this.add('directconnect:DeleteConnection');
        return this;
    }

    /**
     * Deletes the specified Direct Connect gateway.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGateway.html
     */
    public deleteDirectConnectGateway () {
        this.add('directconnect:DeleteDirectConnectGateway');
        return this;
    }

    /**
     * Deletes the association between the specified Direct Connect gateway and virtual private gateway.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGatewayAssociation.html
     */
    public deleteDirectConnectGatewayAssociation () {
        this.add('directconnect:DeleteDirectConnectGatewayAssociation');
        return this;
    }

    /**
     * Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGatewayAssociationProposal.html
     */
    public deleteDirectConnectGatewayAssociationProposal () {
        this.add('directconnect:DeleteDirectConnectGatewayAssociationProposal');
        return this;
    }

    /**
     * Deletes the specified interconnect.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteInterconnect.html
     */
    public deleteInterconnect () {
        this.add('directconnect:DeleteInterconnect');
        return this;
    }

    /**
     * Deletes the specified link aggregation group (LAG).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteLag.html
     */
    public deleteLag () {
        this.add('directconnect:DeleteLag');
        return this;
    }

    /**
     * Deletes a virtual interface.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteVirtualInterface.html
     */
    public deleteVirtualInterface () {
        this.add('directconnect:DeleteVirtualInterface');
        return this;
    }

    /**
     * Returns the LOA-CFA for a Connection.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnectionLoa.html
     */
    public describeConnectionLoa () {
        this.add('directconnect:DescribeConnectionLoa');
        return this;
    }

    /**
     * Displays all connections in this region.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnections.html
     */
    public describeConnections () {
        this.add('directconnect:DescribeConnections');
        return this;
    }

    /**
     * Return a list of connections that have been provisioned on the given interconnect.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnectionsOnInterconnect.html
     */
    public describeConnectionsOnInterconnect () {
        this.add('directconnect:DescribeConnectionsOnInterconnect');
        return this;
    }

    /**
     * Describes one or more association proposals for connection between a virtual private gateway and a Direct Connect gateway.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAssociationProposals.html
     */
    public describeDirectConnectGatewayAssociationProposals () {
        this.add('directconnect:DescribeDirectConnectGatewayAssociationProposals');
        return this;
    }

    /**
     * Lists the associations between your Direct Connect gateways and virtual private gateways.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAssociations.html
     */
    public describeDirectConnectGatewayAssociations () {
        this.add('directconnect:DescribeDirectConnectGatewayAssociations');
        return this;
    }

    /**
     * Lists the attachments between your Direct Connect gateways and virtual interfaces.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAttachments.html
     */
    public describeDirectConnectGatewayAttachments () {
        this.add('directconnect:DescribeDirectConnectGatewayAttachments');
        return this;
    }

    /**
     * Lists all your Direct Connect gateways or only the specified Direct Connect gateway.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGateways.html
     */
    public describeDirectConnectGateways () {
        this.add('directconnect:DescribeDirectConnectGateways');
        return this;
    }

    /**
     * Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG).
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeHostedConnections.html
     */
    public describeHostedConnections () {
        this.add('directconnect:DescribeHostedConnections');
        return this;
    }

    /**
     * Returns the LOA-CFA for an Interconnect.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeInterconnectLoa.html
     */
    public describeInterconnectLoa () {
        this.add('directconnect:DescribeInterconnectLoa');
        return this;
    }

    /**
     * Returns a list of interconnects owned by the AWS account.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeInterconnects.html
     */
    public describeInterconnects () {
        this.add('directconnect:DescribeInterconnects');
        return this;
    }

    /**
     * Describes all your link aggregation groups (LAG) or the specified LAG.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLags.html
     */
    public describeLags () {
        this.add('directconnect:DescribeLags');
        return this;
    }

    /**
     * Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLoa.html
     */
    public describeLoa () {
        this.add('directconnect:DescribeLoa');
        return this;
    }

    /**
     * Returns the list of AWS Direct Connect locations in the current AWS region.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLocations.html
     */
    public describeLocations () {
        this.add('directconnect:DescribeLocations');
        return this;
    }

    /**
     * Describes the tags associated with the specified AWS Direct Connect resources.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeTags.html
     */
    public describeTags () {
        this.add('directconnect:DescribeTags');
        return this;
    }

    /**
     * Returns a list of virtual private gateways owned by the AWS account.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeVirtualGateways.html
     */
    public describeVirtualGateways () {
        this.add('directconnect:DescribeVirtualGateways');
        return this;
    }

    /**
     * Displays all virtual interfaces for an AWS account.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeVirtualInterfaces.html
     */
    public describeVirtualInterfaces () {
        this.add('directconnect:DescribeVirtualInterfaces');
        return this;
    }

    /**
     * Disassociates a connection from a link aggregation group (LAG).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DisassociateConnectionFromLag.html
     */
    public disassociateConnectionFromLag () {
        this.add('directconnect:DisassociateConnectionFromLag');
        return this;
    }

    /**
     * Adds the specified tags to the specified AWS Direct Connect resource. Each resource can have a maximum of 50 tags.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_TagResource.html
     */
    public tagResource () {
        this.add('directconnect:TagResource');
        return this;
    }

    /**
     * Removes one or more tags from the specified AWS Direct Connect resource.
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UntagResource.html
     */
    public untagResource () {
        this.add('directconnect:UntagResource');
        return this;
    }

    /**
     * Updates the specified attributes of the Direct Connect gateway association.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateDirectConnectGatewayAssociation.html
     */
    public updateDirectConnectGatewayAssociation () {
        this.add('directconnect:UpdateDirectConnectGatewayAssociation');
        return this;
    }

    /**
     * Updates the attributes of the specified link aggregation group (LAG).
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateLag.html
     */
    public updateLag () {
        this.add('directconnect:UpdateLag');
        return this;
    }

    /**
     * Updates the specified attributes of the specified virtual private interface.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateVirtualInterfaceAttributes.html
     */
    public updateVirtualInterfaceAttributes () {
        this.add('directconnect:UpdateVirtualInterfaceAttributes');
        return this;
    }
}
