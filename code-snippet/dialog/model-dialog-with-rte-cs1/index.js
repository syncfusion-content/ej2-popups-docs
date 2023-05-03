ej.base.enableRipple(true);

// Initialize Dialog component
var dialog = new ej.popups.Dialog({
    // Enables modal dialog
    isModal:true,
    // overlayClick event handler
    overlayClick: onOverlayClick,
    // Dialog content
    content: document.getElementById("defaultRTE"),
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    // Dialog width
    width: '500px',
    open: dlgopen
});
// Render initialized Dialog
dialog.appendTo('#dialog');

// Sample level code to handle the button click action
document.getElementById('targetButton').onclick = function() {
    // Call the show method to open the Dialog
    dialog.show();
}

// Sample level code to hide the Dialog when click the Dialog overlay
function onOverlayClick() {
    dialog.hide();
}
function dlgopen() {
    defaultRTE.refreshUI();
}
var defaultRTE = new ej.richtexteditor.RichTextEditor({

});

// render initialized Rich Text Editor
defaultRTE.appendTo("#defaultRTE");


