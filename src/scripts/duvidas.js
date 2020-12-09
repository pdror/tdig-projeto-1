const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const duvidaObj = {};

    duvidaObj.email = document.getElementById("email").value;
    duvidaObj.fone = document.getElementById("fone").value;
    duvidaObj.duvida = document.getElementById("duvida").value;

    fetch("http://localhost:3000/duvidas", {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": duvidaObj.email,
      "fone": duvidaObj.fone,
      "duvida": duvidaObj.duvida
    })
  }).then(response => response.json()).then(data => {
    alert("Obrigado. Entraremos em contato assim que possível.")
    formulario.reset();
  }).catch(error => {
    console.log(error);
    alert("Erro ao enviar dúvida.");
  });
});