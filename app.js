

const barras = document.querySelectorAll(".barra");
const codeandos = document.querySelectorAll(".codeando")
const textoCodeandos = ["Matias Chanquia", 'Web Developer']

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        setInterval(() => {
            barras[0].classList.toggle("active");
        }, 500);
    }, 3000);
    
    setTimeout(() => {
        setInterval(() => {
            barras[1].classList.toggle("active");
        }, 500);
    }, 5600);

    for(let i = 0; i < textoCodeandos[0].length; i++) {
        setTimeout(() => {
            codeandos[0].textContent += textoCodeandos[0][i];
        }, i * 200);
    }

    setTimeout(() => {
        for(let i = 0; i < textoCodeandos[1].length; i++) {
            setTimeout(() => {
                codeandos[1].textContent += textoCodeandos[1][i];
            }, i * 200);
        }
    }, 3000);

});