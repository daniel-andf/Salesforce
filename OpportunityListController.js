({
  doInit: function(component, event, helper) {   
    helper.getAccountList(component); 
    helper.getOpportunitiesList(component);
   
  },
   onSelectChange : function(component, event, helper) {

    var selected = component.find('accountlist').get('v.value');
	helper.getOpportunitiesList(component,selected);
  
},
  deleteOpportunity: function(component, event, helper) {
   
    event.preventDefault();
    var opportunityName = event.getSource().get('v.value') ;

    var res = confirm('Delete the ' + opportunityName + ' Opportunity?');

    if(res==true)  {
  	  helper.deleteOpportunityRow(component,opportunityName);
      helper.getAccountList(component); 
  	  helper.getOpportunitiesList(component);
    }   
  },
    redirectOpportunity: function(component, event, helper) {
        var id = event.getSource().get('v.value') ;
        var link = window.location.origin + '/'+ id;
       	
        window.open(link,'_self');
    }
})