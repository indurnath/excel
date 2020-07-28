var totalRows = 18;
var totalCols = 18;

function createSheet() {
  let sheet = document.getElementById('sheet')
  let tableEl = document.querySelector("table");
  // createTableRows(rows, cols);
    for (let i=1; i <= totalRows; i++) {
      rowEl = tableEl.insertRow();
      let count = 0;
      while(count < totalCols) {
        rowEl.insertCell().textContent = "" ;
        count++;
      }
    }
    
    sheet.appendChild(tableEl);
    if(tableEl) {
      let td = document.getElementsByTagName('td')
      for(let i=0; i<td.length; i++) {
        td[i].addEventListener('click', setCellEditable);
        td[i].addEventListener('blur', removeCellEditable)
      }
      tableEl.removeEventListener("click", setCellEditable)
    }

}
// function createTableRows(rows,cols) {

// }

function setCellEditable(e){
  e.target.setAttribute('contenteditable', true)
}

function removeCellEditable(e){
  console.log("clicked td");
  e.target.removeAttribute('contenteditable')
}


function addNewRow() {
  console.log("new row add");
  let tableEL = document.querySelector('table');
  let newCell = tableEL.insertRow(totalRows);
  let count =0;
  while(count < totalCols) {
    newCell.insertCell().textContent = "" ;
    count++;
  }
  totalRows ++
}

function removeRow() {
  let tableEL = document.querySelector('table');
  tableEL.deleteRow(totalRows-1);
  totalRows --;
}

function addNewColumn() {
  let tableRows = document.querySelectorAll('tr');
  for(let i=0; i<tableRows.length; i++){
    tableRows[i].insertCell().textContent = "" ;
  }
  totalCols ++
}

function removeColumn() {
  let tableRows = document.querySelectorAll('tr');
  for(let i=0; i<tableRows.length; i++){
    tableRows[i].deleteCell(totalCols-1)
  }
  totalCols --;
}

