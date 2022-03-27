// create 16x16 grid of divs
function createGrid () {
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
    // column.textContent = i;
    row.appendChild(column);
  }
}

// clear boxes back to white background
function clear () {
  const box = document.querySelectorAll('.canvasBox');
  box.forEach(item => { item.style.backgroundColor = 'white';});
}

// create grid
createGrid();

// turn boxes purple when mouse moves over them
const box = document.querySelectorAll('.canvasBox');
box.forEach(item => 
  { item.addEventListener('mouseenter', function( event ) {
    event.target.style.backgroundColor = 'purple';
  }, false); 
});

const button = document.getElementById('button')
button.addEventListener('onclick', clear);