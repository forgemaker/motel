this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["motel_edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <a class=\"btn btn-primary\" data-model=\"motel\" href=\"#!/new/list/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"color: white;\"><i class=\"icon-list\"></i> 發佈優惠</a>\n        <a class=\"btn btn-primary\" data-model=\"motel\" href=\"#!/rank/list/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"color: white;\"><i class=\"icon-list\"></i> 查看評價</a>\n        <a class=\"btn btn-primary\" data-model=\"motel\" href=\"#!/order/list/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"color: white;\"><i class=\"icon-list\"></i> 訂單管理</a>\n        <a class=\"btn btn-primary\" data-model=\"motel\" href=\"#!/room/list/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"color: white;\"><i class=\"icon-list\"></i> 房型管理</a>\n        <a class=\"btn btn-primary\" data-model=\"motel\" href=\"#!/room/add/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"color: white;\"><i class=\"icon-list\"></i> 建立房型</a>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "add";
  }

function program7(depth0,data) {
  
  
  return "edit";
  }

function program9(depth0,data) {
  
  
  return "建立摩鐵";
  }

function program11(depth0,data) {
  
  
  return "編輯摩鐵";
  }

function program13(depth0,data) {
  
  
  return "\n        <a class=\"btn btn-primary\" data-model=\"motel\" href=\"#!/motel/list\" style=\"color: white;\"><i class=\"icon-list\"></i> 檢視摩鐵列表</a>\n        ";
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n            <div class=\"alert alert-info\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n                上次修改日期為 ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date_time || depth0.date_time),stack1 ? stack1.call(depth0, depth0.edit_time, options) : helperMissing.call(depth0, "date_time", depth0.edit_time, options)))
    + "\n            </div>\n            ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class=\"form-group\">\n                    <label class=\"control-label\">經度</label>\n                    <input type=\"text\" name=\"longitude\" class=\"form-control\" placeholder=\"請輸入摩鐵經度\" value=\"";
  if (stack1 = helpers.longitude) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.longitude; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">緯度</label>\n                    <input type=\"text\" name=\"latitude\" class=\"form-control\" placeholder=\"請輸入摩鐵緯度\" value=\"";
  if (stack1 = helpers.latitude) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.latitude; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">單筆佣金</label>\n                    <input type=\"text\" name=\"commission\" class=\"form-control\" placeholder=\"請輸入摩鐵單筆佣金\" value=\"";
  if (stack1 = helpers.commission) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.commission; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">合約日期</label>\n                    <div class=\"row\">\n                        <div class=\"col-lg-2\"><input type=\"text\" id=\"contract_start\" name=\"contract_start\" class=\"form-control\" placeholder=\"請輸入合約起始日期\" value=\"";
  if (stack1 = helpers.contract_start) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.contract_start; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></div>\n                        <div class=\"col-lg-2\"><input type=\"text\" id=\"contract_end\" name=\"contract_end\" class=\"form-control\" placeholder=\"請輸入合約結束日期\" value=\"";
  if (stack1 = helpers.contract_end) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.contract_end; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></div>\n                    </div>\n                </div>\n                ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <input type=\"hidden\" name=\"id\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                ";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <img src=\"";
  if (stack1 = helpers.image_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-rounded\" style=\"width: 400px; height: 200px;\">\n                    ";
  return buffer;
  }

function program23(depth0,data) {
  
  
  return "\n                        <option value=\"2H\">2H</option>\n                        <option value=\"2.5H\">2.5H</option>\n                        <option value=\"3H\">3H</option>\n                        ";
  }

  buffer += "<article class=\"module width_full\">\n<div style=\"width:97%;margin:0 auto;\">\n    <div class=\"menu\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <a type=\"button\" data-form=\"#motel_add_form\" ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-model=\"motel\" class=\"btn btn-primary ";
  options = {hash:{},inverse:self.program(5, program5, data),fn:self.noop,data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><i class=\"icon-edit\"></i> ";
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
  buffer += "</a>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data};
  if (stack1 = helpers.isAdmin) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isAdmin; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isAdmin) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <ul id=\"mytab\" class=\"nav nav-tabs\">\n        <li class=\"active\"><a href=\"#profile\" data-toggle=\"tab\">基本資料</a></li>\n        <li><a href=\"#introduction\" data-toggle=\"tab\">簡介設定</a></li>\n        <li><a href=\"#time\" data-toggle=\"tab\">時間設定</a></li>\n    </ul>\n    <form action=\"#\" method=\"post\" class=\"well\" id=\"motel_add_form\">\n        <div class=\"tab-content\">\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <div class=\"tab-pane active\" id=\"profile\">\n                <div class=\"form-group\">\n                    <label class=\"control-label\">名稱</label>\n                    <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"請輸入摩鐵名稱\" value=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">官方網址</label>\n                    <input type=\"text\" name=\"url\" class=\"form-control\" placeholder=\"請輸入摩鐵官方網址\" value=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">縣市</label>\n                    <div id=\"twzipcode\" class=\"row\">\n                        <div class=\"col-lg-2\" data-role=\"county\" data-style=\"form-control\"></div>\n                        <div class=\"col-lg-2\" data-role=\"district\" data-style=\"form-control\"></div>\n                        <div class=\"col-lg-2\" data-role=\"zipcode\" data-style=\"form-control\"></div>\n                    </div>\n                    <div style=\"clear:both\"></div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">地址</label>\n                    <input type=\"text\" name=\"address\" class=\"form-control\" placeholder=\"請輸入摩鐵地址\" value=\"";
  if (stack1 = helpers.address) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.address; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">室內電話1</label>\n                    <input type=\"text\" name=\"phone_1\" class=\"form-control\" placeholder=\"請輸入摩鐵室內電話1\" value=\"";
  if (stack1 = helpers.phone_1) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.phone_1; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">室內電話2</label>\n                    <input type=\"text\" name=\"phone_2\" class=\"form-control\" placeholder=\"請輸入摩鐵室內電話2\" value=\"";
  if (stack1 = helpers.phone_2) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.phone_2; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">傳真</label>\n                    <input type=\"text\" name=\"fax\" class=\"form-control\" placeholder=\"請輸入摩鐵傳真號碼\" value=\"";
  if (stack1 = helpers.fax) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fax; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">聯絡人員</label>\n                    <input type=\"text\" name=\"contact\" class=\"form-control\" placeholder=\"請輸入摩鐵聯絡人員\" value=\"";
  if (stack1 = helpers.contact) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.contact; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">行動電話1</label>\n                    <input type=\"text\" name=\"mobile_1\" class=\"form-control\" placeholder=\"請輸入摩鐵行動電話1\" value=\"";
  if (stack1 = helpers.mobile_1) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mobile_1; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">行動電話2</label>\n                    <input type=\"text\" name=\"mobile_2\" class=\"form-control\" placeholder=\"請輸入摩鐵行動電話2\" value=\"";
  if (stack1 = helpers.mobile_2) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mobile_2; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                </div>\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data};
  if (stack1 = helpers.isAdmin) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isAdmin; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isAdmin) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"tab-pane\" id=\"introduction\">\n                <div class=\"form-group\">\n                    <label class=\"control-label\">簡介設定</label>\n                    <input type=\"text\" name=\"introduction\" class=\"form-control\" placeholder=\"請輸入摩鐵簡介\" value=\"";
  if (stack1 = helpers.introduction) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.introduction; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <span class=\"help-block\">140字文字說明</span>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">設備</label>\n                    <input type=\"text\" name=\"equipment\" class=\"form-control\" placeholder=\"請輸入摩鐵設備\" value=\"";
  if (stack1 = helpers.equipment) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.equipment; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <p class=\"help-block\">60字文字說明</p>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">特色</label>\n                    <input type=\"text\" name=\"feature\" class=\"form-control\" placeholder=\"請輸入摩鐵特色\" value=\"";
  if (stack1 = helpers.feature) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.feature; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <span class=\"help-block\">60字文字說明</span>\n                </div>\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <div class=\"form-group\">\n                    <label class=\"control-label\">上傳圖片</label>\n                    <div data-placement=\"top\" data-original-title=\"Change collection cover\" data-toggle=\"tooltip\">\n                        <a class=\"btn btn-success fileinput-button\">\n                            <i class=\"icon-cloud-upload\"></i>\n                            <span>上傳摩鐵封面</span>\n                            <!-- The file input field used as target for the file upload widget -->\n                            <input id=\"fileupload\" type=\"file\" name=\"upload_file\">\n                        </a>\n                        <input type=\"hidden\" id=\"image_url\" name=\"image_url\" value=\"";
  if (stack1 = helpers.image_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                        <input type=\"hidden\" id=\"raw_name\" name=\"raw_name\" value=\"";
  if (stack1 = helpers.raw_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.raw_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                    </div>\n                </div>\n                <div id=\"upload_area\" class=\"row\">\n                    ";
  options = {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data};
  if (stack1 = helpers.is_image) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_image) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </div>\n                <div id=\"progress\" class=\"progress hide\" style=\"margin-top:10px;\">\n                    <div style=\"width: 0%;\" class=\"progress-bar progress-bar-success\"></div>\n                </div>\n            </div>\n            <div class=\"tab-pane\" id=\"time\">\n                <div class=\"form-group\">\n                    <label class=\"control-label\">平日休息時間</label>\n                    <select class=\"form-control\" name=\"rest_time_1\">\n                        ";
  options = {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data};
  stack2 = ((stack1 = helpers.select || depth0.select),stack1 ? stack1.call(depth0, depth0.rest_time_1, options) : helperMissing.call(depth0, "select", depth0.rest_time_1, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                    </select>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">假日休息時間</label>\n                    <select class=\"form-control\" name=\"rest_time_2\">\n                        ";
  options = {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data};
  stack2 = ((stack1 = helpers.select || depth0.select),stack1 ? stack1.call(depth0, depth0.rest_time_2, options) : helperMissing.call(depth0, "select", depth0.rest_time_2, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                    </select>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">平日住宿進房時間</label>\n                    <input type=\"text\" name=\"stay_time_1\" id=\"stay_time_1\" class=\"form-control\" placeholder=\"請輸入摩鐵平日住宿進房時間\" value=\"";
  if (stack2 = helpers.stay_time_1) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.stay_time_1; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">假日住宿進房時間</label>\n                    <input type=\"text\" name=\"stay_time_2\" id=\"stay_time_2\" class=\"form-control\" placeholder=\"請輸入摩鐵假日住宿進房時間\" value=\"";
  if (stack2 = helpers.stay_time_2) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.stay_time_2; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n</article>\n<script>\n(function($){\n    $('#myTab').tab('show');\n    $('a[data-toggle=\"tab\"]').on('shown', function (e) {\n        console.log(e);\n        console.log(e.target.hash); // activated tab\n        console.log(e.relatedTarget.hash); // previous tab\n    });\n}(jQuery));\n</script>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["motel_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"previous\">\n            <a href=\"#!/motel/list/1\" style=\"margin-right: 10px;\">&larr; 第一頁</a>\n        </li>\n        <li class=\"previous\">\n            <a href=\"#!/motel/list/";
  if (stack1 = helpers.previous_page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.previous_page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">&larr; 上一頁</a>\n        </li>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"next\">\n            <a href=\"#!/motel/list/";
  if (stack1 = helpers.next_page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.next_page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">下一頁 &rarr;</a>\n        </li>\n        ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n                <tr>\n                    <td><input type=\"checkbox\" name=\"id[]\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></td>\n                    <td>";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    <td>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    <td>";
  if (stack1 = helpers.county) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.county; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.district) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.district; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    <td>";
  if (stack1 = helpers.contact) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.contact; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    <td>";
  if (stack1 = helpers.phone_1) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.phone_1; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    <td>";
  if (stack1 = helpers.mobile_1) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mobile_1; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    <td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date_time || depth0.date_time),stack1 ? stack1.call(depth0, depth0.add_time, options) : helperMissing.call(depth0, "date_time", depth0.add_time, options)))
    + "</td>\n                    <td>\n                        <a class=\"btn btn-primary\" data-model=\"motel\" data-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" href=\"#!/room/list/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" style=\"color: white;\"><i class=\"icon-bell\"></i> 房型</a>&nbsp;\n                        <a class=\"btn btn-primary\" data-model=\"motel\" data-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" href=\"#!/motel/edit/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" style=\"color: white;\"><i class=\"icon-edit\"></i> 編輯</a>&nbsp;\n                        <a class=\"btn btn-danger delete\" data-model=\"motel\" data-title=\"";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" data-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" href=\"#\" style=\"color: white;\"><i class=\"icon-trash\"></i> 刪除</a>\n                    </td>\n                </tr>\n                ";
  return buffer;
  }

  buffer += "<article class=\"module width_full\">\n<div style=\"width:98%;margin:0 auto;\">\n    <div class=\"menu\">\n        <a class=\"btn btn-primary check_all\" data-model=\"motel\" style=\"color: white;\"><i class=\"icon-ok\"></i> 全選列表</a>\n        <a class=\"btn btn-primary\" data-model=\"motel\" href=\"#!/motel/add\" style=\"color: white;\"><i class=\"icon-edit\"></i> 新增摩鐵</a>\n        <a class=\"btn btn-danger delete_all\" data-form=\"#motel_list_form\" data-model=\"motel\" style=\"color: white;\"><i class=\"icon-trash\"></i> 刪除摩鐵</a>\n    </div>\n    <ul class=\"pager\">\n        ";
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
  buffer += "\n    </ul>\n    <form action=\"#\" method=\"post\" id=\"motel_list_form\">\n        <div class=\"table-responsive\">\n            <table id=\"motel_list\" class=\"table table-striped table-bordered table-condensed tablesorter\">\n                <thead>\n                    <tr>\n                        <th>&nbsp;</th>\n                        <th>編號</th>\n                        <th>名稱</th>\n                        <th>縣市</th>\n                        <th>聯絡人員</th>\n                        <th>室內電話</th>\n                        <th>行動電話</th>\n                        <th>建立日期</th>\n                        <th>動作</th>\n                    </tr>\n                </thead>\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </tbody>\n            </table>\n        </div>\n    </form>\n</div>\n</article>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["new_edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"alert alert-info\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n                    最後修改日期為 ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date_time || depth0.date_time),stack1 ? stack1.call(depth0, depth0.edit_time, options) : helperMissing.call(depth0, "date_time", depth0.edit_time, options)))
    + "\n                </div>\n                ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <img src=\"";
  if (stack1 = helpers.image_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-rounded\" style=\"width: 400px; height: 200px;\">\n                    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <input type=\"hidden\" name=\"id\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program9(depth0,data) {
  
  
  return "add";
  }

function program11(depth0,data) {
  
  
  return "edit";
  }

function program13(depth0,data) {
  
  
  return "建立優惠";
  }

function program15(depth0,data) {
  
  
  return "編輯優惠";
  }

function program17(depth0,data) {
  
  
  return "重新填寫";
  }

function program19(depth0,data) {
  
  
  return "取消編輯";
  }

  buffer += "<article class=\"module width_full\">\n<div style=\"width:97%;margin:0 auto;\">\n    <div class=\"menu\">\n        <a class=\"btn btn-primary\" data-model=\"new\" href=\"#!/new/list/";
  if (stack1 = helpers.motel_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.motel_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"color: white;\"><i class=\"icon-list\"></i> 檢視優惠列表</a>\n    </div>\n    <ul id=\"mytab\" class=\"nav nav-tabs\">\n        <li class=\"active\"><a href=\"#profile\" data-toggle=\"tab\">優惠資料</a></li>\n    </ul>\n    <div class=\"tab-content\">\n        <div class=\"tab-pane active\" id=\"profile\">\n            <form action=\"#\" method=\"post\" class=\"well\" id=\"new_add_form\">\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <div class=\"form-group\">\n                    <label class=\"control-label\">優惠標題</label>\n                    <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"請輸入優惠名稱\" value=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <span class=\"help-block\"></span>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">起始時間</label>\n                    <input type=\"text\" id=\"start_time\" name=\"start_time\" class=\"form-control\" placeholder=\"起始時間\" value=\"";
  if (stack1 = helpers.start_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <span class=\"help-block\"></span>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">結束日期</label>\n                    <input type=\"text\" id=\"end_time\" name=\"end_time\" class=\"form-control\" placeholder=\"結束日期\" value=\"";
  if (stack1 = helpers.end_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <span class=\"help-block\"></span>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">描述</label>\n                    <textarea class=\"form-control\" rows=\"5\" name=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n                    <span class=\"help-block\"></span>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">上傳優惠圖片</label>\n                    <div data-placement=\"top\" data-original-title=\"Change collection cover\" data-toggle=\"tooltip\">\n                        <a class=\"btn btn-success fileinput-button\">\n                            <i class=\"icon-cloud-upload\"></i>\n                            <span>上傳優惠封面</span>\n                            <!-- The file input field used as target for the file upload widget -->\n                            <input id=\"fileupload\" type=\"file\" name=\"upload_file\">\n                        </a>\n                        <input type=\"hidden\" id=\"image_url\" name=\"image_url\" value=\"";
  if (stack1 = helpers.image_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                        <input type=\"hidden\" id=\"raw_name\" name=\"raw_name\" value=\"";
  if (stack1 = helpers.raw_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.raw_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                    </div>\n                </div>\n                <div id=\"upload_area\" class=\"row\">\n                    ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.is_image) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_image) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </div>\n                <div id=\"progress\" class=\"progress hide\" style=\"margin-top:10px;\">\n                    <div style=\"width: 0%;\" class=\"progress-bar progress-bar-success\"></div>\n                </div>\n                <p class=\"help-block\">*上面欄位務必填寫.</p>\n                <input type=\"hidden\" name=\"motel_id\" value=\"";
  if (stack1 = helpers.motel_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.motel_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <button type=\"button\" data-form=\"#new_add_form\" ";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-model=\"new\" class=\"btn btn-primary ";
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
  buffer += "</button>\n                <button class=\"btn\" type=\"reset\">";
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
  buffer += "</button>\n            </form>\n        </div>\n    </div>\n</div>\n</article>\n<script>\n(function($){\n    $('#myTab').tab('show');\n    $('a[data-toggle=\"tab\"]').on('shown', function (e) {\n        console.log(e);\n        console.log(e.target.hash); // activated tab\n        console.log(e.relatedTarget.hash); // previous tab\n    });\n}(jQuery));\n</script>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["new_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"previous\">\n            <a href=\"#!/new/list/1\" style=\"margin-right: 10px;\">&larr; 第一頁</a>\n        </li>\n        <li class=\"previous\">\n            <a href=\"#!/new/list/";
  if (stack1 = helpers.previous_page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.previous_page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">&larr; 上一頁</a>\n        </li>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"next\">\n            <a href=\"#!/new/list/";
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
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  if (stack1 = helpers.start_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  if (stack1 = helpers.end_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date_time || depth0.date_time),stack1 ? stack1.call(depth0, depth0.add_time, options) : helperMissing.call(depth0, "date_time", depth0.add_time, options)))
    + "</td>\n            <td>\n                <a class=\"btn btn-primary\" data-model=\"new\" data-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" href=\"#!/new/edit/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" style=\"color: white;\"><i class=\"icon-edit\"></i> 編輯</a>&nbsp;\n                <a class=\"btn btn-danger delete\" data-model=\"new\" data-title=\"";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" data-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" href=\"#\" style=\"color: white;\"><i class=\"icon-trash\"></i> 刪除</a>\n            </td>\n        </tr>\n        ";
  return buffer;
  }

  buffer += "<article class=\"module width_full\">\n<div style=\"width:98%;margin:0 auto;\">\n    <div class=\"menu\">\n        <a class=\"btn btn-primary check_all\" data-model=\"new\" style=\"color: white;\"><i class=\"icon-ok\"></i> 全選列表</a>\n        <a class=\"btn btn-primary\" data-model=\"new\" href=\"#!/new/add/";
  if (stack1 = helpers.motel_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.motel_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"color: white;\"><i class=\"icon-edit\"></i> 新增優惠</a>\n        <a class=\"btn btn-danger delete_all\" data-form=\"#new_list_form\" data-model=\"new\" style=\"color: white;\"><i class=\"icon-trash\"></i> 刪除優惠</a>\n    </div>\n    <ul class=\"pager\">\n        ";
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
  buffer += "\n    </ul>\n    <form action=\"#\" method=\"post\" id=\"new_list_form\">\n    <div class=\"table-responsive\">\n    <table id=\"new_list\" class=\"table table-striped table-bordered table-condensed tablesorter\">\n        <thead>\n            <tr>\n                <th>&nbsp;</th>\n                <th>編號</th>\n                <th>優惠標題</th>\n                <th>起始時間</th>\n                <th>結束日期</th>\n                <th>建立日期</th>\n                <th>動作</th>\n            </tr>\n        </thead>\n        <tbody>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n    </table>\n    </div>\n    </form>\n</div>\n</article>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["rank_edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"alert alert-info\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n                    最後修改日期為 ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date_time || depth0.date_time),stack1 ? stack1.call(depth0, depth0.edit_time, options) : helperMissing.call(depth0, "date_time", depth0.edit_time, options)))
    + "\n                </div>\n                ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "checked";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <input type=\"hidden\" name=\"id\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program9(depth0,data) {
  
  
  return "add";
  }

function program11(depth0,data) {
  
  
  return "edit";
  }

function program13(depth0,data) {
  
  
  return "建立評分";
  }

function program15(depth0,data) {
  
  
  return "編輯評分";
  }

function program17(depth0,data) {
  
  
  return "重新填寫";
  }

function program19(depth0,data) {
  
  
  return "取消編輯";
  }

  buffer += "<article class=\"module width_full\">\n<div style=\"width:97%;margin:0 auto;\">\n    <div class=\"menu\">\n        <a class=\"btn btn-primary\" data-model=\"rank\" href=\"#!/rank/list/";
  if (stack1 = helpers.motel_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.motel_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"color: white;\"><i class=\"icon-list\"></i> 檢視評分列表</a>\n    </div>\n    <ul id=\"mytab\" class=\"nav nav-tabs\">\n        <li class=\"active\"><a href=\"#profile\" data-toggle=\"tab\">評分資料</a></li>\n    </ul>\n    <div class=\"tab-content\">\n        <div class=\"tab-pane active\" id=\"profile\">\n            <form action=\"#\" method=\"post\" class=\"well\" id=\"rank_add_form\">\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <div class=\"form-group\">\n                    <label class=\"control-label\">評分級別</label>\n                    <div class=\"radio\">\n                        <input type=\"radio\" name=\"rank\" value=\"5\" ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.ifeq || depth0.ifeq),stack1 ? stack1.call(depth0, depth0.rank, "5", options) : helperMissing.call(depth0, "ifeq", depth0.rank, "5", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  options = {hash:{},inverse:self.program(3, program3, data),fn:self.noop,data:data};
  if (stack2 = helpers.is_edit) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.is_edit; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.is_edit) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">5 (最高)\n                    </div>\n                    <div class=\"radio\">\n                        <input type=\"radio\" name=\"rank\" value=\"4\" ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.ifeq || depth0.ifeq),stack1 ? stack1.call(depth0, depth0.rank, "4", options) : helperMissing.call(depth0, "ifeq", depth0.rank, "4", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">4\n                    </div>\n                    <div class=\"radio\">\n                        <input type=\"radio\" name=\"rank\" value=\"3\" ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.ifeq || depth0.ifeq),stack1 ? stack1.call(depth0, depth0.rank, "3", options) : helperMissing.call(depth0, "ifeq", depth0.rank, "3", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">3\n                    </div>\n                    <div class=\"radio\">\n                        <input type=\"radio\" name=\"rank\" value=\"2\" ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.ifeq || depth0.ifeq),stack1 ? stack1.call(depth0, depth0.rank, "2", options) : helperMissing.call(depth0, "ifeq", depth0.rank, "2", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">2\n                    </div>\n                    <div class=\"radio\">\n                        <input type=\"radio\" name=\"rank\" value=\"1\" ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.ifeq || depth0.ifeq),stack1 ? stack1.call(depth0, depth0.rank, "1", options) : helperMissing.call(depth0, "ifeq", depth0.rank, "1", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">1\n                    </div>\n                    <span class=\"help-block\">請選擇此評分</span>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">評分標題</label>\n                    <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"請輸入評分名稱\" value=\"";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n                    <span class=\"help-block\"></span>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">描述</label>\n                    <textarea class=\"form-control\" rows=\"5\" name=\"description\">";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.description; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</textarea>\n                    <span class=\"help-block\"></span>\n                </div>\n                <p class=\"help-block\">*上面欄位務必填寫.</p>\n                <input type=\"hidden\" name=\"motel_id\" value=\"";
  if (stack2 = helpers.motel_id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.motel_id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack2 = helpers.is_edit) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.is_edit; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.is_edit) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                <button type=\"button\" data-form=\"#rank_add_form\" ";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  if (stack2 = helpers.is_edit) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.is_edit; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.is_edit) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " data-model=\"rank\" class=\"btn btn-primary ";
  options = {hash:{},inverse:self.program(9, program9, data),fn:self.noop,data:data};
  if (stack2 = helpers.is_edit) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.is_edit; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.is_edit) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data};
  if (stack2 = helpers.is_edit) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.is_edit; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.is_edit) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">";
  options = {hash:{},inverse:self.program(13, program13, data),fn:self.noop,data:data};
  if (stack2 = helpers.is_edit) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.is_edit; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.is_edit) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data};
  if (stack2 = helpers.is_edit) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.is_edit; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.is_edit) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</button>\n                <button class=\"btn\" type=\"reset\">";
  options = {hash:{},inverse:self.program(17, program17, data),fn:self.noop,data:data};
  if (stack2 = helpers.is_edit) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.is_edit; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.is_edit) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  options = {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data};
  if (stack2 = helpers.is_edit) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.is_edit; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.is_edit) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</button>\n            </form>\n        </div>\n    </div>\n</div>\n</article>\n<script>\n(function($){\n    $('#myTab').tab('show');\n    $('a[data-toggle=\"tab\"]').on('shown', function (e) {\n        console.log(e);\n        console.log(e.target.hash); // activated tab\n        console.log(e.relatedTarget.hash); // previous tab\n    });\n}(jQuery));\n</script>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["rank_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <a class=\"btn btn-primary check_all\" data-model=\"rank\" style=\"color: white;\"><i class=\"icon-ok\"></i> 全選列表</a>\n        <a class=\"btn btn-primary\" data-model=\"rank\" href=\"#!/rank/add/";
  if (stack1 = helpers.motel_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.motel_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"color: white;\"><i class=\"icon-edit\"></i> 新增評分</a>\n        <a class=\"btn btn-danger delete_all\" data-form=\"#rank_list_form\" data-model=\"rank\" style=\"color: white;\"><i class=\"icon-trash\"></i> 刪除評分</a>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"previous\">\n            <a href=\"#!/rank/list/1\" style=\"margin-right: 10px;\">&larr; 第一頁</a>\n        </li>\n        <li class=\"previous\">\n            <a href=\"#!/rank/list/";
  if (stack1 = helpers.previous_page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.previous_page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">&larr; 上一頁</a>\n        </li>\n        ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"next\">\n            <a href=\"#!/rank/list/";
  if (stack1 = helpers.next_page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.next_page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">下一頁 &rarr;</a>\n        </li>\n        ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\n                <th>&nbsp;</th>\n                ";
  }

function program9(depth0,data) {
  
  
  return "\n                <th>動作</th>\n                ";
  }

function program11(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n        <tr>\n            ";
  stack2 = ((stack1 = ((stack1 = depth1.isAdmin),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            <td>";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n            <td>";
  if (stack2 = helpers.rank) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rank; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n            <td>";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n            <td>";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.description; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n            <td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date_time || depth0.date_time),stack1 ? stack1.call(depth0, depth0.add_time, options) : helperMissing.call(depth0, "date_time", depth0.add_time, options)))
    + "</td>\n            ";
  stack2 = ((stack1 = ((stack1 = depth1.isAdmin),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </tr>\n        ";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <td><input type=\"checkbox\" name=\"id[]\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></td>\n            ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <td>\n                <a class=\"btn btn-primary\" data-model=\"rank\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#!/rank/edit/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"color: white;\"><i class=\"icon-edit\"></i> 編輯</a>&nbsp;\n                <a class=\"btn btn-danger delete\" data-model=\"rank\" data-title=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\" style=\"color: white;\"><i class=\"icon-trash\"></i> 刪除</a>\n            </td>\n            ";
  return buffer;
  }

  buffer += "<article class=\"module width_full\">\n<div style=\"width:98%;margin:0 auto;\">\n    <div class=\"menu\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.isAdmin) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isAdmin; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isAdmin) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <ul class=\"pager\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.previous_show) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.previous_show; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.previous_show) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.next_show) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.next_show; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.next_show) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n    <form action=\"#\" method=\"post\" id=\"rank_list_form\">\n    <div class=\"table-responsive\">\n    <table id=\"rank_list\" class=\"table table-striped table-bordered table-condensed tablesorter\">\n        <thead>\n            <tr>\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  if (stack1 = helpers.isAdmin) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isAdmin; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isAdmin) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <th>編號</th>\n                <th>評分</th>\n                <th>標題</th>\n                <th>內容</th>\n                <th>建立日期</th>\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  if (stack1 = helpers.isAdmin) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isAdmin; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isAdmin) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </tr>\n        </thead>\n        <tbody>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(11, program11, data, depth0),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n    </table>\n    </div>\n    </form>\n</div>\n</article>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["room_edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"alert alert-info\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n                    最後修改日期為 ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date_time || depth0.date_time),stack1 ? stack1.call(depth0, depth0.edit_time, options) : helperMissing.call(depth0, "date_time", depth0.edit_time, options)))
    + "\n                </div>\n                ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "checked";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <img src=\"";
  if (stack1 = helpers.image_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-rounded\" style=\"width: 400px; height: 200px;\">\n                    ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <input type=\"hidden\" name=\"id\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program11(depth0,data) {
  
  
  return "add";
  }

function program13(depth0,data) {
  
  
  return "edit";
  }

function program15(depth0,data) {
  
  
  return "建立房型";
  }

function program17(depth0,data) {
  
  
  return "編輯房型";
  }

function program19(depth0,data) {
  
  
  return "重新填寫";
  }

function program21(depth0,data) {
  
  
  return "取消編輯";
  }

  buffer += "<article class=\"module width_full\">\n<div style=\"width:97%;margin:0 auto;\">\n    <div class=\"menu\">\n        <a class=\"btn btn-primary\" data-model=\"room\" href=\"#!/room/list/";
  if (stack1 = helpers.motel_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.motel_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"color: white;\"><i class=\"icon-list\"></i> 檢視房型列表</a>\n    </div>\n    <ul id=\"mytab\" class=\"nav nav-tabs\">\n        <li class=\"active\"><a href=\"#profile\" data-toggle=\"tab\">房型資料</a></li>\n    </ul>\n    <div class=\"tab-content\">\n        <div class=\"tab-pane active\" id=\"profile\">\n            <form action=\"#\" method=\"post\" class=\"well\" id=\"room_add_form\">\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <div class=\"form-group\">\n                    <label class=\"control-label\">房型名稱</label>\n                    <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"請輸入房型名稱\" value=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <span class=\"help-block\"></span>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">房型類別</label>\n                    <div class=\"radio\">\n                        <input type=\"radio\" name=\"type\" value=\"0\" ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.ifeq || depth0.ifeq),stack1 ? stack1.call(depth0, depth0.type, "0", options) : helperMissing.call(depth0, "ifeq", depth0.type, "0", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  options = {hash:{},inverse:self.program(3, program3, data),fn:self.noop,data:data};
  if (stack2 = helpers.is_edit) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.is_edit; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.is_edit) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">休息 (預設選項)\n                    </div>\n                    <div class=\"radio\">\n                        <input type=\"radio\" name=\"type\" value=\"1\" ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.ifeq || depth0.ifeq),stack1 ? stack1.call(depth0, depth0.type, "1", options) : helperMissing.call(depth0, "ifeq", depth0.type, "1", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">住宿\n                    </div>\n                    <span class=\"help-block\">請選擇此房型為住宿或休息型態</span>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">原價</label>\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\">$</span>\n                        <input type=\"text\" name=\"price_1\" class=\"form-control\" placeholder=\"原價\" value=\"";
  if (stack2 = helpers.price_1) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.price_1; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n                        <span class=\"input-group-addon\">.00</span>\n                    </div>\n                    <span class=\"help-block\"></span>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">平日特價</label>\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\">$</span>\n                        <input type=\"text\" name=\"price_2\" class=\"form-control\" placeholder=\"平日特價\" value=\"";
  if (stack2 = helpers.price_2) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.price_2; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n                        <span class=\"input-group-addon\">.00</span>\n                    </div>\n                    <span class=\"help-block\"></span>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">假日特價</label>\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\">$</span>\n                        <input type=\"text\" name=\"price_3\" class=\"form-control\" placeholder=\"假日特價\" value=\"";
  if (stack2 = helpers.price_3) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.price_3; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n                        <span class=\"input-group-addon\">.00</span>\n                    </div>\n                    <span class=\"help-block\"></span>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">上傳房型圖片</label>\n                    <div data-placement=\"top\" data-original-title=\"Change collection cover\" data-toggle=\"tooltip\">\n                        <a class=\"btn btn-success fileinput-button\">\n                            <i class=\"icon-cloud-upload\"></i>\n                            <span>上傳房型封面</span>\n                            <!-- The file input field used as target for the file upload widget -->\n                            <input id=\"fileupload\" type=\"file\" name=\"upload_file\">\n                        </a>\n                        <input type=\"hidden\" id=\"image_url\" name=\"image_url\" value=\"";
  if (stack2 = helpers.image_url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.image_url; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n                        <input type=\"hidden\" id=\"raw_name\" name=\"raw_name\" value=\"";
  if (stack2 = helpers.raw_name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.raw_name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n                    </div>\n                </div>\n                <div id=\"upload_area\" class=\"row\">\n                    ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack2 = helpers.is_image) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.is_image; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.is_image) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </div>\n                <div id=\"progress\" class=\"progress hide\" style=\"margin-top:10px;\">\n                    <div style=\"width: 0%;\" class=\"progress-bar progress-bar-success\"></div>\n                </div>\n                <p class=\"help-block\">*上面欄位務必填寫.</p>\n                <input type=\"hidden\" name=\"motel_id\" value=\"";
  if (stack2 = helpers.motel_id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.motel_id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  if (stack2 = helpers.is_edit) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.is_edit; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.is_edit) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                <button type=\"button\" data-form=\"#room_add_form\" ";
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  if (stack2 = helpers.is_edit) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.is_edit; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.is_edit) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " data-model=\"room\" class=\"btn btn-primary ";
  options = {hash:{},inverse:self.program(11, program11, data),fn:self.noop,data:data};
  if (stack2 = helpers.is_edit) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.is_edit; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.is_edit) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data};
  if (stack2 = helpers.is_edit) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.is_edit; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.is_edit) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">";
  options = {hash:{},inverse:self.program(15, program15, data),fn:self.noop,data:data};
  if (stack2 = helpers.is_edit) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.is_edit; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.is_edit) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  options = {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data};
  if (stack2 = helpers.is_edit) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.is_edit; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.is_edit) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</button>\n                <button class=\"btn\" type=\"reset\">";
  options = {hash:{},inverse:self.program(19, program19, data),fn:self.noop,data:data};
  if (stack2 = helpers.is_edit) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.is_edit; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.is_edit) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  options = {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data};
  if (stack2 = helpers.is_edit) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.is_edit; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.is_edit) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</button>\n            </form>\n        </div>\n    </div>\n</div>\n</article>\n<script>\n(function($){\n    $('#myTab').tab('show');\n    $('a[data-toggle=\"tab\"]').on('shown', function (e) {\n        console.log(e);\n        console.log(e.target.hash); // activated tab\n        console.log(e.relatedTarget.hash); // previous tab\n    });\n}(jQuery));\n</script>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["room_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"previous\">\n            <a href=\"#!/room/list/1\" style=\"margin-right: 10px;\">&larr; 第一頁</a>\n        </li>\n        <li class=\"previous\">\n            <a href=\"#!/room/list/";
  if (stack1 = helpers.previous_page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.previous_page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">&larr; 上一頁</a>\n        </li>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"next\">\n            <a href=\"#!/room/list/";
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
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n            <td>";
  if (stack1 = helpers.price_1) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price_1; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  if (stack1 = helpers.price_2) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price_2; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  if (stack1 = helpers.price_3) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price_3; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date_time || depth0.date_time),stack1 ? stack1.call(depth0, depth0.add_time, options) : helperMissing.call(depth0, "date_time", depth0.add_time, options)))
    + "</td>\n            <td>\n                <a class=\"btn btn-primary\" data-model=\"room\" data-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" href=\"#!/room/edit/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" style=\"color: white;\"><i class=\"icon-edit\"></i> 編輯</a>&nbsp;\n                <a class=\"btn btn-danger delete\" data-model=\"room\" data-title=\"";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" data-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" href=\"#\" style=\"color: white;\"><i class=\"icon-trash\"></i> 刪除</a>\n            </td>\n        </tr>\n        ";
  return buffer;
  }

  buffer += "<article class=\"module width_full\">\n<div style=\"width:98%;margin:0 auto;\">\n    <div class=\"menu\">\n        <a class=\"btn btn-primary check_all\" data-model=\"room\" style=\"color: white;\"><i class=\"icon-ok\"></i> 全選列表</a>\n        <a class=\"btn btn-primary\" data-model=\"room\" href=\"#!/room/add/";
  if (stack1 = helpers.motel_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.motel_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"color: white;\"><i class=\"icon-edit\"></i> 新增房型</a>\n        <a class=\"btn btn-danger delete_all\" data-form=\"#room_list_form\" data-model=\"room\" style=\"color: white;\"><i class=\"icon-trash\"></i> 刪除房型</a>\n    </div>\n    <ul class=\"pager\">\n        ";
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
  buffer += "\n    </ul>\n    <form action=\"#\" method=\"post\" id=\"room_list_form\">\n    <div class=\"table-responsive\">\n    <table id=\"room_list\" class=\"table table-striped table-bordered table-condensed tablesorter\">\n        <thead>\n            <tr>\n                <th>&nbsp;</th>\n                <th>編號</th>\n                <th>房型名稱</th>\n                <th>休息/住宿</th>\n                <th>原價</th>\n                <th>平日特價</th>\n                <th>假日特價</th>\n                <th>建立日期</th>\n                <th>動作</th>\n            </tr>\n        </thead>\n        <tbody>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n    </table>\n    </div>\n    </form>\n</div>\n</article>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["user_edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "\n        <a class=\"btn btn-primary\" data-model=\"user\" href=\"#!/user/list\" style=\"color: white;\"><i class=\"icon-list icon-white\"></i> 檢視帳號列表</a>\n        ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"alert alert-info\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n                    建立日期為 ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date_time || depth0.date_time),stack1 ? stack1.call(depth0, depth0.created_on, options) : helperMissing.call(depth0, "date_time", depth0.created_on, options)))
    + "\n                </div>\n                ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class=\"form-group\">\n                    <label class=\"control-label\">摩鐵ID</label>\n                    <input type=\"text\" name=\"motel_id\" class=\"form-control\" placeholder=\"Please enter motel ID\" value=\"";
  if (stack1 = helpers.motel_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.motel_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <span class=\"help-block\">請在<a href=\"#!/motel/list\">摩鐵列表</a>找尋ID編號</span>\n                </div>\n                ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "登入密碼";
  }

function program9(depth0,data) {
  
  
  return "修改密碼";
  }

function program11(depth0,data) {
  
  
  return "不需要修改密碼，請留空白";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data};
  if (stack1 = helpers.isAdmin) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isAdmin; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isAdmin) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"form-group\">\n                    <label class=\"control-label\">群組:</label>\n                    <div class=\"controls\">\n                        ";
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data};
  if (stack1 = helpers.all_groups) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.all_groups; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.all_groups) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </div>\n                </div>\n                ";
  return buffer;
  }
function program15(depth0,data) {
  
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

function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <input type=\"hidden\" name=\"id\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program21(depth0,data) {
  
  
  return "add";
  }

function program23(depth0,data) {
  
  
  return "edit";
  }

function program25(depth0,data) {
  
  
  return "建立帳號";
  }

function program27(depth0,data) {
  
  
  return "編輯帳號";
  }

function program29(depth0,data) {
  
  
  return "重新填寫";
  }

function program31(depth0,data) {
  
  
  return "取消編輯";
  }

function program33(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n        <div class=\"tab-pane\" id=\"software\">\n            <form action=\"#\" method=\"post\" class=\"well\" id=\"app_lists_form\">\n                <div class=\"menu menu_left\">\n                    <a class=\"btn btn-primary add_apps\" data-form=\"#app_lists_form\" style=\"color: white;\"><i class=\"icon-edit icon-white\"></i> 新增軟體</a>\n                </div>\n                <p style=\"clear:both;\">&nbsp;</p>\n                <div id=\"app_list\">\n                </div>\n                <p style=\"clear:both;\">&nbsp;</p>\n                <input type=\"hidden\" name=\"user_id\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n            </form>\n        </div>\n        <div class=\"tab-pane\" id=\"user_apps\">\n            <form action=\"#\" method=\"post\" class=\"well\" id=\"user_apps_form\">\n                <div class=\"menu menu_left\">\n                    <a class=\"btn btn-danger delete_apps\" data-form=\"#user_apps_form\" style=\"color: white;\"><i class=\"icon-edit icon-white\"></i> 刪除軟體</a>\n                </div>\n                <div id=\"user_app_list\">\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(34, program34, data),data:data};
  if (stack1 = helpers.apps) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.apps; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.apps) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </div>\n                <p style=\"clear:both;\">&nbsp;</p>\n            </form>\n        </div>\n        ";
  return buffer;
  }
function program34(depth0,data) {
  
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

  buffer += "<article class=\"module width_full\">\n<div style=\"width:97%;margin:0 auto;\">\n    <div class=\"menu\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.isAdmin) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isAdmin; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isAdmin) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <ul id=\"mytab\" class=\"nav nav-tabs\">\n        <li class=\"active\"><a href=\"#profile\" data-toggle=\"tab\">個人資料</a></li>\n    </ul>\n    <div class=\"tab-content\">\n        <div class=\"tab-pane active\" id=\"profile\">\n            <form action=\"#\" method=\"post\" class=\"well\" id=\"user_add_form\">\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <div class=\"form-group\">\n                    <label class=\"control-label\">登入帳號</label>\n                    <input type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"Please enter user email\" value=\"";
  if (stack1 = helpers.username) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.username; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <span class=\"help-block\">僅支援英文+數字帳號</span>\n                </div>\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.isAdmin) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isAdmin; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isAdmin) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <div class=\"form-group\">\n                    <label class=\"control-label\">";
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
  buffer += "</label>\n                    <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Please enter password\">\n                    <p class=\"help-block\">";
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data};
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
  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <p class=\"help-block\">*上面欄位務必填寫.</p>\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <button type=\"button\" data-form=\"#user_add_form\" ";
  options = {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-model=\"user\" class=\"btn btn-primary ";
  options = {hash:{},inverse:self.program(21, program21, data),fn:self.noop,data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options = {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  options = {hash:{},inverse:self.program(25, program25, data),fn:self.noop,data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options = {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n                <button class=\"btn\" type=\"reset\">";
  options = {hash:{},inverse:self.program(29, program29, data),fn:self.noop,data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options = {hash:{},inverse:self.noop,fn:self.program(31, program31, data),data:data};
  if (stack1 = helpers.is_edit) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.is_edit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.is_edit) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n            </form>\n        </div>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data};
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
    + "\" style=\"color: white;\"><i class=\"icon-edit\"></i> 編輯</a>&nbsp;\n                <a class=\"btn btn-danger delete\" data-model=\"user\" data-title=\"";
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

  buffer += "<article class=\"module width_full\">\n<div style=\"width:98%;margin:0 auto;\">\n    <div class=\"menu\">\n        <a class=\"btn btn-primary check_all\" data-model=\"user\" style=\"color: white;\"><i class=\"icon-ok\"></i> 全選列表</a>\n        <a class=\"btn btn-primary\" data-model=\"user\" href=\"#!/user/add\" style=\"color: white;\"><i class=\"icon-edit\"></i> 新增帳號</a>\n        <a class=\"btn btn-danger delete_all\" data-form=\"#user_list_form\" data-model=\"user\" style=\"color: white;\"><i class=\"icon-trash\"></i> 刪除帳號</a>\n    </div>\n    <ul class=\"pager\">\n        ";
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
  buffer += "\n    </ul>\n    <form action=\"#\" method=\"post\" id=\"user_list_form\">\n    <div class=\"table-responsive\">\n    <table id=\"user_list\" class=\"table table-striped table-bordered table-condensed tablesorter\">\n        <thead>\n            <tr>\n                <th>&nbsp;</th>\n                <th>編號</th>\n                <th>名字</th>\n                <th>姓氏</th>\n                <th>帳號</th>\n                <th>建立日期</th>\n                <th>最後登入</th>\n                <th>動作</th>\n            </tr>\n        </thead>\n        <tbody>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n    </table>\n    </div>\n    </form>\n</div>\n</article>\n";
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