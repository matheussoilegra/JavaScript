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
    var doc = new jsPDF();
    doc.text(document.getElementById('name').value, 10, 10);
    doc.text(document.getElementById('age').value, 10, 20);
    doc.text(document.getElementById('retirementAge').value, 10, 30);
    // save the file
    doc.save('simulador.pdf');
  }
}
