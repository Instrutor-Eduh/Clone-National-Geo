export default function initToolTip(){
    const tagAncora = document.querySelectorAll('[data-toolTip]');

    tagAncora.forEach(itemAncora => {
        itemAncora.addEventListener('mouseenter', mostrarToolTip);
        itemAncora.addEventListener('mousemove',  moveToolTip);
        itemAncora.addEventListener('mouseleave', removerToolTip);
    })

    function mostrarToolTip(event){
        const elemento = event.currentTarget; // método que referencia o elemento que recebeu o evento
        const textoParaElemento = elemento.getAttribute('aria-label');

        // Validação caso o texto não apareça
        if(!textoParaElemento) return;

        // Criando elemento que vai mostrar a toolTip
        const toolTip = document.createElement("div");
        toolTip.className = "tool_tip";
        toolTip.innerText = textoParaElemento;

        document.body.appendChild(toolTip);
        elemento.varGuardar = toolTip;

    }

    function moveToolTip(event){
        const toolTip = event.currentTarget.varGuardar;
        //console.log(event);
        if(toolTip) {
            toolTip.style.top = `${event.pageY + 10}px`;
            toolTip.style.left = `${event.pageX + 10}px`;
        }
    }

    function  removerToolTip(event) {
        const toolTip = event.currentTarget.varGuardar;
        //console.log(event);
        if(toolTip) {
            toolTip.remove();
            delete event.currentTarget.varGuardar;
        }
    }
}