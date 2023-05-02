


import { DialogUtility } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';

let promptBtn: Button = new Button({isPrimary: true});
promptBtn.appendTo('#promptBtn');
document.getElementById('promptBtn').onclick = (): void => {
    DialogUtility.confirm({
        title: 'Join Chat Group',
        width: '300px',
        content: '<p>Enter your name: </p><input id= "inputEle" type="text" name="Required" class="e-input" placeholder="Type here.." />',
        okButton: { text: 'Connect'},
        cancelButton: {text:'Close'}
    });
};



