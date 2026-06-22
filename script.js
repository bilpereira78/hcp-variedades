// BOTÃO VOLTAR AO TOPO
const topo = document.getElementById("topo");
topo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// PESQUISA DE PRODUTOS
const pesquisa = document.querySelector(".pesquisa input");
pesquisa.addEventListener("keyup", () => {
    let valor = pesquisa.value.toLowerCase();
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        let texto = card.innerText.toLowerCase();
        if (texto.includes(valor)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// ANIMAÇÃO DE ENTRADA SCROLL
const elementos = document.querySelectorAll(".categoria");
function revelar() {
    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;
        if (posicao < window.innerHeight - 100) {
            el.classList.add("ativo");
        }
    });
}
window.addEventListener("scroll", revelar);
revelar();

// BANNER / SLIDER AUTOMÁTICO
const slides = document.querySelectorAll(".slide");
let slideAtual = 0;
setInterval(() => {
    slides[slideAtual].classList.remove("ativo");
    slideAtual++;
    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }
    slides[slideAtual].classList.add("ativo");
}, 4000);

// MENU MOBILE
const menuBtn = document.querySelector(".menu-mobile");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

// CARROSSEL AUTOMÁTICO DE PRODUTOS
const carrosseis = document.querySelectorAll(".cards");
carrosseis.forEach(carrossel => {
    setInterval(() => {
        carrossel.scrollLeft += 300;
        if (carrossel.scrollLeft >= carrossel.scrollWidth - carrossel.clientWidth) {
            carrossel.scrollLeft = 0;
        }
    }, 3000);
});

// TEMA CLARO E ESCURO
const temaBtn = document.getElementById("tema-btn");
temaBtn.addEventListener("click", () => {
    document.body.classList.toggle("claro");
});

// FAVORITAR PRODUTO
const favoritos = document.querySelectorAll(".favorito");
favoritos.forEach(item => {
    item.addEventListener("click", (e) => {
        e.stopPropagation();
        item.style.color = item.style.color === "red" ? "white" : "red";
    });
});

// CONTADOR DE VISITAS
let visitas = localStorage.getItem("visitas");
if (visitas == null) {
    visitas = 0;
}
visitas++;
localStorage.setItem("visitas", visitas);
document.querySelector("#contador span").innerHTML = visitas;

// CARREGAMENTO DA PÁGINA SUAVE
window.onload = () => {
    document.body.style.opacity = "1";
};
      
