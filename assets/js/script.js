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























