const tbody = document.getElementById("tbody");

const getInscricoes = () => {
    fetch("http://localhost:3000/inscricoes").then(response => response.json()).then(data => {
        data.forEach(inscricao => {
            createTableRow(inscricao);
        });
    }).catch(error => {
        console.log(error);
        alert("Não foi possível receber a lista de inscrições.");
    });
}

const createTableRow = (data) => {
    let row = tbody.insertRow();

    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);

    cell0.innerHTML = data.nome;
    cell1.innerHTML = data.sobrenome;
    cell2.innerHTML = data.instituicao;
    cell3.innerHTML = data.periodo;
    cell4.innerHTML = data.matricula;
}