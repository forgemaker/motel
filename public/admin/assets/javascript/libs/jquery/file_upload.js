(function($){
    var file_name = ($("input[name=upload_file_name]").val()) ? $("input[name=upload_file_name]").val() : 'file_list';
    var type = $('#file_upload').data('type') || '';
    $('#file_upload').uploadify({
        'uploader': 'assets/upload/uploadify.swf',
        'script': '/files/upload?type=' + type,
        'cancelImg': 'assets/upload/cancel.png',
        'folder': '/upload/',
        'auto': true,
        'buttonText': 'Select Upload File',
        'displayData': true,
        'fileDataName': 'userfile',
        'removeCompleted': false,
        'multi': true,
        'onComplete': function(event, ID, fileObj, response, data) {
            var html, mode, obj;
            obj = jQuery.parseJSON(response);
            $('#file_upload' + ID).slideUp('1000', function() {
                return $(this).remove();
            });
            if (obj.error !== "") {
                html = $("#message").html();
                return $("#message").html(html + obj.error);
            } else {
                html = '<li class="span2" style="text-align:center"><a href="#" class="thumbnail"><img src="/files/get/' + obj.upload_data.file_name + '/160/120" alt=""></a><input type="hidden" name="' + file_name + '[]" value="' + obj.upload_data.id + '"><button type="button" data-id="' + obj.upload_data.id + '" class="btn btn-danger delete_file">刪除檔案</button></li>';
                $(".thumbnails").prepend(html);
            }
        }
    });
    $(".thumbnails").sortable();
    $(".thumbnails").disableSelection();
}(jQuery));
