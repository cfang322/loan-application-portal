const form = document.getElementById('loanForm');
const statusMsg = document.getElementById('statusMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const fullName = form.fullName.value.trim();
  const amount = form.amount.value;
  const income = form.income.value;
  const file = form.incomeProof.files[0];

  // Basic file validation
  if (!file || file.type !== "application/pdf") {
    alert("Please upload a PDF file.");
    return;
  }

  // Simulate API call
  fetch('./mock-api/response.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      statusMsg.textContent = "Application submitted successfully!";
    })
    .catch(err => {
      console.error(err);
      statusMsg.textContent = "Something went wrong. Try again.";
      statusMsg.style.color = "red";
    });
});
