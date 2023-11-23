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
// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
let parseInitEmpArray = JSON.parse(localStorage.getItem('addingEmpArray')) ;
//let parseInitEmpArray = JSON.parse(localStorage.getItem('parseInitEmpArray')) ;
console.log(parseInitEmpArray)
if (parseInitEmpArray == null) {
    console.log("Storage Object is Empty")
    initialEmployeeGrid(addingEmpArray); 
    }
    else {
        console.log("Storage Object with existing data")
        initialEmployeeGrid(parseInitEmpArray);    
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
    addingEmpArray.push([id, name, extension, email, department])
    //newAddingEmpArray.push([id, name, extension, email, department])
    console.log("Show AddinEmp Array", addingEmpArray)
    localStorage.setItem ('addingEmpArray', JSON.stringify(addingEmpArray))
    let parseAddingEmpArray = JSON.parse(localStorage.getItem('addingEmpArray')) ;
    console.log("parseAddingEmp Array", parseAddingEmpArray)
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    //let newEmpArray = newaddingEmpArray.concat(parseAddingEmpArray)
    //console.log("Show Concat Array", newEmpArray)
    // BUILD THE GRID
    //buildGrid(newEmpArray)
    buildGrid(parseAddingEmpArray)
    // RESET THE FORM
    //form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID

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
    console.log(" Emp Count", empCount1)
    empCount.innerHTML = `(${empCount1.toFixed()})`
    // STORE THE ARRAY IN STORAGE
};
