<!DOCTYPE html>
<html>
<head>
  <title>Employee Grid</title>
</head>
<body>
  <table id="employeeGrid">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Extension</th>
        <th>Email</th>
        <th>Department</th>
      </tr>
    </thead>
    <tbody id="employeeData">
      <!-- Employee data will be populated here -->
    </tbody>
  </table>

  <script>
    window.onload = function() {
      // Initial array of employees
      let initialEmployees = [
        [50001, 'Melissa', 1501, 'melissa@aol.com', 'Administrative'],
        [50002, 'Pedro', 1502, 'pedro@aol.com', 'Engineering'],
        [50003, 'Jordan', 1503, 'jordan@aol.com', 'Sales'],
        [50004, 'Mason', 1504, 'mason@aol.com', 'Executive'],
        [50005, 'Carolina', 1505, 'carolina@aol.com', 'Marketing']
      ];

      // Get the tbody element to populate employee data
      const employeeData = document.getElementById('employeeData');

      // Function to populate the employee grid
      function populateEmployeeGrid(employees) {
        employees.forEach(employee => {
          const [id, name, extension, email, department] = employee;
          const row = document.createElement('tr');
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

      // Populate the grid with initial employee data
      populateEmployeeGrid(initialEmployees);
    };
  </script>
</body>
</html>





// Check if the storage object exists when the page loads
window.onload = function() {
    let storedEmployees = localStorage.getItem('employees');
  
    if (storedEmployees) {
      // If the storage object exists, parse it into an array
      employeeList = JSON.parse(storedEmployees);
      console.log('Employee list loaded from storage:', employeeList);
    } else {
      // If the storage object doesn't exist, use the hardcoded array
      console.log('Employee list not found in storage. Using default list.');
    }
  };
  
  // Default hardcoded array of employees
  let employeeList = [
    [50001, 'Melissa', 1501, 'melissa@aol.com', 'Administrative'],
    [50002, 'Pedro', 1502, 'pedro@aol.com', 'Engineering'],
    [50003, 'Jordan', 1503, 'jordan@aol.com', 'Sales'],
    [50004, 'Mason', 1504, 'mason@aol.com', 'Executive'],
    [50005, 'Carolina', 1505, 'carolina@aol.com', 'Marketing']
  ];
  
  // Sample usage: Set employeeList into localStorage
  // You can use this to save the modified employeeList back to localStorage
  // localStorage.setItem('employees', JSON.stringify(employeeList));

<!DOCTYPE html>
<html>
<head>
  <title>Dynamic Table</title>
</head>
<body>
  <table id="myTable">
    <tbody id="tableBody">
      <!-- Table body will be constructed dynamically -->
    </tbody>
  </table>

  <script>
    // Define data for the table
    const tableData = [
      { name: 'John', age: 25, city: 'New York' },
      { name: 'Alice', age: 30, city: 'London' },
      { name: 'Bob', age: 22, city: 'Paris' }
    ];

    // Get the tbody element as a hook
    const tbody = document.getElementById('tableBody');

    // Construct table rows and cells dynamically
    let tableContent = '';
    tableData.forEach(rowData => {
      tableContent += `
        <tr>
          <td>${rowData.name}</td>
          <td>${rowData.age}</td>
          <td>${rowData.city}</td>
        </tr>
      `;
    });

    // Set the innerHTML of tbody to the dynamically constructed content
    tbody.innerHTML = tableContent;
  </script>
</body>
</html>