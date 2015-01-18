module.exports["views"] = module.exports["views"] || {};
module.exports["views"]["app"] = module.exports["views"]["app"] || {};
module.exports["views"]["app"]["welcome"] = module.exports["views"]["app"]["welcome"] || {};
module.exports["views"]["app"]["welcome"]["welcome"] = {"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<h1>Welcome to my project! :D</h1>\n<pre>\n	CWD: "
    + escapeExpression(((helper = (helper = helpers.cwd || (depth0 != null ? depth0.cwd : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cwd","hash":{},"data":data}) : helper)))
    + "\n	DATA: "
    + escapeExpression(((helper = (helper = helpers.data || (depth0 != null ? depth0.data : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"data","hash":{},"data":data}) : helper)))
    + "\n</pre>";
},"useData":true};