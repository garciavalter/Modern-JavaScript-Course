const btnGeneral = document.querySelector('.btn-general');
const btnGaming = document.querySelector('.btn-gamming');
const btnMusic = document.querySelector('.btn-music');
const btnNinjas = document.querySelector('.btn-ninjas');
const messageToSent = document.querySelector('.message-to-sent');
const newName = document.querySelector('.new-name');
const btnSend = document.querySelector('.btn-send');
const btnUpdateName = document.querySelector('.btn-update-name');
const roomHistoryGeneral = document.querySelector('.room-history-general')
const roomHistoryGamming = document.querySelector('.room-history-gamming')
const roomHistoryMusic = document.querySelector('.room-history-music')
const roomHistoryNinjas = document.querySelector('.room-history-ninjas')
const chatRoomList = document.querySelector('.chatroom-list')

let userName = 'Anon'
let currentChannel = 'General';

btnGeneral.addEventListener('click', e =>{
    e.preventDefault();
    currentChannel='General';
    roomHistoryGeneral.classList.remove("hide");
    roomHistoryGamming.classList.add("hide");
    roomHistoryMusic.classList.add("hide");
    roomHistoryNinjas.classList.add("hide");
    });

btnGaming.addEventListener('click', e =>{
    e.preventDefault();
    currentChannel='Gamming';
    roomHistoryGeneral.classList.add("hide");
    roomHistoryGamming.classList.remove("hide");
    roomHistoryMusic.classList.add("hide");
    roomHistoryNinjas.classList.add("hide");
});

btnMusic.addEventListener('click', e =>{
    e.preventDefault();
    currentChannel='Music';
    roomHistoryGeneral.classList.add("hide");
    roomHistoryGamming.classList.add("hide");
    roomHistoryMusic.classList.remove("hide");
    roomHistoryNinjas.classList.add("hide");
});
btnNinjas.addEventListener('click', e =>{
    e.preventDefault();
    currentChannel='Ninjas';
    roomHistoryGeneral.classList.add("hide");
    roomHistoryGamming.classList.add("hide");
    roomHistoryMusic.classList.add("hide");
    roomHistoryNinjas.classList.remove("hide");
});

const sendMessage = (username, message, time) => {
    html = `
    <li class="list-group-item"><strong>${username}</strong>: ${message}
    <br><span class="timestamp">${time}</span></li>
    `
    switch(currentChannel){
        case 'General':
            roomHistoryGeneral.innerHTML += html;
            break;

        case 'Gamming':
            roomHistoryGamming.innerHTML += html;
            break;
    
        case 'Music':
            roomHistoryMusic.innerHTML += html;
            break;
    
        case 'Ninjas':
            roomHistoryNinjas.innerHTML += html;
    }
    
}

btnSend.addEventListener('click', e => {
    e.preventDefault();
    sendMessage(userName, messageToSent.value, new Date());
    messageToSent.value = "";
});

btnUpdateName.addEventListener('click', e => {
    e.preventDefault();
    userName = newName.value;
    newName.value="";
});
