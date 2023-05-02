


import { DialogUtility } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';

let confirmBtn: Button = new Button({cssClass: 'e-success'});
confirmBtn.appendTo('#confirmBtn');
document.getElementById('confirmBtn').onclick = (): void => {
    DialogUtility.confirm({
        title: 'Delete Multiple Items',
        content: "Are you sure you want to permanently delete these items?",
        width: '300px',
        animationSettings: { effect: 'Zoom' }
    });
};



