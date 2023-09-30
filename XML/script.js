document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("send-button");
    const messageInput = document.getElementById("message");
    const chatBox = document.getElementById("chat-box");

    sendButton.addEventListener("click", function() {
        const message = messageInput.value;
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "chat.php", true);
        xhr.setRequestHeader("Content-Type", "text/xml");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                chatBox.innerHTML += xhr.responseText;
                messageInput.value = "";
            }
        };

        const xmlData = `<req>
            <surname>Иванов</surname>
            <name>Иван</name>
            <patronymic>Иванович</patronymic>
            <birthdate>01.01.1990</birthdate>
            <birthplace>Москва</birthplace>
            <phone>8 926 766 48 48</phone>
        </req>`;

        xhr.send(xmlData);
    });
});