const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")
var audio = new Audio('sms_tone.mp3.mpeg');

const append = (message, position) =>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageContainer.append(messageElement);
    if(position =='left'){
        audio.play();
    }
}

// ask new user for his/her name and let the server know
const name = prompt("Enter your name to join");
socket.emit('new-user-joined', name);

// if server sends a message receive it
socket.on('user-joined', name =>{
    append(`${name} joined the chat`, 'right')
})
socket.on('receive', data =>{
    append(`${data.name}: ${data.message}`, 'left')
})

// if a user leaves the chat , append the info to the container
socket.on('left', name =>{
    append(`${name} left the chat`, 'right')
})

// if the form gets submitted , send server the message
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = ''
})