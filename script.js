const pergunta = document.querySelectorAll('.pergunta');
const resposta = document.querySelectorAll('.resposta');
const ceta = document.querySelectorAll('.ceta');

for(let i = 0; i < pergunta.length; i++){
    pergunta[i].addEventListener('click',() =>{
        if(pergunta[i].classList.contains('fechar')){
            pergunta[i].classList.toggle('fechar')
            pergunta[i].style.fontWeight = "400";
            resposta[i].classList.toggle('ativar') 
            resposta[i].style.marginBottom = "0px"; 
            ceta[i].style.transform = "rotate(0deg)";
        }else{
            pergunta[i].classList.add('fechar')
            pergunta[i].style.fontWeight = "700";
            resposta[i].classList.add('ativar') 
            resposta[i].style.marginBottom = "10px";
            ceta[i].style.transform = "rotate(180deg)";
        }
    })
}
