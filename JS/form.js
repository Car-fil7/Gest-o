// Seleciona o formulário e a tabela
const form = document.getElementById('formDados');
const tabela = document.getElementById('tabelaDados').querySelector('tbody');
 
// Adiciona um evento de submit ao formulário
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o recarregamento da página

    // Captura os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const email = document.getElementById('email').value;

    // Cria uma nova linha e células para a tabela
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${idade}</td>
        <td>${email}</td>
    `;

    // Adiciona a nova linha à tabela
    tabela.appendChild(novaLinha);

    // Limpa o formulário após o envio
    form.reset();
});