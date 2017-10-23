import { insultes }  from './insultes'

export const logic = ($message) => {


    const choix = getRandomInt(0, 2)
    const insultesTab = insultes.insulteSimpe
    const repartie = (() => {
        if (choix && $message.message.content.split(' ').length < 2) {
            return 'C toi le, la ou l\'' + $message.luis.query
        } else {
            return insultesTab[getRandomInt(0, insultesTab.length)]
        }
    })()

    const newMessage = Object.assign($message.message, { content: repartie })
    return Object.assign($message, { message: newMessage })
}

export const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}