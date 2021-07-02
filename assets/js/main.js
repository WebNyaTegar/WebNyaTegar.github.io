// ============ SHOW NAVBAR ============
const showNav = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId)
  const nav = document.getElementById(navId)

  if (toggleId && navId) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
      toggle.classList.toggle('bx-x')
    })
  }
}

showNav('header-toggle', 'navbar')

const linkColor = document.querySelectorAll('.nav__link')

function colorLink() {
  linkColor.forEach(e => e.classList.remove('.active'))
  this.classList.add('.active')
}

linkColor.forEach(e => e.addEventListener('click', colorLink))