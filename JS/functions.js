//para secção de funcionarios
let=nome;
let=numero;
let=email;
let=tipo;
//
document.addEventListener("submit", function(evento) {
  evento.preventDefault();  

  let formulario=document.getElementById('formulario');

  let dados = new FormData(Formulario);

  let objeto = [];

  for(let key of dados.keys()){
      objeto[key] = dados.get(key);
  }

  console.log(objeto);

});
function funcionario(params) {
    const;
}
//para todo que é notificação
function notif(params) {
    Comment;
}
//para todo que tem que ser apagado
function eliminer(params) {
    const;
}
//para todo que tem que ser editado
function edtiar(params) {
    const;
}
//2.3 Arquivo script.js (comportamento dinâmico):
//javascript
//Copiar código
// Exemplo de script simples para adicionar uma funcionalidade básica
document.addEventListener('DOMContentLoaded', function() {
    console.log("Site de basquetebol carregado com sucesso!");
    
    // Exemplo: adicionar funcionalidade de rolagem suave
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
