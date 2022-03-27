// create 16x16 grid of divs
function createRows () {
  for (let i = 1; i <=16; i++) {
    const canvas = document.querySelector('.canvasContainer');
    const row = document.createElement('div');
    row.setAttribute('class', 'canvasRow');
    row.setAttribute('id', `row${i}`);
    // row.textContent = i;
    canvas.appendChild(row);
    createColumns(row);
  };
}

function createColumns (row) {
  for (let i = 1; i<=16; i++) {
    const column = document.createElement('div');
  
    column.setAttribute('class', 'canvasBox');
    column.textContent = i;
    row.appendChild(column);
  }
}

createRows();