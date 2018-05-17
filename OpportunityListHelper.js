({
  getOpportunitiesList: function(component,selected) {
    var action = component.get('c.getOpportunities');
    var self = this;
    var accountOption = selected;
      
	action.setParams({
    	account : accountOption

   	});          
    action.setCallback(this, function(actionResult) {
    	component.set('v.opportunities', actionResult.getReturnValue());
    });
    $A.enqueueAction(action);
  },
   getAccountList: function(component) {
    var action = component.get('c.getAccounts');
    var self = this;

    action.setCallback(this, function(actionResult) {
        
     	component.set('v.accts', actionResult.getReturnValue());
  
    });
    $A.enqueueAction(action);
  },
  deleteOpportunityRow: function(component,opportunity) {
    var action = component.get('c.delOpportunity');
    var self = this;
     
    action.setParams({
    	name : opportunity
    });

    action.setCallback(this, function(actionResult) {
      });
    $A.enqueueAction(action);
  }      
})