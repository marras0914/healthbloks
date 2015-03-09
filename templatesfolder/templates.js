(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bubble-template'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "     <div class=\"row\">     \n          <div class=\""
    + escapeExpression(((helper = (helper = helpers.RecipientType || (depth0 != null ? depth0.RecipientType : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"RecipientType","hash":{},"data":data}) : helper)))
    + "\">\n               <h4>Rcvd: "
    + escapeExpression(((helper = (helper = helpers.msgdate || (depth0 != null ? depth0.msgdate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"msgdate","hash":{},"data":data}) : helper)))
    + "</h4>\n               <br>\n               <p>"
    + escapeExpression(((helper = (helper = helpers.msg || (depth0 != null ? depth0.msg : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"msg","hash":{},"data":data}) : helper)))
    + "</p>\n          </div>\n     </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, blockHelperMissing=helpers.blockHelperMissing, buffer = "     \n";
  stack1 = blockHelperMissing.call(depth0, lambda(depth0, depth0), {"name":"this","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
templates['content-template'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (data && data.first), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers.unless.call(depth0, (data && data.first), {"name":"unless","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "     <div class=\"content active\" id=\"panel"
    + escapeExpression(((helper = (helper = helpers.conversationId || (depth0 != null ? depth0.conversationId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"conversationId","hash":{},"data":data}) : helper)))
    + "\">\n          <div class=\"fixed\">\n               <div class=\"row\">\n                    <div class=\"subject-bar\">\n                         <h3><span></span></h3>\n                    </div>     \n               </div>\n               \n               <div class=\"row\">\n                    <form action=\"\" id=\"input-text\"> \n                         <div class=\"row \">\n                              <div class=\"large-12 columns\">\n                                   <textarea placeholder=\"Type new message here\"></textarea>\n                              </div>\n                         </div>\n                    </form>\n               </div>\n          </div>\n          \n          <div class=\"bubble-container scroll\"></div>\n             \n     </div>\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "     <div class=\"content\" id=\"panel"
    + escapeExpression(((helper = (helper = helpers.conversationId || (depth0 != null ? depth0.conversationId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"conversationId","hash":{},"data":data}) : helper)))
    + "\">\n          <div class=\"fixed \">\n               <div class=\"row\">\n                    <div class=\"subject-bar\">\n                         <h3><span></span></h3>\n                    </div>     \n               </div>\n               \n               <div class=\"row\">\n                    <form action=\"\" id=\"input-text\"> \n                         <div class=\"row \">\n                              <div class=\"large-12 columns\">\n                                   <textarea placeholder=\"Type new message here\"></textarea>\n                              </div>\n                         </div>\n                    </form>\n               </div>\n          </div>\n          \n               <div class=\"bubble-container scroll\">                 \n               </div>\n          \n     </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "     \n\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
templates['provider-list'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "     <option value=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "     \n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
templates['tab-template'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (data && data.first), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers.unless.call(depth0, (data && data.first), {"name":"unless","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "               \n                    <dd id=\""
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" class=\"tab-title active\">\n                         <a href=\"#panel"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" role=\"tab\" aria-selected=\"true\">\n                              \n                              <div class=\"row\">\n                                   <div class=\"small-9 columns\">\n                                        <h4>"
    + escapeExpression(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subject","hash":{},"data":data}) : helper)))
    + "</h4>   \n                                   </div>\n                                   <div class=\"small-3 columns\">\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.hasBeenRead : depth0), {"name":"unless","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                                   </div>\n                              </div>                                      \n                              <div class=\"row\">\n                                   <div class=\"small-9 columns\">\n                                        <small>"
    + escapeExpression(((helper = (helper = helpers.lastmsgdate || (depth0 != null ? depth0.lastmsgdate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lastmsgdate","hash":{},"data":data}) : helper)))
    + "</small> \n                                   </div>\n                                   <div class=\"small-3 columns\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.hasAttachments : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                                   </div>\n                              </div>   \n                         </a>\n                    </dd>\n                  \n";
},"3":function(depth0,helpers,partials,data) {
  return "                                             <i class=\"fi-asterisk\"></i>\n";
  },"5":function(depth0,helpers,partials,data) {
  return "                                             <i class=\"fi-paperclip\"></i>\n";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "                    \n                    <dd id=\""
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" class=\"tab-title\">\n                         <a href=\"#panel"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" role=\"tab\" aria-selected=\"false\">\n                              <div class=\"row\">\n                                   <div class=\"small-9 columns\">\n                                         <h4>"
    + escapeExpression(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subject","hash":{},"data":data}) : helper)))
    + "</h4>   \n                                   </div>\n                                   <div class=\"small-3 columns\">\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.hasBeenRead : depth0), {"name":"unless","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                                   </div>\n                              </div>                                      \n                              <div class=\"row\">\n                                   <div class=\"small-9 columns\">\n                                        <small>"
    + escapeExpression(((helper = (helper = helpers.lastmsgdate || (depth0 != null ? depth0.lastmsgdate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lastmsgdate","hash":{},"data":data}) : helper)))
    + "</small> \n                                   </div>\n                                   <div class=\"small-3 columns\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.hasAttachments : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                                   </div>\n                              </div>      \n                         </a>\n                    </dd>\n               \n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "     \n  \n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bubble-template'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "     <div class=\"row\">     \n          <div class=\""
    + escapeExpression(((helper = (helper = helpers.RecipientType || (depth0 != null ? depth0.RecipientType : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"RecipientType","hash":{},"data":data}) : helper)))
    + "\">\n               <h4>Rcvd: "
    + escapeExpression(((helper = (helper = helpers.msgdate || (depth0 != null ? depth0.msgdate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"msgdate","hash":{},"data":data}) : helper)))
    + "</h4>\n               <br>\n               <p>"
    + escapeExpression(((helper = (helper = helpers.msg || (depth0 != null ? depth0.msg : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"msg","hash":{},"data":data}) : helper)))
    + "</p>\n          </div>\n     </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, blockHelperMissing=helpers.blockHelperMissing, buffer = "     \n";
  stack1 = blockHelperMissing.call(depth0, lambda(depth0, depth0), {"name":"this","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
templates['content-template'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (data && data.first), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers.unless.call(depth0, (data && data.first), {"name":"unless","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "     <div class=\"content active\" id=\"panel"
    + escapeExpression(((helper = (helper = helpers.conversationId || (depth0 != null ? depth0.conversationId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"conversationId","hash":{},"data":data}) : helper)))
    + "\">\n          <div class=\"fixed\">\n               <div class=\"row\">\n                    <div class=\"subject-bar\">\n                         <h3><span></span></h3>\n                    </div>     \n               </div>\n               \n               <div class=\"row\">\n                    <form action=\"\" id=\"input-text\"> \n                         <div class=\"row \">\n                              <div class=\"large-12 columns\">\n                                   <textarea placeholder=\"Type new message here\"></textarea>\n                              </div>\n                         </div>\n                    </form>\n               </div>\n          </div>\n          <div class=\"row\" style=\"position:relative\">\n          <div class=\"bubble-container scroll\"></div>\n          </div>   \n     </div>\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "     <div class=\"content\" id=\"panel"
    + escapeExpression(((helper = (helper = helpers.conversationId || (depth0 != null ? depth0.conversationId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"conversationId","hash":{},"data":data}) : helper)))
    + "\">\n          <div class=\"fixed \">\n               <div class=\"row\">\n                    <div class=\"subject-bar\">\n                         <h3><span></span></h3>\n                    </div>     \n               </div>\n               \n               <div class=\"row\">\n                    <form action=\"\" id=\"input-text\"> \n                         <div class=\"row \">\n                              <div class=\"large-12 columns\">\n                                   <textarea placeholder=\"Type new message here\"></textarea>\n                              </div>\n                         </div>\n                    </form>\n               </div>\n          </div>\n           <div class=\"row\" style=\"position:relative\">\n          <div class=\"bubble-container scroll\"></div>\n          </div>   \n     </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "     \n\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
templates['provider-list'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "     <option value=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "     \n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
templates['tab-template'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (data && data.first), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers.unless.call(depth0, (data && data.first), {"name":"unless","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "               \n                    <dd id=\""
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" class=\"tab-title active\">\n                         <a href=\"#panel"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" role=\"tab\" aria-selected=\"true\">\n                              \n                              <div class=\"row\">\n                                   <div class=\"small-9 columns\">\n                                        <h4>"
    + escapeExpression(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subject","hash":{},"data":data}) : helper)))
    + "</h4>   \n                                   </div>\n                                   <div class=\"small-3 columns\">\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.hasBeenRead : depth0), {"name":"unless","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                                   </div>\n                              </div>                                      \n                              <div class=\"row\">\n                                   <div class=\"small-9 columns\">\n                                        <small>"
    + escapeExpression(((helper = (helper = helpers.lastmsgdate || (depth0 != null ? depth0.lastmsgdate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lastmsgdate","hash":{},"data":data}) : helper)))
    + "</small> \n                                   </div>\n                                   <div class=\"small-3 columns\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.hasAttachments : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                                   </div>\n                              </div>   \n                         </a>\n                    </dd>\n                  \n";
},"3":function(depth0,helpers,partials,data) {
  return "                                             <i class=\"fi-asterisk\"></i>\n";
  },"5":function(depth0,helpers,partials,data) {
  return "                                             <i class=\"fi-paperclip\"></i>\n";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "                    \n                    <dd id=\""
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" class=\"tab-title\">\n                         <a href=\"#panel"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" role=\"tab\" aria-selected=\"false\">\n                              <div class=\"row\">\n                                   <div class=\"small-9 columns\">\n                                         <h4>"
    + escapeExpression(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subject","hash":{},"data":data}) : helper)))
    + "</h4>   \n                                   </div>\n                                   <div class=\"small-3 columns\">\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.hasBeenRead : depth0), {"name":"unless","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                                   </div>\n                              </div>                                      \n                              <div class=\"row\">\n                                   <div class=\"small-9 columns\">\n                                        <small>"
    + escapeExpression(((helper = (helper = helpers.lastmsgdate || (depth0 != null ? depth0.lastmsgdate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lastmsgdate","hash":{},"data":data}) : helper)))
    + "</small> \n                                   </div>\n                                   <div class=\"small-3 columns\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.hasAttachments : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                                   </div>\n                              </div>      \n                         </a>\n                    </dd>\n               \n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "     \n  \n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bubble-template'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "     <div class=\"row\">     \n          <div class=\""
    + escapeExpression(((helper = (helper = helpers.RecipientType || (depth0 != null ? depth0.RecipientType : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"RecipientType","hash":{},"data":data}) : helper)))
    + "\">\n               <h4>Rcvd: "
    + escapeExpression(((helper = (helper = helpers.msgdate || (depth0 != null ? depth0.msgdate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"msgdate","hash":{},"data":data}) : helper)))
    + "</h4>\n               <br>\n               <p>"
    + escapeExpression(((helper = (helper = helpers.msg || (depth0 != null ? depth0.msg : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"msg","hash":{},"data":data}) : helper)))
    + "</p>\n          </div>\n     </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, blockHelperMissing=helpers.blockHelperMissing, buffer = "     \n";
  stack1 = blockHelperMissing.call(depth0, lambda(depth0, depth0), {"name":"this","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
templates['content-template'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (data && data.first), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers.unless.call(depth0, (data && data.first), {"name":"unless","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "     <div class=\"content active\" id=\"panel"
    + escapeExpression(((helper = (helper = helpers.conversationId || (depth0 != null ? depth0.conversationId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"conversationId","hash":{},"data":data}) : helper)))
    + "\">\n          <div class=\"fixed\">\n               <div class=\"row\">\n                    <div class=\"subject-bar\">\n                         <h3><span></span></h3>\n                    </div>     \n               </div>\n               \n               <div class=\"row\">\n                    <form action=\"\" id=\"input-text\"> \n                         <div class=\"row \">\n                              <div class=\"large-12 columns\">\n                                   <textarea placeholder=\"Type new message here\"></textarea>\n                              </div>\n                         </div>\n                    </form>\n               </div>\n          </div>\n          <div style=\"position:relative\">\n          <div class=\"bubble-container scroll\"></div>\n          </div>   \n     </div>\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "     <div class=\"content\" id=\"panel"
    + escapeExpression(((helper = (helper = helpers.conversationId || (depth0 != null ? depth0.conversationId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"conversationId","hash":{},"data":data}) : helper)))
    + "\">\n          <div class=\"fixed \">\n               <div class=\"row\">\n                    <div class=\"subject-bar\">\n                         <h3><span></span></h3>\n                    </div>     \n               </div>\n               \n               <div class=\"row\">\n                    <form action=\"\" id=\"input-text\"> \n                         <div class=\"row \">\n                              <div class=\"large-12 columns\">\n                                   <textarea placeholder=\"Type new message here\"></textarea>\n                              </div>\n                         </div>\n                    </form>\n               </div>\n          </div>\n           <div style=\"position:relative\">\n          <div class=\"bubble-container scroll\"></div>\n          </div>   \n     </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "     \n\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
templates['provider-list'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "     <option value=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "     \n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
templates['tab-template'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (data && data.first), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers.unless.call(depth0, (data && data.first), {"name":"unless","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "               \n                    <dd id=\""
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" class=\"tab-title active\">\n                         <a href=\"#panel"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" role=\"tab\" aria-selected=\"true\">\n                              \n                              <div class=\"row\">\n                                   <div class=\"small-9 columns\">\n                                        <h4>"
    + escapeExpression(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subject","hash":{},"data":data}) : helper)))
    + "</h4>   \n                                   </div>\n                                   <div class=\"small-3 columns\">\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.hasBeenRead : depth0), {"name":"unless","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                                   </div>\n                              </div>                                      \n                              <div class=\"row\">\n                                   <div class=\"small-9 columns\">\n                                        <small>"
    + escapeExpression(((helper = (helper = helpers.lastmsgdate || (depth0 != null ? depth0.lastmsgdate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lastmsgdate","hash":{},"data":data}) : helper)))
    + "</small> \n                                   </div>\n                                   <div class=\"small-3 columns\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.hasAttachments : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                                   </div>\n                              </div>   \n                         </a>\n                    </dd>\n                  \n";
},"3":function(depth0,helpers,partials,data) {
  return "                                             <i class=\"fi-asterisk\"></i>\n";
  },"5":function(depth0,helpers,partials,data) {
  return "                                             <i class=\"fi-paperclip\"></i>\n";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "                    \n                    <dd id=\""
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" class=\"tab-title\">\n                         <a href=\"#panel"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" role=\"tab\" aria-selected=\"false\">\n                              <div class=\"row\">\n                                   <div class=\"small-9 columns\">\n                                         <h4>"
    + escapeExpression(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subject","hash":{},"data":data}) : helper)))
    + "</h4>   \n                                   </div>\n                                   <div class=\"small-3 columns\">\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.hasBeenRead : depth0), {"name":"unless","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                                   </div>\n                              </div>                                      \n                              <div class=\"row\">\n                                   <div class=\"small-9 columns\">\n                                        <small>"
    + escapeExpression(((helper = (helper = helpers.lastmsgdate || (depth0 != null ? depth0.lastmsgdate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lastmsgdate","hash":{},"data":data}) : helper)))
    + "</small> \n                                   </div>\n                                   <div class=\"small-3 columns\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.hasAttachments : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                                   </div>\n                              </div>      \n                         </a>\n                    </dd>\n               \n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "     \n  \n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bubble-template'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "     <div class=\"row\">     \n          <div class=\""
    + escapeExpression(((helper = (helper = helpers.RecipientType || (depth0 != null ? depth0.RecipientType : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"RecipientType","hash":{},"data":data}) : helper)))
    + "\">\n               <h4>Rcvd: "
    + escapeExpression(((helper = (helper = helpers.msgdate || (depth0 != null ? depth0.msgdate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"msgdate","hash":{},"data":data}) : helper)))
    + "</h4>\n               <br>\n               <p>"
    + escapeExpression(((helper = (helper = helpers.msg || (depth0 != null ? depth0.msg : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"msg","hash":{},"data":data}) : helper)))
    + "</p>\n          </div>\n     </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, blockHelperMissing=helpers.blockHelperMissing, buffer = "     \n";
  stack1 = blockHelperMissing.call(depth0, lambda(depth0, depth0), {"name":"this","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
templates['content-template'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (data && data.first), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers.unless.call(depth0, (data && data.first), {"name":"unless","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "     <div class=\"content active\" id=\"panel"
    + escapeExpression(((helper = (helper = helpers.conversationId || (depth0 != null ? depth0.conversationId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"conversationId","hash":{},"data":data}) : helper)))
    + "\">\n          <div class=\"fixed\">\n               <div class=\"row\">\n                    <div class=\"subject-bar\">\n                         <h3><span></span></h3>\n                    </div>     \n               </div>\n               \n               <div class=\"row\">\n                    <form action=\"\" id=\"input-text\"> \n                         <div class=\"row \">\n                              <div class=\"large-12 columns\">\n                                   <textarea placeholder=\"Type new message here\"></textarea>\n                              </div>\n                         </div>\n                    </form>\n               </div>\n          </div>\n          <div >\n          <div class=\"bubble-container scroll\"></div>\n          </div>   \n     </div>\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "     <div class=\"content\" id=\"panel"
    + escapeExpression(((helper = (helper = helpers.conversationId || (depth0 != null ? depth0.conversationId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"conversationId","hash":{},"data":data}) : helper)))
    + "\">\n          <div class=\"fixed \">\n               <div class=\"row\">\n                    <div class=\"subject-bar\">\n                         <h3><span></span></h3>\n                    </div>     \n               </div>\n               \n               <div class=\"row\">\n                    <form action=\"\" id=\"input-text\"> \n                         <div class=\"row \">\n                              <div class=\"large-12 columns\">\n                                   <textarea placeholder=\"Type new message here\"></textarea>\n                              </div>\n                         </div>\n                    </form>\n               </div>\n          </div>\n           <div >\n          <div class=\"bubble-container scroll\"></div>\n          </div>   \n     </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "     \n\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
templates['provider-list'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "     <option value=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "     \n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
templates['tab-template'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (data && data.first), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers.unless.call(depth0, (data && data.first), {"name":"unless","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "               \n                    <dd id=\""
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" class=\"tab-title active\">\n                         <a href=\"#panel"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" role=\"tab\" aria-selected=\"true\">\n                              \n                              <div class=\"row\">\n                                   <div class=\"small-9 columns\">\n                                        <h4>"
    + escapeExpression(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subject","hash":{},"data":data}) : helper)))
    + "</h4>   \n                                   </div>\n                                   <div class=\"small-3 columns\">\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.hasBeenRead : depth0), {"name":"unless","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                                   </div>\n                              </div>                                      \n                              <div class=\"row\">\n                                   <div class=\"small-9 columns\">\n                                        <small>"
    + escapeExpression(((helper = (helper = helpers.lastmsgdate || (depth0 != null ? depth0.lastmsgdate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lastmsgdate","hash":{},"data":data}) : helper)))
    + "</small> \n                                   </div>\n                                   <div class=\"small-3 columns\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.hasAttachments : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                                   </div>\n                              </div>   \n                         </a>\n                    </dd>\n                  \n";
},"3":function(depth0,helpers,partials,data) {
  return "                                             <i class=\"fi-asterisk\"></i>\n";
  },"5":function(depth0,helpers,partials,data) {
  return "                                             <i class=\"fi-paperclip\"></i>\n";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "                    \n                    <dd id=\""
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" class=\"tab-title\">\n                         <a href=\"#panel"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" role=\"tab\" aria-selected=\"false\">\n                              <div class=\"row\">\n                                   <div class=\"small-9 columns\">\n                                         <h4>"
    + escapeExpression(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subject","hash":{},"data":data}) : helper)))
    + "</h4>   \n                                   </div>\n                                   <div class=\"small-3 columns\">\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.hasBeenRead : depth0), {"name":"unless","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                                   </div>\n                              </div>                                      \n                              <div class=\"row\">\n                                   <div class=\"small-9 columns\">\n                                        <small>"
    + escapeExpression(((helper = (helper = helpers.lastmsgdate || (depth0 != null ? depth0.lastmsgdate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lastmsgdate","hash":{},"data":data}) : helper)))
    + "</small> \n                                   </div>\n                                   <div class=\"small-3 columns\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.hasAttachments : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                                   </div>\n                              </div>      \n                         </a>\n                    </dd>\n               \n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "     \n  \n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
})();
