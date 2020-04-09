var $note = $('#notepad');

var menubar = new Menubar();

var editor = new Editor();
var $editor = editor.init();
$note.append($editor.show());

var dlgFont = new DlgFont(editor);
var $dlgFont = dlgFont.init();
$note.after($dlgFont);

$note.click(menubar.hideMenu.bind(menubar));
