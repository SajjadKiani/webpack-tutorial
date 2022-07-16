import {sayHello} from './speak.js'

document.getElementById('counterBtn').onclick = () => {
    const counter = document.getElementById('counter')
    counter.textContent = parseInt( counter.textContent ) + 1
}

document.getElementById('sayhello').onclick = ( ) => {
    sayHello()
}