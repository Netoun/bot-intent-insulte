import test from 'ava'
import fs from 'fs'
import { logic, getRandomInt } from '../src/logic'

test(t => {
    const response = logic({ message: { content: 'connard' } })
    t.true(!!response.message.content)
})


test(t => {
    const random = getRandomInt(0, 5)
    t.true(random >= 0 && random <= 5)
})