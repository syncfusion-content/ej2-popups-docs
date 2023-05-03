ej.base.enableRipple(true);

var promptBtn = new ej.buttons.Button({isPrimary: true});
promptBtn.appendTo('#promptBtn');
document.getElementById('promptBtn').onclick = function () {
    document.getElementById("statusText").style.display = "none";
    var dialogObj = ej.popups.DialogUtility.confirm({
        title: 'Join Chat Group',
        width:'300px',
        content: '<p>Enter your name: </p><input id= "inputEle" type="text" name="Required" class="e-input" placeholder="Type here.." />',
        okButton: { click: promptOkAction.bind(this) },
        cancelButton: { click: promptCancelAction.bind(this) },
        position: { X: 'center', Y: 'center' }
    });
    function promptOkAction() {
        var value;
        value = document.getElementById("inputEle").value;
        if (value == "") {
            dialogObj.hide();
            document.getElementById("statusText").innerHTML = "	The user's input is returned as \" \" ";
            document.getElementById("statusText").style.display = "block";
        }
        else {
            dialogObj.hide();
            document.getElementById("statusText").innerHTML = "The user's input is returned as" + " " + value;
            document.getElementById("statusText").style.display = "block";
        }
    }
    function promptCancelAction() {
        dialogObj.hide();
        document.getElementById("statusText").innerHTML = "The user canceled the prompt dialog";
        document.getElementById("statusText").style.display = "block";
    }
};

