document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault(); 
    alert("Mensaggem enviada! Responderemos assim que possivel. 😄");
    e.target.reset();
});

document.querySelectorAll("a[href^='#']").forEach(link => {
    link,addEventListener("click", function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute("href"));
        destino.scrollIntoView({ behavior: "smooth" });
    });
});