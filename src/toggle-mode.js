let darkMode = true

const btnToggleMode = document.getElementById('toggle-mode')

btnToggleMode.addEventListener('click', (ev) => {
  document.documentElement.classList.toggle('light')

  const mode = darkMode? 'dark' : 'light'

  ev.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`

  darkMode = !darkMode
})