var n = 5;
function fn1() {
  n = document.getElementById("var1").value;

  if (n.length === 0) {
    alert("Please enter a number");
  }
}

var i, j, k, l, m;
function pattern1() {
  document.write("Pattern 1 is : ");
  document.write('<br><br><br>')
  for (i = 0; i < n; i++) {
    for (j = n - i - 1; j > 0; j--) {
      document.write('&nbsp &nbsp');
    } document.write('*');
    for (k = 0; k < i; k++) {
      document.write(' A *');
    } document.write("<br>");
  }
}

function pattern2() {
  document.write("Pattern 2 is : ");
  document.write('<br><br><br>')
  for (i = 0; i < n - 1; i++) {
    for (j = n - i - 1; j > 0; j--) {
      document.write('&nbsp &nbsp');
    } document.write('&nbsp *');
    for (k = 0; k < i; k++) {
      document.write('&nbsp &nbsp');
    }
    for (l = 0; l < i - 1; l++) {
      document.write('&nbsp &nbsp');
    }
    for (m = 0; m < i; m++) {
      document.write('&nbsp *');
      break;
    } document.write("<br>");
  }
  document.write('&nbsp')
  for (i = 0; i < (n * 2) - 1; i++) {
    document.write(' *')
  }
}

function pattern3() {
  document.write("Pattern 3 is : ");
  document.write('<br><br><br>')
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      document.write(Math.pow(j, i) + "&nbsp &nbsp");
    }
    document.write("<br>");
  }
}

function pattern4() {
  document.write("Pattern 4 is : ");
  document.write('<br><br><br>')
  var a = n / 2;
  var flag = 0;
  if (n % 2 == 1) { flag = 1; }
  for (i = a; i > flag; i--) {
    for (j = i; j > 0; j--) {
      document.write("* &nbsp");
    }
    for (k = 0; k < a - i; k++) {
      document.write("&nbsp &nbsp &nbsp &nbsp &nbsp");
    }
    for (j = i; j > 0; j--) {
      document.write("&nbsp * ");
    }
    document.write("<br>");
  }
  for (i = 0; i < n - a; i++) {
    for (j = 0; j <= i; j++) {
      document.write("* &nbsp");
    }
    for (k = 0; k < n - a - 1 - i; k++) {
      document.write("&nbsp &nbsp &nbsp &nbsp &nbsp");
    }
    for (j = 0; j <= i; j++) {
      document.write("&nbsp * ");
    } document.write("<br>");
  }
}


function pattern5() {
  document.write("Pattern 5 is : ");
  document.write('<br><br><br>')
  var a = n / 2;
  var flag = 0;
  var b = 0;
  if (n % 2 == 1) {
    flag = 1;
    b = -1;
  }
  for (i = 0; i < n - a; i++) {
    for (j = 0; j <= i; j++) {
      document.write("* &nbsp");
    }
    for (k = 0; k < n - a - 1 - i; k++) {
      document.write("&nbsp &nbsp &nbsp &nbsp &nbsp");
    }
    for (j = 0; j <= i; j++) {
      document.write("&nbsp * ");
    } document.write("<br>");
  }
  for (i = n - a; i > flag; i--) {
    for (j = i; j > flag; j--) {
      document.write("* &nbsp");
    }
    for (k = n - a - i; k > b; k--) {
      document.write("&nbsp &nbsp &nbsp &nbsp &nbsp");
    }
    for (j = i; j > flag; j--) {
      document.write("&nbsp * ");
    } document.write("<br>");
  }
}


function pattern6() {
  document.write("Pattern 6 is : ");
  document.write('<br><br><br>')
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      document.write("# &nbsp");
    }
    document.write("<br>");
  }
}

























