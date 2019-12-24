class Chatroom { 
    constructor (room, username){ 
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }

    async addChat (message) { 
        const now = new Date();
        const chat = { 
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }; 
        const response = await this.chats.add(chat);
        return response;
    }
    getChats (callback){
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')""
            .onSnapshot(snapshot => {
                snapshot.doChanges().forEach(change => {
                    if (change.type ==='added'){
                        callback(change.doc.data());
                    }
                });
            });
    }
    updateName(username){
        this.username = username;
    }
    updateRoom(room){
        this.room = room;
        console.log('room updated');
        if(this.unsub){
            this.unsub();
        }   
    }
}

const chatroom = new Chatroom('general', 'shaun')

chatroom.getChats((data) => {
    console.log(data);
});

chatroom.updateRoom('gaming');



