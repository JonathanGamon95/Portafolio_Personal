const BOTON_MENU_MOBILE = document.getElementById("boton_menu_mobile");
const BOTON_CERRAR_MENU_MOBILE = document.getElementById("boton_cerrar_menu");


//contenedores ventana modal
const div_body = document.getElementById("div_body");
const cont_ventana_modal_externo = document.getElementById("cont_ventana_modal_externo");

const abrirVenatanModal = () => {
    div_body.style.visibility = "visible"
    cont_ventana_modal_externo.style.transform = "translateY(-0%)"
}


const cerrarVentanModal = () => {
    cont_ventana_modal_externo.style.transform = "translateY(-100%)"
    div_body.style.visibility = "hidden"
}


BOTON_MENU_MOBILE.addEventListener("click", abrirVenatanModal)
BOTON_CERRAR_MENU_MOBILE.addEventListener("click", cerrarVentanModal)