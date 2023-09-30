function get() {
    fetch('chat.php')
        .then(response => response.json())
        .then(data => {
            const chat = document.getElementById('chat');
            chat.innerHTML = '';
            data.messages.forEach(message => {
                const messageElement = document.createElement('div');
                messageElement.innerHTML = `<b>${message.name}:</b> ${message.message}`;
                chat.appendChild(messageElement);
            });
        })
        .catch(error => console.error('Ошибка при получении данных:', error));
}

function send() {
    const message = document.getElementById('message').value;
    const name = document.getElementById('userName').value;
    if (message && name) {
        fetch('chat.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `message=${encodeURIComponent(message)}&name=${encodeURIComponent(name)}`
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                document.getElementById('message').value = '';
                get();
            }
        })
        .catch(error => console.error('Ошибка при отправке сообщения:', error));
    }
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        send();
    }
}

get();
setInterval(get, 2000);