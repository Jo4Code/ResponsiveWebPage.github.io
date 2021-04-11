const  togglebtn = document.getElementsByClassName('togglebtn')[0]
const navlinks = document.getElementsByClassName('nav-links')[0]

togglebtn.addEventListener('click', () => {
    navlinks.classlist.togglebtn('active')
})