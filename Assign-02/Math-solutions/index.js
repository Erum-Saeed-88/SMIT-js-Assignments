function showCounting(direction) {
      var output = document.getElementById('output');
      output.innerHTML = '';
      var result = '';

      if (direction === 'forward') {
        for (var i = 1; i <= 100; i++) {
          result += i + ' ';
        }
        output.innerHTML = '<h4>📈 Forward Counting:</h4><p>' + result + '</p>';
      } else if (direction === 'backward') {
        for (var i = 100; i >= 1; i--) {
          result += i + ' ';
        }
        output.innerHTML = '<h4>📉 Backward Counting:</h4><p>' + result + '</p>';
      }
    }

    function askTable() {
      var num = prompt("Enter a number to get its multiplication table (1-20):");
      var output = document.getElementById('output');
      output.innerHTML = '';

      if (num !== null) {
        num = parseInt(num);
        if (isNaN(num) || num < 1 || num > 20) {
          output.innerHTML = '<p class="text-danger">Please enter a valid number between 1 and 20.</p>';
        } else {
          var table = '';
          for (var i = 1; i <= 10; i++) {
            table += num + ' x ' + i + ' = ' + (num * i) + '<br>';
          }
          output.innerHTML = '<h4>✖️ Multiplication Table of ' + num + '</h4><p>' + table + '</p>';
        }
      }
    }