function submitStudent() {
  var nameInput = document.getElementById("studentName");
  var markInput = document.getElementById("studentMark");
  var resultArea = document.getElementById("resultArea");
  var studentList = document.getElementById("studentList");

  var name = nameInput.value.trim();
  var mark = parseInt(markInput.value);

  if (name === "") {
    resultArea.innerHTML = '<p class="error">Please enter a student name.</p>';
    return;
  }

  if (markInput.value === "" || isNaN(mark) || mark < 0 || mark > 100) {
    resultArea.innerHTML = '<p class="error">Please enter a valid mark between 0 and 100.</p>';
    return;
  }

  var result, grade;

  if (mark >= 80 && mark <= 100) {
    result = "PASS"; grade = "Distinction";
  } else if (mark >= 65 && mark <= 79) {
    result = "PASS"; grade = "Merit";
  } else if (mark >= 50 && mark <= 64) {
    result = "PASS"; grade = "Pass";
  } else {
    result = "FAIL"; grade = "Fail";
  }

  var resultClass = result === "PASS" ? "pass" : "fail";
  resultArea.innerHTML =
    '<p class="result-line">' +
    'Student: ' + name + '<br>' +
    'Mark: ' + mark + '<br>' +
    'Result: <span class="' + resultClass + '">' + result + '</span><br>' +
    'Grade: ' + grade + '</p>';

  var li = document.createElement("li");
  var listClass = result === "PASS" ? "list-result-pass" : "list-result-fail";
  li.innerHTML =
    'Student: ' + name + '<br>Mark: ' + mark + '<br>' +
    'Result: <span class="' + listClass + '">' + result + '</span><br>' +
    'Grade: ' + grade;
  studentList.appendChild(li);

  nameInput.value = "";
  markInput.value = "";
  nameInput.focus();
}
