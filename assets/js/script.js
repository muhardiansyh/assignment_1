
const btnMobile = document.querySelector('.btn-responsive')
const menuListMobile = document.querySelector('.menu-list');

btnMobile.addEventListener('click', () => {
    menuListMobile.classList.toggle('active');
})

document.addEventListener('click', (e) => {
    const target = e.target.classList.contains('btn-responsive')
    if(!target)menuListMobile.classList.remove('active')

})