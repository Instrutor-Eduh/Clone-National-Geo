export default function initMenuMobile() {
    const buttonMobile = document.querySelector('[data-menu="mobile"]');
    const ulList = document.querySelector('[data-menu="list"]');

    buttonMobile.addEventListener('click', abrirMenuMobile);

    function abrirMenuMobile(){
        ulList.classList.toggle('ativo');
        buttonMobile.classList.toggle('ativo');
    }
}