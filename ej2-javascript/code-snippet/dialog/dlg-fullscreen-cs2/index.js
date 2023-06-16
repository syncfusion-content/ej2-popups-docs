ej.base.enableRipple(true);

// Initialize Dialog component
var dialog = new ej.popups.Dialog({
    // Enables the footer buttons
    buttons: [
        {
            // Click the footer buttons to hide the Dialog
            'click': function () {
                dialog.hide();
            },
            // Accessing button component properties by buttonModel property
            buttonModel: {
                //Enables the primary button
                isPrimary: true,
                cssClass: 'e-flat',
                content: 'OK'
            }
        },
        {
            'click': function () {
                dialog.hide();
            },
            buttonModel: {
                content: 'Cancel',
                cssClass: 'e-flat'
            }
        }
    ],
    // Enables the header
    header: 'Dialog',
    // Dialog content
    content: 'This is a Dialog with fullscreen display',
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    // Dialog width
    width: '250px',
    visible: false,
});

// Render initialized Dialog
dialog.appendTo('#dialog');

// Sample level code to handle the button click action
document.getElementById('targetButton').onclick = function () {
    // Call the show method to open the Dialog
    dialog.show(true);
};
