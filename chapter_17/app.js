const channelSelector = document.querySelectorAll('.channel-selector');
const roomHistory = document.querySelectorAll('.room-history')
const messageToSent = document.querySelector('.message-to-sent');
const newName = document.querySelector('.new-name');
const btnSend = document.querySelector('.btn-send');
const btnUpdateName = document.querySelector('.btn-update-name');
const updateForm = document.querySelector('.update-form');
const sendForm = document.querySelector('.send-form');
const now = new Date();

let userName = 'Anon';
let currentChannel = 'General';

channelSelector.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault();
        currentChannel = button.getAttribute('button-id');
        roomHistory.forEach(room => {
            room.getAttribute('room-id') === currentChannel ?
                room.classList.remove("hide") : room.classList.add("hide");
        })
    });
});

const updateHistory = (message, id) => {
    let time = message.timeStamp.toDate();
    let html = `
    <li class="list-group-item" data-id="${id}">
    <div><strong>${message.userName}</strong>: ${message.message}</div>
    <div class="timestamp">${time}</div>
    </li>
    `
    roomHistory.forEach(room => {
        if(room.getAttribute('room-id') == currentChannel) {
            room.innerHTML += html;
        }
    });
    
}
const deleteMessage = (id) => {
    const messages = document.querySelectorAll('li');
    messages.forEach(message => {
        if(message.getAttribute('data-id') === id){
            message.remove();
        }
    });
};

// need to review all channels
roomHistory.forEach(room => {
    let temporaryRoom = currentChannel;
    db.collection(room.getAttribute('room-id'))
    .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
            const doc = change.doc;
            if(change.type ==='added'){
                currentChannel = room.getAttribute('room-id');
                updateHistory(doc.data(), doc.id);
            } else if (change.type === 'removed'){
                deleteMessage(doc.id);
            }
        });
    currentChannel = temporaryRoom;
    });
});

const sendMessage = () => {
    const message = {
        userName: userName, 
        message: sendForm.message.value,
        timeStamp: firebase.firestore.Timestamp.fromDate(now)
    };
    sendForm.reset();
    db.collection(currentChannel).add(message).then(() => {
    }).catch(err => {
        console.log(err)
    });
}

btnSend.addEventListener('click', e => {
    e.preventDefault();
    sendMessage();
});

sendForm.addEventListener('submit', e=> {
    e.preventDefault();
    sendMessage();
})

const UpdateName = () => {
    userName = updateForm.username.value;
    updateForm.reset();
}

btnUpdateName.addEventListener('click', e => {
    e.preventDefault();
    UpdateName();
    
});

updateForm.addEventListener('submit', e => {
    e.preventDefault();
    UpdateName();
});