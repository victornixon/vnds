function cadastrar () {
    alert ('botão clicado')
    }

    let nome = document.querySelector(#nome)
    let labelnome = document.querySelector(#labelnome)

    
    let usuario = document.querySelector(#usuario)
    let labelusuario = document.querySelector(#labelusuario)

    
    let senha = document.querySelector(#senha)
    let labelsenha = document.querySelector(#labelsenha)
   
    
    let confirmsenha = document.querySelector(#confirmsenha)
    let labelconfirmsenha = document.querySelector(#labelconfirmsenha)

    nome.addEventlistener('keyup', () => {
        if (nome.value.length <= 2) {
            labelnome.setAttribute('style', 'color: red')
        } else {

        }
    })