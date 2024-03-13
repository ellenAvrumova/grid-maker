// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

// Add a row
function addR() {
    //alert("Clicked Add Row"); // Replace this line with your code.

    //Create new row
    let tr = document.createElement('tr');

    //Select the table
    var table = document.getElementById("grid");

    //If no rows are present add a new row with one column
    if (table.rows.length === 0) {
        var td = document.createElement('td');
        tr.appendChild(td);
        td.onclick = function () {
            alert('Clicked a table cell');
        };
        numCols++;
    }
    //If rows are present, create cells equal to number of columns in first
    else {
        var cellCount = table.rows[0].childElementCount;
        for (let i = 0; i < cellCount; i++) {
            var td = document.createElement('td');
            tr.appendChild(td);
            td.onclick = function () {
                alert('Clicked a table cell');
            };
        }
    }
    
    //Add the new row to the table
    document.querySelector('table').appendChild(tr);
    numRows++;
}

// Add a column
function addC() {
    //alert("Clicked Add Col"); // Replace this line with your code.

    //Select the table
    var table = document.getElementById("grid");

    //If there are no rows add new row and coll to the table
    if (table.rows.length === 0) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        tr.appendChild(td);
        table.appendChild(tr);
        td.onclick = function () {
            alert('Clicked a table cell');
        };
        numRows++;
    }
    //If there are rows add a new column to each row
    else {
        for (var i = 0; i < table.rows.length; i++) {
            // Create a new td element
            var newCell = document.createElement("td");
            // Append the new td element to the current row
            table.rows[i].appendChild(newCell);
            table.rows[i].onclick = function () {
                alert('Clicked a table cell');
            };
        }
    }
    numCols++;
}

// Remove a row
function removeR() {
    // if there are rows existing, or "no rows" but 1 column, remove the row
    if(numRows > 0 || numCols == 1) {
        let grid = document.getElementById("grid");
        let lastRow = grid.lastElementChild;
        grid.removeChild(lastRow);

        numRows--;
    }
    // if there are no more rows left, then there are no more columns
    if(numRows <= 0) {
        numCols = 0;
    }
}

// Remove a column
function removeC() {
    // if there are columns existing, or "no columns" but 1 row, remove the column
    if(numCols > 0 || numRows == 1) {
        let eachRow = document.getElementById("grid").children;
        for(let i = 0; i < eachRow.length; i++) {
            eachRow[i].lastElementChild.remove();
        }

        numCols--;
    }
    // if there are no more columns left, then there are no more rows
    if(numCols <= 0) {
        numRows = 0;
        let e = document.querySelector("table");
        //e.firstElementChild can be used. 
        let child = e.lastElementChild;
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
    }
}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU() {
    let rows = document.getElementById("grid").children; 

    // loop through all the rows 
    for (let i = 0; i < rows.length; i++){ 
        let cols = rows[i].children;
        
    //loop through all the cols of each row
        for (let j = 0; j < rows[i].childElementCount; j++){
            let bgcolor = cols[j].style.backgroundColor;
            if (bgcolor == ""){ 
                cols[j].style.backgroundColor = colorSelected;
            }
            
        } 
    }

}

// Fill all cells
function fillAll() {
    let rows = document.getElementById("grid").children; 
     // loop through all the rows 
    for (let i = 0; i < rows.length; i++){ 
        let cols = rows[i].children;
        
    //loop through all the cols of each row
        for (let j = 0; j < rows[i].childElementCount; j++){
            cols[j].style.backgroundColor = colorSelected;
        } 
    }
 
 }

// Clear all cells
function clearAll() {
    alert("Clicked Clear All"); // Replace this line with your code.
}