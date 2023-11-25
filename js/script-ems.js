// CREATE AN ARRAY OF EMPLOYEES
let addingEmpArray = [
    [50001 , "Melissa" , 1501, "melissa@aol.com" , "Administrative"],
    [50002 , "Pedro" , 1502, "pedro@aol.com" , "Engineering"],
    [50003 , "Jordan" , 1503, "jordan@aol.com" , "Sales"],
    [50004 , "Mason" , 1504, "mason@aol.com" , "Executive"],
    [50005 , "Carolina" , 1505, "carolina@aol.com" , "Marketing"]
]

// GET DOM ELEMENTS
const employeeData = document.getElementById('empTable');
let empCount1
let newEmpArray =[]
let parseInitEmpArray
// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
parseInitEmpArray = JSON.parse(localStorage.getItem('localstorageArray')) ;
console.log("parseInitEmpArray Results",parseInitEmpArray)
if (parseInitEmpArray == null || parseInitEmpArray == 0) {
    console.log("Storage Object is Empty")
    initialEmployeeGrid(addingEmpArray);
    newEmpArray = addingEmpArray
    console.log('show newEmpArray', newEmpArray)
    }
    else {
        console.log("Storage Object with existing data")
        initialEmployeeGrid(parseInitEmpArray);
        newEmpArray = parseInitEmpArray    
    }

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
function initialEmployeeGrid(employees) {
   employees.forEach(employee => {
     let [id, name, extension, email, department] = employee;
     let row = document.createElement('tr');
     row.innerHTML = `
       <td>${id}</td>
       <td>${name}</td>
       <td>${extension}</td>
       <td>${email}</td>
       <td>${department}</td>
     `;
     employeeData.appendChild(row);
   });
   
}

// ADD EMPLOYEE
let form = document.getElementById('addForm')
//let addingEmpArray = []
let newAddingEmpArray = []
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value
    let name = document.getElementById('name').value
    let extension = document.getElementById('extension').value
    let email = document.getElementById('email').value
    let department = document.getElementById('department').value
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    newEmpArray.push([id, name, extension, email, department])
    console.log("Show newEmpArray", newEmpArray)
    localStorage.setItem ('localstorageArray', JSON.stringify(newEmpArray))
    //let AddingEmpArray = JSON.parse(localStorage.getItem('newAddingEmpArray')) ;
    parseInitEmpArray = JSON.parse(localStorage.getItem('localstorageArray')) ;
    console.log("parseInitEmpArray Results",parseInitEmpArray)
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    // BUILD THE GRID
    buildGrid(parseInitEmpArray)
    // RESET THE FORM
    //form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    //let parseInitEmpArray = JSON.parse(localStorage.getItem('addingEmpArray')) ;
    console.log("Show parseInitEmp Array from delete", parseInitEmpArray)
    // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
    let clickedRow = e.target.closest('tr'); // Get the closest 'tr' element
     if (clickedRow) {
    let rowIndex = clickedRow.rowIndex;
    //let parseInitEmpArray = JSON.parse(localStorage.getItem('addingEmpArray')) ;
    console.log("Show parseInitEmp Array before delete", parseInitEmpArray)
    console.log('Clicked row index:', rowIndex);
    console.log("Show AddinEmp Array", addingEmpArray)
    // REMOVE EMPLOYEE FROM ARRAY
    // parseInitEmpArray.splice(rowIndex - 1,1,)
    // console.log("Show parseInitEmp Array", parseInitEmpArray)
    // localStorage.setItem ('localstorageArray', JSON.stringify(parseInitEmpArray))
    // parseInitEmpArray = JSON.parse(localStorage.getItem('localstorageArray')) ;
    // console.log("parseInitEmpArray Results",parseInitEmpArray)
    parseInitEmpArray.splice(rowIndex - 1,1,)
    console.log("Show parseInitEmp Array", newEmpArray)
    localStorage.setItem ('localstorageArray', JSON.stringify(parseInitEmpArray))
    parseInitEmpArray = JSON.parse(localStorage.getItem('localstorageArray')) ;
    console.log("parseInitEmpArray Results",parseInitEmpArray)
    
    
    // BUILD THE GRID
    buildGrid(parseInitEmpArray)
     }
});

// BUILD THE EMPLOYEES GRID
function buildGrid(employees) {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    while (empTable.rows.length > 1) {
      empTable.deleteRow(1);
    }
    // REBUILD THE TBODY FROM SCRATCH
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    employees.forEach(employee => {
        let [id, name, extension, email, department] = employee;
        let row = document.createElement('tr');
    // REBUILDING THE ROW STRUCTURE
        row.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${extension}</td>
        <td>${email}</td>
        <td>${department}</td>
        `;
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    employeeData.appendChild(row);
    });
    // UPDATE EMPLOYEE COUNT
    empCount1 = document.getElementById("empTable").rows.length - 1
    //console.log(" Emp Count", empCount1)
    empCount.innerHTML = `(${empCount1.toFixed()})`
    // STORE THE ARRAY IN STORAGE
};
