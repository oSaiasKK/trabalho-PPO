function cadastrar() {
    let users = JSON.parse(localStorage.getItem("usuarios")) || {};
    let novoUsuario = document.getElementById("novoUsuario").value;
    let novaSenha = document.getElementById("novaSenha").value;

    if (novoUsuario !== '' && novaSenha !== '') {
        if (users.hasOwnProperty(novoUsuario)) {
            document.getElementById("mensagem").innerText = "Este nome de usuário já existe. Escolha outro.";
        } else {
            users[novoUsuario] = novaSenha;
            localStorage.setItem("usuarios", JSON.stringify(users));
            document.getElementById("mensagem").innerText = "Usuário cadastrado com sucesso.";
        }
    } else {
        document.getElementById("mensagem").innerText = "Por favor, preencha todos os campos.";
    }
}


function login() {
    let users = JSON.parse(localStorage.getItem("usuarios")) || {};
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usuario != '' && novaSenha != ''){
       if (users[usuario] === senha) {
            document.getElementById("mensagem").innerText = `Seja bem vindo ${usuario}! Aqui você encontrará uma seleção de exercícios de mobilidade simples e eficazes, pensados para serem feitos no conforto da sua casa. Portanto, escolha uma rotina e comece a se cuidar! Seu corpo agradece.`;

            const loginDiv = document.getElementById("login");
            const footer = document.getElementsByClassName("footer");
            
            loginDiv.style.opacity = 0;
            setTimeout(() => {
                loginDiv.style.display = "none";
            }, 500);

            if (footer.length > 0) {
                footer[0].style.display = "flex"; 
                setTimeout(() => {
                    footer[0].style.opacity = 1;
                }, 10);
            }
        } else {
            document.getElementById("mensagem").innerText = "Usuário ou senha incorretos.";
        }
    } else {
        document.getElementById("mensagem").innerText = "Por favor preencha todos os campos.";
    }
}

function mostrarTreinoA() {
    document.getElementById('treinoA').style.display = 'block';
    document.getElementById('treinoB').style.display = 'none';
    document.getElementById('treinoC').style.display = 'none';
    let main = document.querySelector("main");
    
    main.style.opacity = 0;
    setTimeout(() => {
        main.style.display = "none";
    }, 500);
}

function mostrarTreinoB() {
    document.getElementById('treinoA').style.display = 'none';
    document.getElementById('treinoB').style.display = 'block';
    document.getElementById('treinoC').style.display = 'none';
    let main = document.querySelector("main");
    
    main.style.opacity = 0;
    setTimeout(() => {
        main.style.display = "none";
    }, 500);
}

function mostrarTreinoC() {
    document.getElementById('treinoA').style.display = 'none';
    document.getElementById('treinoB').style.display = 'none';
    document.getElementById('treinoC').style.display = 'block';
    let main = document.querySelector("main");
    
    main.style.opacity = 0;
    setTimeout(() => {
        main.style.display = "none";
    }, 500);
}