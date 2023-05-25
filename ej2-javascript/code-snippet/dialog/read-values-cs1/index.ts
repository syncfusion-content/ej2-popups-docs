


import { enableRipple } from '@syncfusion/ej2-base';
import { Button } from '@syncfusion/ej2-buttons';
import { Dialog } from '@syncfusion/ej2-popups';

let dialogObj: Dialog = new Dialog({
    header: 'User details',
    content: document.getElementById("dlgContent"),
    showCloseIcon: true,
    visible: false,
    buttons: [{
        buttonModel: { isPrimary: true, content: 'Submit' }, click:  function() {
            createModalDialog();
        },
    }],
    target: document.querySelector('body'),
    width: '400px',
    animationSettings: { effect: 'Zoom' },
    beforeOpen: onBeforeopen
});
dialogObj.appendTo('#dialog');

document.getElementById('openBtn').onclick = (): void => {
    dialogObj.show();
};

let modalObj: Dialog;

function createModalDialog() {
    dialogObj.hide()
    if (!document.getElementById('modalDialog').classList.contains('e-dialog')) {
        modalObj = new Dialog({
            header: 'User details',
            content: getDynamicContent(),
            showCloseIcon: true,
            isModal: true,
            visible: true,
            width: '600px',
            buttons: [{buttonModel: {isPrimary: true, content: 'Yes'}, click:  function() {
                this.hide();
            }}, {buttonModel: {isPrimary: false, content: 'No'}, click: function() {
                this.hide();
                dialogObj.show();
            }}],
            target: document.querySelector('body'),
            animationSettings: { effect: 'Zoom' }
        });
        modalObj.appendTo('#modalDialog');
    } else {
        modalObj.content = getDynamicContent();
        modalObj.show()
    }
}


function getDynamicContent(): string {
    let input: HTMLInputElement =  document.getElementById('dialog').querySelector('#name');
    let email: HTMLInputElement =  document.getElementById('dialog').querySelector('#email');
    let contact: HTMLInputElement =  document.getElementById('dialog').querySelector('#contact');
    let address: HTMLTextAreaElement =  document.getElementById('dialog').querySelector('#address');
    let template: string = "<div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><b>Confirm your details</b></div>" +
    "</div><div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='name'> Name: </span>" +
    "</div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='nameValue'>"+ input.value + "</span> </div></div>" +
    "<div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='email'> Email: </span>" +
    "</div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='emailValue'>" + email.value +
    "</span></div></div><div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'>"+
    "<span id='Contact'> Contact number: </span></div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'>"+
    "<span id='contactValue'>"+ contact.value +" </span></div></div><div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'>"+
    "<span id='Address'> Address: </span> </div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='AddressValue'>" + address.value +"</span></div></div>"
    return template;
}

function onBeforeopen(): void {
    document.getElementById('dlgContent').style.visibility = 'visible';
}



