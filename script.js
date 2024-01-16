const botonMenu = document.getElementById("menu-boton");
const menuCabecera = document.querySelector(".navegacion");
botonMenu.addEventListener("click", ()=>{

    menuCabecera.classList.toggle("navegacion--visible");
    
});