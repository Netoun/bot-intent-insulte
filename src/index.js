import { connexion } from './rabbitConnexion'
import { assertQueue, sendTo } from './rabbitUtils'
let fs = require('fs');

const connexionEstablished = connexion()

assertQueue(connexionEstablished, ($message) => {

        let repartie
        let choix = getRandomInt(0, 2)
        console.log(choix)
        if(choix) {
                repartie  = "C toi le, la ou l'" + $message.luis.query
        }
        else {
                let obj = JSON.parse(fs.readFileSync('insultes.json', 'utf8'));
                let insultesTab = obj.insulteSimpe;
                repartie = insultesTab[getRandomInt(0, insultesTab.length)]
        }
        const newMessage = Object.assign($message.message, { content: repartie }) 
        sendTo(connexionEstablished, JSON.stringify(newMessage))
})



function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
}