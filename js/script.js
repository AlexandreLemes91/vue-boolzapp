dayjs.extend(dayjs_plugin_customParseFormat);

let now = dayjs().format('DD/MM/YYYY HH:mm:ss');
/* onsole.log(now); */

const app = new Vue({
    el: "#app",

    data: {
        yourPropNameHere: [ // Elenco contatti
        {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Luisa',
            avatar: '_4',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
        ],

        indexChat: 0,
        newMessage: "",
        newAnswer: "Ok!",
        search: "",
        hide: true,
    },

    methods: {
        /**
         * 
         * @param {number} index indice della chat corrente
         */
        showChat(index){                
            console.log(index); 
            this.indexChat = index;  
        },

        /* invio messaggi */
        sendMessage(){
            if(this.newMessage != ""){
                this.yourPropNameHere[this.indexChat].messages.push({
                    date: now,
                    message: this.newMessage,
                    status: 'sent'},);
                
                setTimeout(() =>{
                    this.yourPropNameHere[this.indexChat].messages.push({
                        date: now,
                        message: this.newAnswer,
                        status: 'received'},);
                },1000)
                }
                
            this.newMessage = "";
        },

        /* filter for search */
        searchFilter( contact ) {
            if( !contact.name.toLowerCase().includes(this.search) ){
                contact.visible = false;
            }else if(this.search == ""){
                contact.visible = true;
            }else{
                contact.visible = true;
            }
            return contact.visible;
        },

        /* ultimo accesso */
        lastAvatarAccess(index){
            const actualChat = this.yourPropNameHere[index].messages;
            let lastMessageTime = ""
            actualChat.forEach((e)=>{
                if( e.status == "received"){
                    lastMessageTime = e.date;
                }
                /* console.log(lastMessageTime); */
            })
            return lastMessageTime;
        },

        /* nascondi al click */
        hideElement(){
            this.hide = false;
            console.log(this.hide);
        }

        
    },

});