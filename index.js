// ==== FORMULÁRIO ====
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mensagem enviada! 😄");
  e.target.reset();
});

// ==== SCROLL SUAVE ====
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

// ==== SERVIÇOS ROTATIVOS COM IMAGEM ====
const servicos = [
  { nome: "Desenvolvimento Web", desc: "Sites rápidos e modernos.", img: "imgs/serviços/desenvolvimento_web.png" },
  { nome: "Aplicativos Mobile", desc: "Apps intuitivos e leves.", img: "imgs/serviços/aplicativos_mobile.png" },
  { nome: "Banco de Dados", desc: "Estruturas sólidas e seguras.", img: "imgs/serviços/banco_de_dados.png" },
  { nome: "Inteligência Artificial", desc: "Modelos inteligentes.", img: "imgs/serviços/IA.png" }
];

let s = 0;
function atualizarServico() {
  const img = document.getElementById("servicoImg");
  const nome = document.getElementById("servicoNome");
  const desc = document.getElementById("servicoDesc");

  img.classList.add("fade");
  nome.classList.add("fade");
  desc.classList.add("fade");

  setTimeout(() => {
    img.src = servicos[s].img;
    nome.textContent = servicos[s].nome;
    desc.textContent = servicos[s].desc;

    img.classList.remove("fade");
    nome.classList.remove("fade");
    desc.classList.remove("fade");

    s = (s + 1) % servicos.length;
  }, 400);
}

atualizarServico();
setInterval(atualizarServico, 3000);

// ==== TECNOLOGIAS ROTATIVAS COM IMAGEM ====
const tecnologias = [
  { nome: "HTML & CSS", desc: "Estrutura e design bonito.", img: "imgs/tecnologias/html_e_css.png" },
  { nome: "JavaScript", desc: "Interatividade e lógica.", img: "imgs/tecnologias/javascript.png" },
  { nome: "Python", desc: "Back-end e IA avançada.", img: "imgs/tecnologias/Python.png" },
  { nome: "MySQL", desc: "Banco de dados seguro.", img: "imgs/tecnologias/mysql.png" },
  { nome: "PHP", desc: "Back-end simples e eficiente.", img: "imgs/tecnologias/php.png" }
];

let t = 0;
function atualizarTech() {
  const img = document.getElementById("techImg");
  const nome = document.getElementById("techNome");
  const desc = document.getElementById("techDesc");

  img.classList.add("fade");
  nome.classList.add("fade");
  desc.classList.add("fade");

  setTimeout(() => {
    img.src = tecnologias[t].img;
    nome.textContent = tecnologias[t].nome;
    desc.textContent = tecnologias[t].desc;

    img.classList.remove("fade");
    nome.classList.remove("fade");
    desc.classList.remove("fade");

    t = (t + 1) % tecnologias.length;
  }, 400);
}

atualizarTech();
setInterval(atualizarTech, 3000);
