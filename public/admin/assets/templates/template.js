this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["motel_edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
  buffer += "\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">群組:</label>\r\n                    <div class=\"controls\">\r\n                        ";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  if (stack1 = helpers.all_groups) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.all_groups; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.all_groups) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    </div>\r\n                </div>\r\n                ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n                        <label class=\"checkbox\">\r\n                            <input type=\"checkbox\" name=\"motel_groups[]\" value=\"";
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
    + "\r\n                        </label>\r\n                        ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    <input type=\"hidden\" name=\"id\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                ";
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
  buffer += "\r\n        <div class=\"tab-pane\" id=\"software\">\r\n            <form action=\"#\" method=\"post\" class=\"well\" id=\"app_lists_form\">\r\n                <div class=\"menu menu_left\">\r\n                    <a class=\"btn btn-primary add_apps\" data-form=\"#app_lists_form\" style=\"color: white;\"><i class=\"icon-edit icon-white\"></i> 新增軟體</a>\r\n                </div>\r\n                <p style=\"clear:both;\">&nbsp;</p>\r\n                <div id=\"app_list\">\r\n                </div>\r\n                <p style=\"clear:both;\">&nbsp;</p>\r\n                <input type=\"hidden\" name=\"motel_id\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n            </form>\r\n        </div>\r\n        <div class=\"tab-pane\" id=\"motel_apps\">\r\n            <form action=\"#\" method=\"post\" class=\"well\" id=\"motel_apps_form\">\r\n                <div class=\"menu menu_left\">\r\n                    <a class=\"btn btn-danger delete_apps\" data-form=\"#motel_apps_form\" style=\"color: white;\"><i class=\"icon-edit icon-white\"></i> 刪除軟體</a>\r\n                </div>\r\n                <div id=\"motel_app_list\">\r\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data};
  if (stack1 = helpers.apps) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.apps; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.apps) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </div>\r\n                <p style=\"clear:both;\">&nbsp;</p>\r\n            </form>\r\n        </div>\r\n        ";
  return buffer;
  }
function program27(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <div style=\"float:left; width:150px; height:150px; margin: 0 auto; text-align: center\">\r\n                    <img src=\"";
  if (stack1 = helpers.app_cover) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_cover; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"100\" /><br />\r\n                    ";
  if (stack1 = helpers.app_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<br />\r\n                    <input type=\"checkbox\" name=\"id[]\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\r\n                </div>\r\n                ";
  return buffer;
  }

  buffer += "<article class=\"module width_full\">\r\n<div style=\"width:97%;margin:0 auto;\">\r\n    <div class=\"menu\">\r\n        <a class=\"btn btn-primary\" data-model=\"motel\" href=\"#!/motel/list\" style=\"color: white;\"><i class=\"icon-list icon-white\"></i> 檢視帳號列表</a>\r\n    </div>\r\n    <ul id=\"mytab\" class=\"nav nav-tabs\">\r\n        <li class=\"active\"><a href=\"#profile\" data-toggle=\"tab\">個人資料</a></li>\r\n    </ul>\r\n    <div class=\"tab-content\">\r\n        <div class=\"tab-pane active\" id=\"profile\">\r\n            <form action=\"#\" method=\"post\" class=\"well\" id=\"motel_add_form\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">登入帳號</label>\r\n                    <input type=\"text\" name=\"motelname\" class=\"form-control\" placeholder=\"Please enter motel email\" value=\"";
  if (stack1 = helpers.motelname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.motelname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                    <span class=\"help-block\">僅支援英文+數字帳號</span>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">";
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
  buffer += "</label>\r\n                    <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Please enter password\">\r\n                    <p class=\"help-block\">";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">確認密碼</label>\r\n                    <input type=\"password\" name=\"confirm_password\" class=\"form-control\" placeholder=\"Confirm Password\">\r\n                    <span class=\"help-block\"></span>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">名字(First name)</label>\r\n                    <input type=\"text\" name=\"first_name\" class=\"form-control\" placeholder=\"Please enter motel first name\" value=\"";
  if (stack1 = helpers.first_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.first_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                    <span class=\"help-block\"></span>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">姓氏(Last name)</label>\r\n                    <input type=\"text\" name=\"last_name\" class=\"form-control\" placeholder=\"Please enter motel last name\" value=\"";
  if (stack1 = helpers.last_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.last_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                    <span class=\"help-block\"></span>\r\n                </div>\r\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <p class=\"help-block\">*上面欄位務必填寫.</p>\r\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <button type=\"button\" ";
  options = {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-model=\"motel\" class=\"btn btn-primary ";
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
  buffer += "</button>\r\n                <button class=\"btn\" type=\"reset\">";
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
  buffer += "</button>\r\n            </form>\r\n        </div>\r\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </div>\r\n</div>\r\n</article>\r\n<script>\r\n(function($){\r\n    $('#myTab').tab('show');\r\n    $('a[data-toggle=\"tab\"]').on('shown', function (e) {\r\n        console.log(e);\r\n        console.log(e.target.hash); // activated tab\r\n        console.log(e.relatedTarget.hash); // previous tab\r\n    });\r\n}(jQuery));\r\n</script>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["motel_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <li class=\"previous\">\r\n            <a href=\"#!/motel/list/1\" style=\"margin-right: 10px;\">&larr; 第一頁</a>\r\n        </li>\r\n        <li class=\"previous\">\r\n            <a href=\"#!/motel/list/";
  if (stack1 = helpers.previous_page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.previous_page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">&larr; 上一頁</a>\r\n        </li>\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <li class=\"next\">\r\n            <a href=\"#!/motel/list/";
  if (stack1 = helpers.next_page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.next_page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">下一頁 &rarr;</a>\r\n        </li>\r\n        ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n        <tr>\r\n            <td><input type=\"checkbox\" name=\"id[]\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td>";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n            <td>";
  if (stack1 = helpers.first_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.first_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n            <td>";
  if (stack1 = helpers.last_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.last_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n            <td>";
  if (stack1 = helpers.motelname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.motelname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n            <td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date_time || depth0.date_time),stack1 ? stack1.call(depth0, depth0.created_on, options) : helperMissing.call(depth0, "date_time", depth0.created_on, options)))
    + "</td>\r\n            <td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date_time || depth0.date_time),stack1 ? stack1.call(depth0, depth0.last_login, options) : helperMissing.call(depth0, "date_time", depth0.last_login, options)))
    + "</td>\r\n            <td>\r\n                <a class=\"btn btn-primary\" data-model=\"motel\" data-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" href=\"#!/motel/edit/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" style=\"color: white;\"><i class=\"icon-edit\"></i> 編輯</a>&nbsp;\r\n                <a class=\"btn btn-danger delete\" data-model=\"motel\" data-motelname=\"";
  if (stack2 = helpers.motelname) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.motelname; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" data-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" href=\"#\" style=\"color: white;\"><i class=\"icon-trash\"></i> 刪除</a>\r\n            </td>\r\n        </tr>\r\n        ";
  return buffer;
  }

  buffer += "<article class=\"module width_full\">\r\n<div style=\"width:97%;margin:0 auto;\">\r\n\r\n    <div class=\"menu\">\r\n        <a class=\"btn btn-primary search_motel\" data-form=\"#motel_list_form\" data-model=\"motel\" style=\"color: white;\"><i class=\"icon-search\"></i> 搜尋列表</a>\r\n        <a class=\"btn btn-primary check_all\" data-model=\"motel\" style=\"color: white;\"><i class=\"icon-ok\"></i> 全選列表</a>\r\n        <a class=\"btn btn-primary\" data-model=\"motel\" href=\"#!/motel/add\" style=\"color: white;\"><i class=\"icon-edit\"></i> 新增帳號</a>\r\n        <a class=\"btn btn-danger delete_all\" data-form=\"#motel_list_form\" data-model=\"motel\" style=\"color: white;\"><i class=\"icon-trash\"></i> 刪除帳號</a>\r\n    </div>\r\n    <ul class=\"pager\">\r\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.previous_show) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.previous_show; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.previous_show) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.next_show) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.next_show; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.next_show) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </ul>\r\n    <form action=\"#\" method=\"post\" id=\"motel_list_form\">\r\n    <div class=\"table-responsive\">\r\n    <table id=\"motel_list\" class=\"table table-striped table-bordered table-condensed tablesorter\">\r\n        <thead>\r\n            <tr>\r\n                <th>&nbsp;</th>\r\n                <th>編號</th>\r\n                <th>名字</th>\r\n                <th>姓氏</th>\r\n                <th>帳號</th>\r\n                <th>建立日期</th>\r\n                <th>最後登入</th>\r\n                <th>動作</th>\r\n            </tr>\r\n        </thead>\r\n            <tr>\r\n                <th>&nbsp;</th>\r\n                <th>&nbsp;</th>\r\n                <th><input type=\"text\" class=\"form-control\" style=\"width:80px;\" name=\"first_name\" placeholder=\"search..\" /></th>\r\n                <th><input type=\"text\" class=\"form-control\" style=\"width:80px;\"name=\"last_name\" placeholder=\"search..\" /></td>\r\n                <th><input type=\"text\" class=\"form-control\" style=\"width:120px;\" name=\"motelname\" placeholder=\"search..\" /></td>\r\n                <th>&nbsp;</th>\r\n                <th>&nbsp;</th>\r\n                <th>&nbsp;</th>\r\n            </tr>\r\n\r\n        <tbody>\r\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </tbody>\r\n    </table>\r\n    </div>\r\n    </form>\r\n</div>\r\n</article>\r\n";
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
  buffer += "\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">群組:</label>\r\n                    <div class=\"controls\">\r\n                        ";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  if (stack1 = helpers.all_groups) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.all_groups; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.all_groups) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    </div>\r\n                </div>\r\n                ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n                        <label class=\"checkbox\">\r\n                            <input type=\"checkbox\" name=\"user_groups[]\" value=\"";
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
    + "\r\n                        </label>\r\n                        ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    <input type=\"hidden\" name=\"id\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                ";
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
  buffer += "\r\n        <div class=\"tab-pane\" id=\"software\">\r\n            <form action=\"#\" method=\"post\" class=\"well\" id=\"app_lists_form\">\r\n                <div class=\"menu menu_left\">\r\n                    <a class=\"btn btn-primary add_apps\" data-form=\"#app_lists_form\" style=\"color: white;\"><i class=\"icon-edit icon-white\"></i> 新增軟體</a>\r\n                </div>\r\n                <p style=\"clear:both;\">&nbsp;</p>\r\n                <div id=\"app_list\">\r\n                </div>\r\n                <p style=\"clear:both;\">&nbsp;</p>\r\n                <input type=\"hidden\" name=\"user_id\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n            </form>\r\n        </div>\r\n        <div class=\"tab-pane\" id=\"user_apps\">\r\n            <form action=\"#\" method=\"post\" class=\"well\" id=\"user_apps_form\">\r\n                <div class=\"menu menu_left\">\r\n                    <a class=\"btn btn-danger delete_apps\" data-form=\"#user_apps_form\" style=\"color: white;\"><i class=\"icon-edit icon-white\"></i> 刪除軟體</a>\r\n                </div>\r\n                <div id=\"user_app_list\">\r\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data};
  if (stack1 = helpers.apps) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.apps; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.apps) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </div>\r\n                <p style=\"clear:both;\">&nbsp;</p>\r\n            </form>\r\n        </div>\r\n        ";
  return buffer;
  }
function program27(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <div style=\"float:left; width:150px; height:150px; margin: 0 auto; text-align: center\">\r\n                    <img src=\"";
  if (stack1 = helpers.app_cover) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_cover; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"100\" /><br />\r\n                    ";
  if (stack1 = helpers.app_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<br />\r\n                    <input type=\"checkbox\" name=\"id[]\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\r\n                </div>\r\n                ";
  return buffer;
  }

  buffer += "<article class=\"module width_full\">\r\n<div style=\"width:97%;margin:0 auto;\">\r\n    <div class=\"menu\">\r\n        <a class=\"btn btn-primary\" data-model=\"user\" href=\"#!/user/list\" style=\"color: white;\"><i class=\"icon-list icon-white\"></i> 檢視帳號列表</a>\r\n    </div>\r\n    <ul id=\"mytab\" class=\"nav nav-tabs\">\r\n        <li class=\"active\"><a href=\"#profile\" data-toggle=\"tab\">個人資料</a></li>\r\n    </ul>\r\n    <div class=\"tab-content\">\r\n        <div class=\"tab-pane active\" id=\"profile\">\r\n            <form action=\"#\" method=\"post\" class=\"well\" id=\"user_add_form\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">登入帳號</label>\r\n                    <input type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"Please enter user email\" value=\"";
  if (stack1 = helpers.username) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.username; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                    <span class=\"help-block\">僅支援英文+數字帳號</span>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">";
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
  buffer += "</label>\r\n                    <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Please enter password\">\r\n                    <p class=\"help-block\">";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">確認密碼</label>\r\n                    <input type=\"password\" name=\"confirm_password\" class=\"form-control\" placeholder=\"Confirm Password\">\r\n                    <span class=\"help-block\"></span>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">名字(First name)</label>\r\n                    <input type=\"text\" name=\"first_name\" class=\"form-control\" placeholder=\"Please enter user first name\" value=\"";
  if (stack1 = helpers.first_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.first_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                    <span class=\"help-block\"></span>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">姓氏(Last name)</label>\r\n                    <input type=\"text\" name=\"last_name\" class=\"form-control\" placeholder=\"Please enter user last name\" value=\"";
  if (stack1 = helpers.last_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.last_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                    <span class=\"help-block\"></span>\r\n                </div>\r\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <p class=\"help-block\">*上面欄位務必填寫.</p>\r\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <button type=\"button\" ";
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
  buffer += "</button>\r\n                <button class=\"btn\" type=\"reset\">";
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
  buffer += "</button>\r\n            </form>\r\n        </div>\r\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </div>\r\n</div>\r\n</article>\r\n<script>\r\n(function($){\r\n    $('#myTab').tab('show');\r\n    $('a[data-toggle=\"tab\"]').on('shown', function (e) {\r\n        console.log(e);\r\n        console.log(e.target.hash); // activated tab\r\n        console.log(e.relatedTarget.hash); // previous tab\r\n    });\r\n}(jQuery));\r\n</script>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["user_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <li class=\"previous\">\r\n            <a href=\"#!/user/list/1\" style=\"margin-right: 10px;\">&larr; 第一頁</a>\r\n        </li>\r\n        <li class=\"previous\">\r\n            <a href=\"#!/user/list/";
  if (stack1 = helpers.previous_page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.previous_page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">&larr; 上一頁</a>\r\n        </li>\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <li class=\"next\">\r\n            <a href=\"#!/user/list/";
  if (stack1 = helpers.next_page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.next_page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">下一頁 &rarr;</a>\r\n        </li>\r\n        ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n        <tr>\r\n            <td><input type=\"checkbox\" name=\"id[]\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td>";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n            <td>";
  if (stack1 = helpers.first_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.first_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n            <td>";
  if (stack1 = helpers.last_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.last_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n            <td>";
  if (stack1 = helpers.username) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.username; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n            <td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date_time || depth0.date_time),stack1 ? stack1.call(depth0, depth0.created_on, options) : helperMissing.call(depth0, "date_time", depth0.created_on, options)))
    + "</td>\r\n            <td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date_time || depth0.date_time),stack1 ? stack1.call(depth0, depth0.last_login, options) : helperMissing.call(depth0, "date_time", depth0.last_login, options)))
    + "</td>\r\n            <td>\r\n                <a class=\"btn btn-primary\" data-model=\"user\" data-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" href=\"#!/user/edit/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" style=\"color: white;\"><i class=\"icon-edit\"></i> 編輯</a>&nbsp;\r\n                <a class=\"btn btn-danger delete\" data-model=\"user\" data-username=\"";
  if (stack2 = helpers.username) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.username; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" data-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" href=\"#\" style=\"color: white;\"><i class=\"icon-trash\"></i> 刪除</a>\r\n            </td>\r\n        </tr>\r\n        ";
  return buffer;
  }

  buffer += "<article class=\"module width_full\">\r\n<div style=\"width:97%;margin:0 auto;\">\r\n\r\n    <div class=\"menu\">\r\n        <a class=\"btn btn-primary search_user\" data-form=\"#user_list_form\" data-model=\"user\" style=\"color: white;\"><i class=\"icon-search\"></i> 搜尋列表</a>\r\n        <a class=\"btn btn-primary check_all\" data-model=\"user\" style=\"color: white;\"><i class=\"icon-ok\"></i> 全選列表</a>\r\n        <a class=\"btn btn-primary\" data-model=\"user\" href=\"#!/user/add\" style=\"color: white;\"><i class=\"icon-edit\"></i> 新增帳號</a>\r\n        <a class=\"btn btn-danger delete_all\" data-form=\"#user_list_form\" data-model=\"user\" style=\"color: white;\"><i class=\"icon-trash\"></i> 刪除帳號</a>\r\n    </div>\r\n    <ul class=\"pager\">\r\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.previous_show) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.previous_show; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.previous_show) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.next_show) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.next_show; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.next_show) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </ul>\r\n    <form action=\"#\" method=\"post\" id=\"user_list_form\">\r\n    <div class=\"table-responsive\">\r\n    <table id=\"user_list\" class=\"table table-striped table-bordered table-condensed tablesorter\">\r\n        <thead>\r\n            <tr>\r\n                <th>&nbsp;</th>\r\n                <th>編號</th>\r\n                <th>名字</th>\r\n                <th>姓氏</th>\r\n                <th>帳號</th>\r\n                <th>建立日期</th>\r\n                <th>最後登入</th>\r\n                <th>動作</th>\r\n            </tr>\r\n        </thead>\r\n            <tr>\r\n                <th>&nbsp;</th>\r\n                <th>&nbsp;</th>\r\n                <th><input type=\"text\" class=\"form-control\" style=\"width:80px;\" name=\"first_name\" placeholder=\"search..\" /></th>\r\n                <th><input type=\"text\" class=\"form-control\" style=\"width:80px;\"name=\"last_name\" placeholder=\"search..\" /></td>\r\n                <th><input type=\"text\" class=\"form-control\" style=\"width:120px;\" name=\"username\" placeholder=\"search..\" /></td>\r\n                <th>&nbsp;</th>\r\n                <th>&nbsp;</th>\r\n                <th>&nbsp;</th>\r\n            </tr>\r\n\r\n        <tbody>\r\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </tbody>\r\n    </table>\r\n    </div>\r\n    </form>\r\n</div>\r\n</article>\r\n";
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