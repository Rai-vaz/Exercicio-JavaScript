'use strict'
const changeThemeBtn = document.querySelector("#change-theme");

function toggleTheme() {
    document.body.classList.toggle("dark");

}

function checkTheme() {
    if (localStorage.getItem('Dark')) {
        toggleTheme()
    }
}

checkTheme()

changeThemeBtn.addEventListener('change', () => {
    toggleTheme()
    localStorage.removeItem('Dark')
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('Dark', true)
    }
});

