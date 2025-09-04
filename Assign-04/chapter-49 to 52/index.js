// Q1

var form = document.getElementById('signupForm');
    var output = document.getElementById('output');

    form.addEventListener('submit', function(e) {
      e.preventDefault(); // stop form reload
      
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;

      // Show form data
      output.style.display = "block";
      output.innerHTML = "<h3>Submitted Data:</h3>" +
        "<p><strong>Name:</strong> " + name + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Password:</strong> " + password + "</p>";
    });

//Q2

var btn = document.getElementById("toggleBtn");
    var extra = document.querySelector(".extra");

    btn.addEventListener("click", function() {
      if (extra.style.display === "none" || extra.style.display === "") {
        extra.style.display = "inline";
        btn.innerHTML = "Read less";
      } else {
        extra.style.display = "none";
        btn.innerHTML = "Read more";
      }
    });

//Q3

var studentForm = document.getElementById("studentForm");
    var editForm = document.getElementById("editForm");
    var studentTable = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    var editingRow = null;

    // Add student
    studentForm.addEventListener("submit", function(e) {
      e.preventDefault();

      var name = document.getElementById("name").value;
      var age = document.getElementById("age").value;
      var className = document.getElementById("class").value;

      var newRow = studentTable.insertRow();

      newRow.insertCell(0).innerHTML = name;
      newRow.insertCell(1).innerHTML = age;
      newRow.insertCell(2).innerHTML = className;

      var actions = newRow.insertCell(3);
      actions.innerHTML = '<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>';

      studentForm.reset();
    });

    // Delete function
    function deleteRow(btn) {
      var row = btn.parentNode.parentNode;
      studentTable.deleteRow(row.rowIndex - 1);
    }

    // Edit function
    function editRow(btn) {
      editingRow = btn.parentNode.parentNode;

      document.getElementById("editName").value = editingRow.cells[0].innerHTML;
      document.getElementById("editAge").value = editingRow.cells[1].innerHTML;
      document.getElementById("editClass").value = editingRow.cells[2].innerHTML;

      editForm.classList.remove("hidden");
    }

    // Update function
    editForm.addEventListener("submit", function(e) {
      e.preventDefault();

      editingRow.cells[0].innerHTML = document.getElementById("editName").value;
      editingRow.cells[1].innerHTML = document.getElementById("editAge").value;
      editingRow.cells[2].innerHTML = document.getElementById("editClass").value;

      editForm.classList.add("hidden");
    });