module.exports = {
    fn: async function(){
        var rights = await checkPermissions(this.req.session.userId, inputs.orgId)
    .intercept('orgNotFound', 'notFound');
    
    if (!_.contains(rights, 'removeOrDemoteOrgAdmins')) {
      throw 'forbidden';
    }
    
    await Organization.removeFromCollection(inputs.orgId, 'adminUsers', inputs.targetUserId);
    await Organization.addToCollection(inputs.orgId, 'regularUsers', inputs.targetUserId);
    
    return exits.success();
    }
    
};