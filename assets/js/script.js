window.addEventListener('scroll', onScroll); 
onScroll();/* Transferindo a função que está introduzida no body neste EventListerner, para que não ocorra o erro 
quando ele estiver em um ponto de referência muito a frente */
/* Adicione o evento 'scroll' executando o listenear 'onScroll' */

function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll();
    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
    /* 
    1º ETAPA: Descobrir o tamanho da viewport que você está com o InnerHeight, para assim fazer a lógica do scroll
    2º ETAPA: Dividir essa altura por 2
    3º ETAPA: Somar o resultado da divisão com a localização do Scroll */
    //Linha alvo
    const targetLine = scrollY + innerHeight/2;
    //Verificar se a seção passou da linha 
    //Quais dados vou precisar?

    // O topo da seção 
    const sectionTop = section.offsetTop; //Pega o valor do topo do elemento referenciado
    
    //A altura da sessão 
    const sectionHeight = section.offsetHeight //Pega o valor da altura do elemento referenciado

    // O topo da sessão chegou ou ultrapassou a linha alvo ?
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    //Informações dos dados e da lógica
    console.log('O topo da seção chegou ou passou da linha, ', sectionTopReachOrPassedTargetLine);

    //Verificar se a base está abaixo da linha imaginaria 
    //Quais dados vou precsisar?
    //A seção termina onde? O somatório do topo com o tamanho do elemento resulta no topo da próxima seção
    const sectionEndsAt =  sectionTop + sectionHeight
    
    //O final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;
    console.log('O final da seção chegou ou passou da linha? ', sectionEndPassedTargetLine);

    // Limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;
    /* Colocar variavel em uma string console.log(`Estou na seção ${}`) */
    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`) //Pegando o elemento que contém (*) o href tal */
    menuElement.classList.remove('active');
    if (sectionBoundaries) {
        menuElement.classList.add('active');
    }

}

function showNavOnScroll() {
    //Lista de classes do navigation com classList 
    if (scrollY > 0) {
        navigation.classList.add("scroll");
    } else {
        navigation.classList.remove("scroll");
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 750) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
}

function openMenu() {
    //corpo.classList.add("menu-expanded");
    document.body.classList.add("menu-expanded");
}

function closeMenu() {
    document.body.classList.remove("menu-expanded");
}




















//Biblioteca ScrollReveal
ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 800
}).reveal(`
#home, 
#home header,
#home .content, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`); //Use (``) para fazer quebras de linhas em uma sequencia de caracteres





/*  Objetos: Composto por propriedades(atributos -> nome, idade etc) e Funcionalidades ( métodos -> function {})
EX: nomeObjeto = {prop: 'value' }
Atribuir obejto à uma variável (let variavel = 1)
Função que retorna objeto (return)
String com Template Literals ``
Biblioteca de terceiros */

/* Exemplo do que acontece na função ScrollReveal
function ScrollReveal() {
    var opcoes = {
        somar: function(num1,num2){
            return num1+num2;
        }
    }

    return opcoes;
} 

calculadora().somar(1+2);


let documento = {
    corpoo: a = {
        nome: 'Henrriky'
    }
} */
