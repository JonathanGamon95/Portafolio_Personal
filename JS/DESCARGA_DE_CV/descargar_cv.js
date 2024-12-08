const BOTON_DESCARGA_CV = document.getElementById("boton_CV");
const BOTON_DESCARGAR_CV_MOBILE = document.getElementById("boton_CV_mobile");

const descarga = () => {
    const filePath = "./JS/DESCARGA_DE_CV/CV/CV_3.0.pdf" // Cambia esto a la ruta correcta
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'archivo.pdf'; // Nombre sugerido para el archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

BOTON_DESCARGA_CV.addEventListener("click", descarga);
BOTON_DESCARGAR_CV_MOBILE.addEventListener("click", descarga);