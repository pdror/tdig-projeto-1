const formulario = document.getElementById("formulario");

function getInstituicoes() {
  const instituicoes = document.getElementById("instituicao");
  fetch("http://localhost:3000/instituicoes").then(response => response.json()).then(data => {
    data.forEach(instituicao => {
      let option = document.createElement("option");
      option.value = instituicao.sigla;
      option.text = instituicao.nome;
      instituicoes.appendChild(option);
    });
  }).catch(error => {
    console.log(error);
    alert("Não foi possível receber a lista de instituições cadastradas.");
  });
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const alunoObj = {};

  alunoObj.nome = document.getElementById('fname').value;
  alunoObj.sobrenome = document.getElementById('lname').value;
  alunoObj.instituicao = document.getElementById('instituicao').value;
  alunoObj.periodo = document.getElementById('periodo').value;
  alunoObj.matricula = document.getElementById('matricula').value;
  alunoObj.email = document.getElementById('email').value;
  alunoObj.telefone = document.getElementById('fone').value;

  fetch("http://localhost:3000/inscricoes", {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "nome": alunoObj.nome,
      "sobrenome": alunoObj.sobrenome,
      "instituicao": alunoObj.instituicao,
      "periodo": alunoObj.periodo,
      "matricula": alunoObj.matricula,
      "email": alunoObj.email,
      "fone": alunoObj.fone
    })
  }).then(response => response.json()).then(data => {
    console.log(data);
  }).catch(error => {
    console.log(error);
    alert("Erro ao enviar inscrição");
  });

  document.getElementById("formulario").reset();
  showAlunoData(alunoObj);
});

function showAlunoData(alunoObj) {
  window.scrollTo(0, 0);

  document.getElementById("area-info").style.setProperty('display', 'block');

  document.getElementById('fnome-table').innerHTML = alunoObj.nome;
  document.getElementById('lnome-table').innerHTML = alunoObj.sobrenome;
  document.getElementById('instituicao-table').innerHTML = alunoObj.instituicao;
  document.getElementById('periodo-table').innerHTML = alunoObj.periodo;
  document.getElementById('matricula-table').innerHTML = alunoObj.matricula;
  document.getElementById('email-table').innerHTML = alunoObj.email;
  document.getElementById('telefone-table').innerHTML = alunoObj.telefone;
}

function enviaContato() {
  alert(`Dúvida enviado com sucesso.`);
}