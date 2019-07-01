function sendTestText() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("ResponseData").innerHTML =
                this.responseText;
            console.log("received message" + this.responseText);
        }
    };

    xhttp.open("Post", "/", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    TextMSG = document.getElementById("TextMessage").value;
    phoneNumberTo = document.getElementById("ToPhoneNumber").value;

    var sentdata = {
        toPhoneNumber: phoneNumberTo,
        textMessage: TextMSG
    }
    xhttp.send(JSON.stringify(sentdata));
    console.log("sent message" + JSON.stringify(sentdata))


}