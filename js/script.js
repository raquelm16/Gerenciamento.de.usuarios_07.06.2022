let usuarios = []

const addUsuario = () => {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let confirmar = document.getElementById('confirmar').value
    let divErro = document.querySelector('.div-erro')
    let divCerto = document.querySelector('.div-certo')
    
    if(nome == "" || email == "" || senha == "" || confirmar == "" ){
        divErro.style.display = 'block'
        divCerto.style.display = 'none'
    }else{
        divErro.style.display = 'none'
        divCerto.style.display = 'block'
    }

    if(senha != confirmar || senha == ''){
        divCerto.style.display = 'none'
        divErro.style.display = 'block'
    }else{
        divCerto.style.display = 'block'
        divErro.style.display = 'none'
    }

    if(localStorage.getItem('usuarios') != null){
        usuarios = JSON.parse(localStorage.getItem('usuarios'))
    }

    
    usuarios.push([nome, email, senha])
    localStorage.setItem('usuarios', JSON.stringify(usuarios))//Ta convertendo pra JSON.
    document.getElementById('nome').value = ""
    document.getElementById('email').value = ""
    document.getElementById('senha').value = ""
    document.getElementById('confirmar').value = ""
}

const listUsuarios = () => {
    
    let tbody = document.getElementById('table-linha')
    if(localStorage.getItem('usuarios') != null){
        usuarios = JSON.parse(localStorage.getItem('usuarios'))
        usuarios.forEach((usuario, i) => {//index.
            tbody.innerHTML += "<tr> <td>"+usuario[0]+"</td> <td>"+usuario[1]+"</td> <td><button id='deletar' onclick='delUsuario(" + i +")'> \u{1F5D1} </button></td> </tr>"
        });
    }else {
        tbody.innerHTML += "<tr> <td>Vazio</td> <td>Vazio</td> <td>Deletar</td> </tr>"
    }
  
}   


//JEITO 01
const delUsuario = (index) =>{
    usuarios = JSON.parse(localStorage.getItem('usuarios'))
    let auxUsuarios = usuarios.filter((v, i) => i != index)
    localStorage.setItem('usuarios', JSON.stringify(auxUsuarios))
    document.location.reload(true)
}


//JEITO 02
//function delUsuario(index){

 //   console.log(index);
  //  console.table(usuarios.filter(i => {
  //      console.log(i)
  //      return i != index
  //  }))

//}  
  

const logUsuario = () => {
    let lemail = document.getElementById('lemail').value
    let lsenha = document.getElementById('lsenha').value
    let divlErro = document.querySelector('.div-lerro')
    let divlCerto = document.querySelector('.div-lcerto')
    
    if(lemail == "" || lsenha == ""){
        divlErro.style.display = 'block'
        divlCerto.style.display = 'none'
    }else{
        divlErro.style.display = 'none'
        divlCerto.style.display = 'block'
    }
}