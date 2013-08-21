this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["application_edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<img src=\"";
  if (stack1 = helpers.app_cover) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_cover; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"50\" />";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "checked";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <input type=\"hidden\" name=\"app_id\" value=\"";
  if (stack1 = helpers.app_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "add";
  }

function program9(depth0,data) {
  
  
  return "edit";
  }

function program11(depth0,data) {
  
  
  return "建立 Application";
  }

function program13(depth0,data) {
  
  
  return "編輯 Application";
  }

function program15(depth0,data) {
  
  
  return "重新填寫";
  }

function program17(depth0,data) {
  
  
  return "取消編輯";
  }

  buffer += "<article class=\"module width_full\">\n<div style=\"width:97%;margin:0 auto;\">\n    <div class=\"menu\">\n        <a class=\"btn btn-primary\" data-model=\"application_list\" href=\"#!/application/list\" style=\"color: white;\"><i class=\"icon-edit icon-white\"></i> 檢視軟體列表</a>\n    </div>\n    <form action=\"#\" method=\"post\" class=\"well\" id=\"application_form\">\n        <div class=\"control-group\">\n            <label>唯一ID</label>\n            <input type=\"text\" name=\"app_key\" class=\"span3\" placeholder=\"Please enter App key\" value=\"";
  if (stack1 = helpers.app_key) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_key; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" /><br /><button class=\"btn btn-info auto_generate\" type=\"button\" data-field=\"app_key\"><i class=\"icon-arrow-up icon-white\"></i> 自動產生</button>\n            <span class=\"help-inline\"></span>\n        </div>\n        <div class=\"control-group\">\n            <label>檔名</label>\n            <input type=\"text\" name=\"app_title\" class=\"span3\" placeholder=\"Please enter app title\" value=\"";
  if (stack1 = helpers.app_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n            <p class=\"help-block\"></p>\n        </div>\n        <div class=\"control-group\">\n            <label>縮寫</label>\n            <input type=\"text\" name=\"app_name\" class=\"span3\" placeholder=\"Please enter app name\" value=\"";
  if (stack1 = helpers.app_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n            <p class=\"help-block\"></p>\n        </div>\n        <div class=\"control-group\">\n            <label>縮圖網址</label>\n            <input type=\"text\" name=\"app_cover\" class=\"span3\" placeholder=\"Please enter app cover\" value=\"";
  if (stack1 = helpers.app_cover) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_cover; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <p class=\"help-block\"></p>\n        </div>\n        <div class=\"control-group\">\n            <label>網址</label>\n            <input type=\"text\" name=\"app_url\" class=\"span3\" placeholder=\"Please enter app url\" value=\"";
  if (stack1 = helpers.app_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n            <p class=\"help-block\"></p>\n        </div>\n        <div class=\"control-group\">\n            <label class=\"checkbox\">\n                <input type=\"checkbox\" name=\"app_enabled\" value=\"1\" ";
  stack1 = helpers['if'].call(depth0, depth0.is_enabled, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options = {hash:{},inverse:self.program(3, program3, data),fn:self.noop,data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> 啟用\n            </label>\n        </div>\n        <p class=\"help-block\">*上面欄位務必填寫.</p>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <button type=\"button\" data-model=\"application\" class=\"btn btn-primary ";
  options = {hash:{},inverse:self.program(7, program7, data),fn:self.noop,data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><i class=\"icon-edit icon-white\"></i> ";
  options = {hash:{},inverse:self.program(11, program11, data),fn:self.noop,data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n        <button class=\"btn\" type=\"reset\">";
  options = {hash:{},inverse:self.program(15, program15, data),fn:self.noop,data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options = {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    </form>\n</div>\n</article>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["application_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <tr>\n            <td><input type=\"checkbox\" name=\"app_id[]\" value=\"";
  if (stack1 = helpers.app_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></td>\n            <td>";
  if (stack1 = helpers.app_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  if (stack1 = helpers.app_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  if (stack1 = helpers.app_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td style=\"text-align: center\"><img src=\"";
  if (stack1 = helpers.app_cover) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_cover; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"40\" /></td>\n            <td style=\"text-align: center\"><a href=\"";
  if (stack1 = helpers.app_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">點選開啟</a></td>\n            <td>\n                ";
  stack1 = helpers['if'].call(depth0, depth0.is_enabled, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </td>\n            <td>\n                <a class=\"btn btn-primary\" data-model=\"application\" data-id=\"";
  if (stack1 = helpers.app_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#!/application/edit/";
  if (stack1 = helpers.app_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"color: white;\"><i class=\"icon-edit icon-white\"></i> 編輯</a>&nbsp;\n                <a class=\"btn btn-danger delete\" data-model=\"application\" data-id=\"";
  if (stack1 = helpers.app_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\" style=\"color: white;\"><i class=\"icon-trash icon-white\"></i> 刪除</a>\n            </td>\n        </tr>\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n                    <span style=\"color: blue\">是</span>\n                ";
  }

function program4(depth0,data) {
  
  
  return "\n                    <span style=\"color: red\">否</span>\n                ";
  }

  buffer += "<article class=\"module width_full\">\n<div style=\"width:97%;margin:0 auto;\">\n\n    <div class=\"menu\">\n        <a class=\"btn btn-primary search_app\" data-form=\"#application_list_form\" data-model=\"application\" style=\"color: white;\"><i class=\"icon-ok icon-white\"></i> 搜尋列表</a>\n        <a class=\"btn btn-primary check_all\" data-model=\"application\" style=\"color: white;\"><i class=\"icon-ok icon-white\"></i> 全選列表</a>\n        <a class=\"btn btn-primary\" data-model=\"application\" href=\"#!/application/add\" style=\"color: white;\"><i class=\"icon-edit icon-white\"></i> 新增軟體</a>\n        <a class=\"btn btn-danger delete_all\" data-form=\"#application_list_form\" data-model=\"application\" style=\"color: white;\"><i class=\"icon-trash icon-white\"></i> 刪除軟體</a>\n\n    </div>\n    <form action=\"#\" method=\"post\" id=\"application_list_form\">\n    <table id=\"application_list\" class=\"table table-striped table-bordered table-condensed tablesorter\">\n        <thead>\n            <tr>\n                <th>&nbsp;</th>\n                <th>編號</th>\n                <th>檔名</th>\n                <th>縮寫</th>\n                <th>縮圖</th>\n                <th>網址</th>\n                <th>啟用</th>\n                <th>動作</th>\n            </tr>\n            <tr>\n                <td>&nbsp;</td>\n                <td>&nbsp;</td>\n                <td><input type=\"text\" name=\"app_title\" class=\"span2\" placeholder=\"search title\" /></td>\n                <td><input type=\"text\" name=\"app_name\" class=\"span2\" placeholder=\"search name\" /></td>\n                <td>&nbsp;</td>\n                <td>&nbsp;</td>\n                <td>\n                    <select name=\"app_enabled\" style=\"width: 75px\">\n                        <option value=\"\">請選擇</option>\n                        <option value=\"1\">是</option>\n                        <option value=\"0\">否</option>\n                    </select>\n                </td>\n                <td>&nbsp;</td>\n            </tr>\n        </thead>\n        <tbody>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n    </table>\n    </form>\n</div>\n</article>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["application_list_div"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div style=\"float:left; width:150px; height:150px; margin: 0 auto; text-align: center\">\n    <img src=\"";
  if (stack1 = helpers.app_cover) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_cover; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"100\" /><br />\n    ";
  if (stack1 = helpers.app_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<br />\n    <input type=\"checkbox\" name=\"app_id[]\" value=\"";
  if (stack1 = helpers.app_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["application_list_div_add"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div style=\"float:left; width:150px; height:150px; margin: 0 auto; text-align: center\">\n    <img src=\"";
  if (stack1 = helpers.app_cover) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_cover; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"100\" /><br />\n    ";
  if (stack1 = helpers.app_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<br />\n    <input type=\"checkbox\" name=\"id[]\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["group_edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <input type=\"hidden\" name=\"id\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "add";
  }

function program5(depth0,data) {
  
  
  return "edit";
  }

function program7(depth0,data) {
  
  
  return "建立群組";
  }

function program9(depth0,data) {
  
  
  return "編輯群組";
  }

function program11(depth0,data) {
  
  
  return "重新填寫";
  }

function program13(depth0,data) {
  
  
  return "取消編輯";
  }

  buffer += "<article class=\"module width_full\">\n<div style=\"width:97%;margin:0 auto;\">\n    <div class=\"menu\">\n        <a class=\"btn btn-primary\" data-model=\"group_list\" href=\"#!/group/list\" style=\"color: white;\"><i class=\"icon-edit icon-white\"></i> 群組列表</a>\n    </div>\n    <form action=\"#\" method=\"post\" class=\"well\" id=\"group_form\">\n        <div class=\"control-group\">\n            <label>英文代號</label>\n            <input type=\"text\" name=\"name\" class=\"span2\" placeholder=\"Please enter group name\" value=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n            <p class=\"help-block\"></p>\n        </div>\n        <div class=\"control-group\">\n            <label>中文代號</label>\n            <input type=\"text\" name=\"description\" class=\"span2\" placeholder=\"Please enter group description\" value=\"";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n            <p class=\"help-block\"></p>\n        </div>\n        <div class=\"control-group\">\n            <label>排序</label>\n            <input type=\"text\" name=\"group_order\" class=\"span1\" placeholder=\"number\" value=\"";
  if (stack1 = helpers.group_order) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.group_order; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n            <p class=\"help-block\"></p>\n        </div>\n        <p class=\"help-block\">*上面欄位務必填寫.</p>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <button type=\"button\" data-model=\"group\" class=\"btn btn-primary ";
  options = {hash:{},inverse:self.program(3, program3, data),fn:self.noop,data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><i class=\"icon-edit icon-white\"></i> ";
  options = {hash:{},inverse:self.program(7, program7, data),fn:self.noop,data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n        <button class=\"btn\" type=\"reset\">";
  options = {hash:{},inverse:self.program(11, program11, data),fn:self.noop,data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    </form>\n</div>\n</article>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["group_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <tr>\n            <td><input type=\"checkbox\" name=\"id[]\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></td>\n            <td>";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  if (stack1 = helpers.group_order) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.group_order; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>\n                <a class=\"btn btn-primary\" data-model=\"group\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#!/group/edit/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"color: white;\"><i class=\"icon-edit icon-white\"></i> 編輯</a>&nbsp;\n                <a class=\"btn btn-danger delete\" data-model=\"group\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\" style=\"color: white;\"><i class=\"icon-trash icon-white\"></i> 刪除</a>\n            </td>\n        </tr>\n        ";
  return buffer;
  }

  buffer += "<article class=\"module width_full\">\n<div style=\"width:97%;margin:0 auto;\">\n\n    <div class=\"menu\">\n        <a class=\"btn btn-primary check_all\" data-model=\"group\" style=\"color: white;\"><i class=\"icon-ok icon-white\"></i> 全選列表</a>\n        <a class=\"btn btn-primary\" data-model=\"group\" href=\"#!/group/add\" style=\"color: white;\"><i class=\"icon-edit icon-white\"></i> 新增群組</a>\n        <a class=\"btn btn-danger delete_all\" data-form=\"#group_list_form\" data-model=\"group\" style=\"color: white;\"><i class=\"icon-trash icon-white\"></i> 刪除群組</a>\n\n    </div>\n    <form action=\"#\" method=\"post\" id=\"group_list_form\">\n    <table id=\"group_list\" class=\"table table-striped table-bordered table-condensed tablesorter\">\n        <thead>\n            <tr>\n                <th>&nbsp;</th>\n                <th>編號</th>\n                <th>英文代號</th>\n                <th>中文代號</th>\n                <th>順序</th>\n                <th>動作</th>\n            </tr>\n        </thead>\n        <tbody>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n    </table>\n    </form>\n</div>\n</article>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["log_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"previous\">\n            <a href=\"#!/log/list/1\" style=\"margin-right: 10px;\">&larr; 第一頁</a>\n        </li>\n        <li class=\"previous\">\n            <a href=\"#!/log/list/";
  if (stack1 = helpers.previous_page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.previous_page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">&larr; 上一頁</a>\n        </li>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"next\">\n            <a href=\"#!/log/list/";
  if (stack1 = helpers.next_page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.next_page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">下一頁 &rarr;</a>\n        </li>\n        ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n        <tr>\n            <td><input type=\"checkbox\" name=\"id[]\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></td>\n            <td><a href=\"#!/user/edit/";
  if (stack1 = helpers.user_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.user_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n            <td>";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.search_url || depth0.search_url),stack1 ? stack1.call(depth0, depth0.url, options) : helperMissing.call(depth0, "search_url", depth0.url, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</td>\n            <td>";
  if (stack2 = helpers.line) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.line; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n            <td>";
  if (stack2 = helpers.user_agent) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.user_agent; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n            <td>";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.search_message || depth0.search_message),stack1 ? stack1.call(depth0, depth0.message, options) : helperMissing.call(depth0, "search_message", depth0.message, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</td>\n            <td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date_time || depth0.date_time),stack1 ? stack1.call(depth0, depth0.add_time, options) : helperMissing.call(depth0, "date_time", depth0.add_time, options)))
    + "</td>\n        </tr>\n        ";
  return buffer;
  }

  buffer += "<article class=\"module width_full\">\n<div style=\"width:97%;margin:0 auto;\">\n\n    <div class=\"menu\">\n        <a class=\"btn btn-primary search_log\" data-form=\"#log_list_form\" data-model=\"log\" style=\"color: white;\"><i class=\"icon-ok icon-white\"></i> 搜尋列表</a>\n        <a class=\"btn btn-primary check_all\" data-model=\"log\" style=\"color: white;\"><i class=\"icon-ok icon-white\"></i> 全選列表</a>\n        <a class=\"btn btn-danger delete_all\" data-form=\"#log_list_form\" data-model=\"log\" style=\"color: white;\"><i class=\"icon-trash icon-white\"></i> 刪除紀錄</a>\n    </div>\n    <ul class=\"pager\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.previous_show) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.previous_show; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.previous_show) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.next_show) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.next_show; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.next_show) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n    <form action=\"#\" method=\"post\" id=\"log_list_form\">\n    <table id=\"log_list\" class=\"table table-striped table-bordered table-condensed tablesorter\">\n        <thead>\n            <tr>\n                <th style=\"width: 10px\">&nbsp;</th>\n                <th>使用者</th>\n                <th>網址</th>\n                <th style=\"width: 50px\">行號</th>\n                <th>瀏覽器</th>\n                <th>訊息</th>\n                <th style=\"width: 150px\">建立日期</th>\n            </tr>\n            <tr>\n                <td>&nbsp;</td>\n                <td>&nbsp;</td>\n                <td><input type=\"text\" name=\"url\" value=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"search url\" class=\"span4\" /></td>\n                <td>&nbsp;</td>\n                <td>&nbsp;</td>\n                <td><input type=\"text\" name=\"message\" value=\"";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"search message\" class=\"span4\" /></td>\n                <td>&nbsp;</td>\n            </tr>\n        </thead>\n        <tbody>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n    </table>\n    </form>\n</div>\n</article>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["privilege_edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <option value=\"";
  if (stack1 = helpers.resource_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.resource_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-module=\"";
  if (stack1 = helpers.resource_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.resource_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.resource_description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.resource_description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "(";
  if (stack1 = helpers.resource_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.resource_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")</option>\n                ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"control-group\" style=\"float:left; width: 100px;\">\n            <label>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</label>\n            <select name=\"action[]\" class=\"span1\">\n                <option value=\"deny\">禁止</option>\n                <option value=\"allow\">允許</option>\n            </select>\n            <p class=\"help-block\"></p>\n            <input type=\"hidden\" name=\"group_id[]\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n        </div>\n        ";
  return buffer;
  }

  buffer += "<article class=\"module width_full\">\n<div style=\"width:97%;margin:0 auto;\">\n    <div class=\"menu\">\n        <a class=\"btn btn-primary\" data-model=\"privilege_list\" href=\"#!/privilege/list\" style=\"color: white;\"><i class=\"icon-edit icon-white\"></i> 權限列表</a>\n    </div>\n    <form action=\"#\" method=\"post\" class=\"well\" id=\"privilege_form\">\n        <div class=\"control-group\">\n            <label>主權限</label>\n            <select name=\"parent_id\" class=\"span3\">\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.resource) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.resource; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.resource) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </select>\n            <p class=\"help-block\"></p>\n        </div>\n        <div class=\"control-group\">\n            <label>子權限</label>\n            <input type=\"text\" name=\"resource_name\" class=\"span3\" placeholder=\"Please enter privilege name\" />\n            <p class=\"help-block\"></p>\n        </div>\n        <div class=\"control-group\">\n            <label>權限說明</label>\n            <input type=\"text\" name=\"resource_description\" class=\"span3\" placeholder=\"Please enter privilege description\"/>\n            <p class=\"help-block\"></p>\n        </div>\n        <div class=\"control-group\">\n            <label>Request Method</label>\n            <select name=\"method\" class=\"span2\">\n                <option value=''>請選擇</option>\n                <option value='get'>GET</option>\n                <option value='post'>POST</option>\n                <option value='put'>PUT</option>\n                <option value='delete'>DELETE</option>\n            </select>\n            <p class=\"help-block\"></p>\n        </div>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.all_group) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.all_group; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.all_group) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <p class=\"help-block\" style=\"clear:both\">*上面欄位務必填寫.</p>\n        <button type=\"button\" data-model=\"privilege\" class=\"btn btn-primary add\"><i class=\"icon-edit icon-white\"></i> 建立權限</button>\n        <button class=\"btn\" type=\"reset\">重新選擇</button>\n    </form>\n</div>\n</article>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["privilege_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <th>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</th>\n                ";
  return buffer;
  }

  buffer += "<article class=\"module width_full\">\n<div style=\"width:97%;margin:0 auto;\">\n\n    <div class=\"menu\">\n        <a class=\"btn btn-primary check_all\" data-model=\"privilege\" style=\"color: white;\"><i class=\"icon-ok icon-white\"></i> 全選列表</a>\n        <a class=\"btn btn-primary\" data-model=\"privilege\" href=\"#!/privilege/add\" style=\"color: white;\"><i class=\"icon-edit icon-white\"></i> 新增權限</a>\n        <a class=\"btn btn-danger delete_all\" data-form=\"#privilege_list_form\" data-model=\"privilege\" style=\"color: white;\"><i class=\"icon-trash icon-white\"></i> 刪除權限</a>\n    </div>\n    <form action=\"#\" method=\"post\" id=\"privilege_list_form\">\n    <table id=\"privilege_list\" class=\"table table-striped table-bordered table-condensed tablesorter\">\n        <thead>\n            <tr>\n                <th>&nbsp;</th>\n                <th>權限規則</th>\n                <th>method</th>\n                <th>權限說明</th>\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.all_group) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.all_group; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.all_group) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <th>動作</th>\n            </tr>\n        </thead>\n        <tbody>\n            ";
  if (stack1 = helpers.html) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.html; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n    </table>\n    </form>\n</div>\n</article>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["user_edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "登入密碼";
  }

function program3(depth0,data) {
  
  
  return "修改密碼";
  }

function program5(depth0,data) {
  
  
  return "不需要修改密碼，請留空白";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"form-group\">\n                    <label class=\"control-label\">群組:</label>\n                    <div class=\"controls\">\n                        ";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  if (stack1 = helpers.all_groups) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.all_groups; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.all_groups) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </div>\n                </div>\n                ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n                        <label class=\"checkbox\">\n                            <input type=\"checkbox\" name=\"user_groups[]\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.group_active || depth0.group_active),stack1 ? stack1.call(depth0, depth0.active, options) : helperMissing.call(depth0, "group_active", depth0.active, options)))
    + " />";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.description; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n                        </label>\n                        ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <input type=\"hidden\" name=\"id\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program14(depth0,data) {
  
  
  return "add";
  }

function program16(depth0,data) {
  
  
  return "edit";
  }

function program18(depth0,data) {
  
  
  return "建立帳號";
  }

function program20(depth0,data) {
  
  
  return "編輯帳號";
  }

function program22(depth0,data) {
  
  
  return "重新填寫";
  }

function program24(depth0,data) {
  
  
  return "取消編輯";
  }

function program26(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n        <div class=\"tab-pane\" id=\"software\">\n            <form action=\"#\" method=\"post\" class=\"well\" id=\"app_lists_form\">\n                <div class=\"menu menu_left\">\n                    <a class=\"btn btn-primary add_apps\" data-form=\"#app_lists_form\" style=\"color: white;\"><i class=\"icon-edit icon-white\"></i> 新增軟體</a>\n                </div>\n                <p style=\"clear:both;\">&nbsp;</p>\n                <div id=\"app_list\">\n                </div>\n                <p style=\"clear:both;\">&nbsp;</p>\n                <input type=\"hidden\" name=\"user_id\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n            </form>\n        </div>\n        <div class=\"tab-pane\" id=\"user_apps\">\n            <form action=\"#\" method=\"post\" class=\"well\" id=\"user_apps_form\">\n                <div class=\"menu menu_left\">\n                    <a class=\"btn btn-danger delete_apps\" data-form=\"#user_apps_form\" style=\"color: white;\"><i class=\"icon-edit icon-white\"></i> 刪除軟體</a>\n                </div>\n                <div id=\"user_app_list\">\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data};
  if (stack1 = helpers.apps) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.apps; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.apps) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </div>\n                <p style=\"clear:both;\">&nbsp;</p>\n            </form>\n        </div>\n        ";
  return buffer;
  }
function program27(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div style=\"float:left; width:150px; height:150px; margin: 0 auto; text-align: center\">\n                    <img src=\"";
  if (stack1 = helpers.app_cover) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_cover; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"100\" /><br />\n                    ";
  if (stack1 = helpers.app_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<br />\n                    <input type=\"checkbox\" name=\"id[]\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n                </div>\n                ";
  return buffer;
  }

  buffer += "<article class=\"module width_full\">\n<div style=\"width:97%;margin:0 auto;\">\n    <div class=\"menu\">\n        <a class=\"btn btn-primary\" data-model=\"user\" href=\"#!/user/list\" style=\"color: white;\"><i class=\"icon-edit icon-white\"></i> 檢視帳號列表</a>\n    </div>\n    <ul id=\"mytab\" class=\"nav nav-tabs\">\n        <li class=\"active\"><a href=\"#profile\" data-toggle=\"tab\">個人資料</a></li>\n    </ul>\n    <div class=\"tab-content\">\n        <div class=\"tab-pane active\" id=\"profile\">\n            <form action=\"#\" method=\"post\" class=\"well\" id=\"user_add_form\">\n                <div class=\"form-group\">\n                    <label class=\"control-label\">登入帳號</label>\n                    <input type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"Please enter user email\" value=\"";
  if (stack1 = helpers.username) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.username; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <span class=\"help-block\">僅支援英文+數字帳號</span>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">";
  options = {hash:{},inverse:self.program(1, program1, data),fn:self.noop,data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n                    <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Please enter password\">\n                    <p class=\"help-block\">";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">確認密碼</label>\n                    <input type=\"password\" name=\"confirm_password\" class=\"form-control\" placeholder=\"Confirm Password\">\n                    <span class=\"help-block\"></span>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">名字(First name)</label>\n                    <input type=\"text\" name=\"first_name\" class=\"form-control\" placeholder=\"Please enter user first name\" value=\"";
  if (stack1 = helpers.first_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.first_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <span class=\"help-block\"></span>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">姓氏(Last name)</label>\n                    <input type=\"text\" name=\"last_name\" class=\"form-control\" placeholder=\"Please enter user last name\" value=\"";
  if (stack1 = helpers.last_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.last_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <span class=\"help-block\"></span>\n                </div>\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <p class=\"help-block\">*上面欄位務必填寫.</p>\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <button type=\"button\" ";
  options = {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-model=\"user\" class=\"btn btn-primary ";
  options = {hash:{},inverse:self.program(14, program14, data),fn:self.noop,data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options = {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  options = {hash:{},inverse:self.program(18, program18, data),fn:self.noop,data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options = {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n                <button class=\"btn\" type=\"reset\">";
  options = {hash:{},inverse:self.program(22, program22, data),fn:self.noop,data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options = {hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n            </form>\n        </div>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>\n</article>\n<script>\n(function($){\n    $('#myTab').tab('show');\n    $('a[data-toggle=\"tab\"]').on('shown', function (e) {\n        console.log(e);\n        console.log(e.target.hash); // activated tab\n        console.log(e.relatedTarget.hash); // previous tab\n    });\n}(jQuery));\n</script>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["user_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"previous\">\n            <a href=\"#!/user/list/1\" style=\"margin-right: 10px;\">&larr; 第一頁</a>\n        </li>\n        <li class=\"previous\">\n            <a href=\"#!/user/list/";
  if (stack1 = helpers.previous_page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.previous_page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">&larr; 上一頁</a>\n        </li>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"next\">\n            <a href=\"#!/user/list/";
  if (stack1 = helpers.next_page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.next_page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">下一頁 &rarr;</a>\n        </li>\n        ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n        <tr>\n            <td><input type=\"checkbox\" name=\"id[]\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></td>\n            <td>";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  if (stack1 = helpers.first_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.first_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  if (stack1 = helpers.last_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.last_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  if (stack1 = helpers.username) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.username; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date_time || depth0.date_time),stack1 ? stack1.call(depth0, depth0.created_on, options) : helperMissing.call(depth0, "date_time", depth0.created_on, options)))
    + "</td>\n            <td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date_time || depth0.date_time),stack1 ? stack1.call(depth0, depth0.last_login, options) : helperMissing.call(depth0, "date_time", depth0.last_login, options)))
    + "</td>\n            <td>\n                <a class=\"btn btn-primary\" data-model=\"user\" data-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" href=\"#!/user/edit/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" style=\"color: white;\"><i class=\"icon-edit\"></i> 編輯</a>&nbsp;\n                <a class=\"btn btn-danger delete\" data-model=\"user\" data-username=\"";
  if (stack2 = helpers.username) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.username; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" data-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" href=\"#\" style=\"color: white;\"><i class=\"icon-trash\"></i> 刪除</a>\n            </td>\n        </tr>\n        ";
  return buffer;
  }

  buffer += "<article class=\"module width_full\">\n<div style=\"width:97%;margin:0 auto;\">\n\n    <div class=\"menu\">\n        <a class=\"btn btn-primary search_user\" data-form=\"#user_list_form\" data-model=\"user\" style=\"color: white;\"><i class=\"icon-search\"></i> 搜尋列表</a>\n        <a class=\"btn btn-primary check_all\" data-model=\"user\" style=\"color: white;\"><i class=\"icon-ok\"></i> 全選列表</a>\n        <a class=\"btn btn-primary\" data-model=\"user\" href=\"#!/user/add\" style=\"color: white;\"><i class=\"icon-edit\"></i> 新增帳號</a>\n        <a class=\"btn btn-danger delete_all\" data-form=\"#user_list_form\" data-model=\"user\" style=\"color: white;\"><i class=\"icon-trash\"></i> 刪除帳號</a>\n    </div>\n    <ul class=\"pager\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.previous_show) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.previous_show; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.previous_show) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.next_show) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.next_show; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.next_show) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n    <form action=\"#\" method=\"post\" id=\"user_list_form\">\n    <table id=\"user_list\" class=\"table table-striped table-bordered table-condensed tablesorter\">\n        <thead>\n            <tr>\n                <th>&nbsp;</th>\n                <th>編號</th>\n                <th>名字</th>\n                <th>姓氏</th>\n                <th>帳號</th>\n                <th>建立日期</th>\n                <th>最後登入</th>\n                <th>動作</th>\n            </tr>\n        </thead>\n            <tr>\n                <th>&nbsp;</th>\n                <th>&nbsp;</th>\n                <th><input type=\"text\" class=\"form-control\" name=\"first_name\" placeholder=\"search..\" /></th>\n                <th><input type=\"text\" class=\"form-control\" name=\"last_name\" placeholder=\"search..\" /></td>\n                <th><input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"search..\" /></td>\n                <th>&nbsp;</th>\n                <th>&nbsp;</th>\n                <th>&nbsp;</th>\n            </tr>\n\n        <tbody>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n    </table>\n    </form>\n</div>\n</article>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["user_me"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "Hi, ";
  if (stack1 = helpers.first_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.first_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.last_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.last_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " 使用者";
  return buffer;
  });

this["Handlebars"]["templates"]["websync_edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "登入密碼";
  }

function program3(depth0,data) {
  
  
  return "修改密碼";
  }

function program5(depth0,data) {
  
  
  return "不需要修改密碼，請留空白";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <input type=\"hidden\" name=\"id\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        ";
  return buffer;
  }

function program9(depth0,data) {
  
  
  return "add";
  }

function program11(depth0,data) {
  
  
  return "edit";
  }

function program13(depth0,data) {
  
  
  return "建立帳號";
  }

function program15(depth0,data) {
  
  
  return "編輯帳號";
  }

function program17(depth0,data) {
  
  
  return "重新填寫";
  }

function program19(depth0,data) {
  
  
  return "取消編輯";
  }

  buffer += "<article class=\"module width_full\">\n<div style=\"width:97%;margin:0 auto;\">\n    <div class=\"menu\">\n        <a class=\"btn btn-primary\" data-model=\"clipnote_user\" href=\"#!/websync/list\" style=\"color: white;\"><i class=\"icon-edit icon-white\"></i> 檢視 WebSync 帳號列表</a>\n    </div>\n    <form action=\"#\" method=\"post\" class=\"well\" id=\"websync_user_add_form\">\n        <div class=\"control-group\">\n            <label>登入帳號</label>\n            <input type=\"text\" name=\"websync_id\" class=\"span3\" placeholder=\"Please enter WebSync ID\" value=\"";
  if (stack1 = helpers.websync_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.websync_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n            <span class=\"help-inline\"></span>\n        </div>\n        <div class=\"control-group\">\n            <label>";
  options = {hash:{},inverse:self.program(1, program1, data),fn:self.noop,data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n            <input type=\"password\" name=\"password\" class=\"span3\" placeholder=\"Please enter WebSync Password\">\n            <p class=\"help-block\">";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n        </div>\n        <div class=\"control-group\">\n            <label>確認密碼</label>\n            <input type=\"password\" name=\"confirm_password\" class=\"span3\" placeholder=\"Confirm Password\">\n            <span class=\"help-inline\"></span>\n        </div>\n        <p class=\"help-block\">*上面欄位務必填寫.</p>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <button type=\"button\" data-model=\"websync_user\" class=\"btn btn-primary ";
  options = {hash:{},inverse:self.program(9, program9, data),fn:self.noop,data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  options = {hash:{},inverse:self.program(13, program13, data),fn:self.noop,data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n        <button class=\"btn\" type=\"reset\">";
  options = {hash:{},inverse:self.program(17, program17, data),fn:self.noop,data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options = {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    </form>\n</div>\n</article>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["websync_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"previous\">\n            <a href=\"#!/websync/list/1\" style=\"margin-right: 10px;\">&larr; 第一頁</a>\n        </li>\n        <li class=\"previous\">\n            <a href=\"#!/websync/list/";
  if (stack1 = helpers.previous_page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.previous_page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">&larr; 上一頁</a>\n        </li>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"next\">\n            <a href=\"#!/websync/list/";
  if (stack1 = helpers.next_page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.next_page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">下一頁 &rarr;</a>\n        </li>\n        ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n        <tr>\n            <td><input type=\"checkbox\" name=\"id[]\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></td>\n            <td>";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  if (stack1 = helpers.websync_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.websync_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date_time || depth0.date_time),stack1 ? stack1.call(depth0, depth0.created_on, options) : helperMissing.call(depth0, "date_time", depth0.created_on, options)))
    + "</td>\n            <td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date_time || depth0.date_time),stack1 ? stack1.call(depth0, depth0.last_login, options) : helperMissing.call(depth0, "date_time", depth0.last_login, options)))
    + "</td>\n            <td>";
  if (stack2 = helpers.auto_create) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.auto_create; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n            <td>\n                <a class=\"btn btn-primary\" data-model=\"websync_user\" data-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" href=\"#!/websync/edit/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" style=\"color: white;\"><i class=\"icon-edit icon-white\"></i> 編輯</a>&nbsp;\n                <a class=\"btn btn-danger delete\" data-model=\"websync_user\" data-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" style=\"color: white;\"><i class=\"icon-trash icon-white\"></i> 刪除</a>\n            </td>\n        </tr>\n        ";
  return buffer;
  }

  buffer += "<article class=\"module width_full\">\n<div style=\"width:97%;margin:0 auto;\">\n    <div class=\"menu\">\n        <a class=\"btn btn-primary search_websync\" data-form=\"#websync_user_list_form\" data-model=\"websync\" style=\"color: white;\"><i class=\"icon-ok icon-white\"></i> 搜尋列表</a>\n        <a class=\"btn btn-primary check_all\" data-model=\"websync_user\" style=\"color: white;\"><i class=\"icon-ok icon-white\"></i> 全選列表</a>\n        <a class=\"btn btn-primary\" data-model=\"websync_user\" href=\"#!/websync/add\" style=\"color: white;\"><i class=\"icon-edit icon-white\"></i> 新增帳號</a>\n        <a class=\"btn btn-danger delete_all\" data-form=\"#websync_user_list_form\" data-model=\"websync_user\" href=\"#\" style=\"color: white;\"><i class=\"icon-trash icon-white\"></i> 刪除帳號</a>\n    </div>\n    <ul class=\"pager\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.previous_show) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.previous_show; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.previous_show) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.next_show) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.next_show; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.next_show) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n    <form action=\"#\" method=\"post\" id=\"websync_user_list_form\">\n    <table id=\"websync_user_list\" class=\"table table-striped table-bordered table-condensed tablesorter\">\n        <thead>\n            <tr>\n                <th>&nbsp;</th>\n                <th>編號</th>\n                <th>WebSync ID</th>\n                <th>建立日期</th>\n                <th>最後登入</th>\n                <th>自動產生</th>\n                <th>動作</th>\n            </tr>\n            <tr>\n                <td>&nbsp;</td>\n                <td>&nbsp;</td>\n                <td><input type=\"text\" name=\"websync_id\" class=\"span2\" placeholder=\"search id\" /></td>\n                <td>&nbsp;</td>\n                <td>&nbsp;</td>\n                <td>&nbsp;</td>\n                <td>&nbsp;</td>\n            </tr>\n        </thead>\n        <tbody>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n    </table>\n    </form>\n</div>\n</article>\n";
  return buffer;
  });