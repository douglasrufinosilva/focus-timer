import { controls } from "./elements.js"
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from "./timer.js"
import state from "./state.js"

export function registerControls() {
  controls.addEventListener('click', (ev) => {
    const action = ev.target.dataset.action
    
    if(typeof actions[action] != 'function' ) {
      return
    }

    actions[action]()
  })
}

export function setMinutes() {
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ''
  })

  el.minutes.onkeydown = (ev) => /\d/.test(ev.key)

  el.minutes.addEventListener('blur', (ev) => {
    let time = ev.currentTarget.textContent
    time = time > 60 ? 60 : time

    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute('contenteditable')
  })
}