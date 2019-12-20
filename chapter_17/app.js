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

const now = new Date();

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

const sendMessage = (message, id) => {
    let time = message.timeStamp.toDate();
    let html = `
    <li class="list-group-item" data-id"=${id}">
    <div><strong>${message.userName}</strong>: ${message.message}</div>
    <div class="timestamp">${time}</div>
    </li>
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
const deleteMessage = (id) => {
    const messages = document.querySelectorAll('li');
    console.log(messages);
    messages.forEach(message => {
        if(messages.getAttribute('data-id') === id){
            messages.remove();
        }
    });
};

db.collection(currentChannel).onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if(change.type ==='added'){
            sendMessage(doc.data(), doc.id);
        } else if (change.type === 'removed'){
            deleteMessage(doc.id);
        } 
        
    })
})

btnSend.addEventListener('click', e => {
    e.preventDefault();
    const message = {
        userName: userName, 
        message: messageToSent.value,
        timeStamp: firebase.firestore.Timestamp.fromDate(now)
    };

    db.collection(currentChannel).add(message).then(() => {
        console.log('message added')
        console.log(currentChannel);
    }).catch(err => {
        console.log(err)
    });

});

btnUpdateName.addEventListener('click', e => {
    e.preventDefault();
    userName = newName.value;
    newName.value="";
});
