export default function initModal(){
    const abrirModal = document.querySelector('[data-modal="abrirModal"]');
    const modal = document.querySelector('[data-modal="containerModal"]');
    const fecharModal = document.querySelector('[data-modal="fechaModal"]');

    abrirModal.addEventListener('click', modalAbrir);
    fecharModal.addEventListener('click', modalFechar);
    modal.addEventListener('click', fecharFora);

    function modalAbrir(event){
        event.preventDefault();
        modal.classList.add('ativo');
    }

    function modalFechar(){
        modal.classList.remove('ativo');
    }

    function fecharFora(event){
        // o target faz referencia ao próprio objeto que enviou o evento
        if(event.target === this){
            modalFechar(event)
        }
    }
}
