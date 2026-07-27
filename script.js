document.addEventListener("DOMContentLoaded", () => {
    const textoIntro = document.getElementById("textoIntro");
    
    if (textoIntro) {
        setTimeout(() => {
            textoIntro.classList.add("visivel");
        }, 300);
    }
});