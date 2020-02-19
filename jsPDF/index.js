function createPDF() {
  // check if all the fields are entered
  if (
    document.getElementById('name').value == '' ||
    document.getElementById('age').value == '' ||
    document.getElementById('retirementAge').value == ''
  ) {
    alert(
      'Campo(s) não preenchido(s). Favor, preencher todos os campos do simulador'
    );
  } else {
    // create the jsPDF document
    const doc = new jsPDF();
    const imgForm =
      'data:image/jpeg;base64,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';

    doc.addImage(imgForm, 'JPEG', 73, 5, 64, 30);

    doc.text('Dados informados na simulação', 62, 40);
    doc.text(document.getElementById('nameLabel').innerText, 10, 50);
    doc.text(document.getElementById('name').value, 30, 50);
    doc.text(document.getElementById('ageLabel').innerText, 10, 60);
    doc.text(document.getElementById('age').value, 30, 60);
    doc.text(document.getElementById('retirementAgeLabel').innerText, 10, 70);
    doc.text(document.getElementById('retirementAge').value, 75, 70);
    // save the file
    doc.save('simulador.pdf');
  }
}
