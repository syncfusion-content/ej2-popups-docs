


import { DialogUtility } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';

let alertBtn: Button = new Button({cssClass: 'e-danger'});
alertBtn.appendTo('#alertBtn');
document.getElementById('alertBtn').onclick = (): void => {
    // Initialize and render alert dialog
    DialogUtility.alert({
        title: 'About SYNCFUSION Succinctly Serires',
        content: 'In the Succinctly series, Syncfusion created a robust, free library of more than 130 technical e-books formatted for PDF, Kindle, and EPUB.Each title in the Succinctly series is written by a carefully chosen expert and provides essential content in about 100 pages. The Succinctly series was born in 2012 out of a desire to provide concise technical e-books for software developers.',
        cssClass : 'customClass'
    });
};



