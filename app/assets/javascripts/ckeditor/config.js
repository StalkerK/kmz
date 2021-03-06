CKEDITOR.editorConfig = function(config) {
  //config.language = 'es'; //this could be any language
  config.width = '725';
  config.height = '600';

  
  // Filebrowser routes
  // The location of an external file browser, that should be launched when "Browse Server" button is pressed.
  config.filebrowserBrowseUrl = "/ckeditor/attachment_files";
  // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Flash dialog.
  config.filebrowserFlashBrowseUrl = "/ckeditor/attachment_files";
  // The location of a script that handles file uploads in the Flash dialog.
  config.filebrowserFlashUploadUrl = "/ckeditor/attachment_files";
  // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Link tab of Image dialog.
  config.filebrowserImageBrowseLinkUrl = "/ckeditor/pictures";
  // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Image dialog.
  config.filebrowserImageBrowseUrl = "/ckeditor/pictures";
  // The location of a script that handles file uploads in the Image dialog.
  config.filebrowserImageUploadUrl = "/ckeditor/pictures";
  // The location of a script that handles file uploads.
  config.filebrowserUploadUrl = "/ckeditor/attachment_files";
  //Config Youtube 
  config.extraPlugins = 'youtube';
  config.youtube_width = '640';
  config.youtube_height = '480';
  config.youtube_related = true;
  config.youtube_older = false;
  config.youtube_privacy = false;
  config.youtube_autoplay = false;

  config.allowedContent = true;
// You could delete or reorder any of this elements as you wish
  config.toolbar_Menu = [
    { name: 'document', items: ['Source', '-', 'Save', 'NewPage', 'DocProps', 'Preview', 'Print', '-', 'Templates'] }, 
    { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] }, 
    { name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll', '-', 'SpellChecker', 'Scayt'] }, 
    { name: 'tools', items: ['Maximize', 'ShowBlocks', '-', 'About'] }, '/', 
    { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] }, 
    { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl'] }, 
    { name: 'links', items: ['Link', 'Unlink', 'Anchor'] }, '/', 
    { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] }, 
    { name: 'colors', items: ['TextColor', 'BGColor'] }, 
    { name: 'insert', items: ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak'] },
    { name: 'others', items: [ 'Youtube' ] },
  ];
  config.toolbar = 'Menu';
  return true;
};