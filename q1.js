const form = document.getElementById("quizForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Don't reload the page

  const chosen = document.querySelector('input[name="answer"]:checked');

  if (chosen) {
    // Save the chosen answer in localStorage as q1
    localStorage.setItem("q1", chosen.value);

    // Detect which file we're on
    const currentPage = window.location.pathname.split("/").pop();

    // Redirect based on current page
    if (currentPage === "q1.html") {
      window.location.href = "q2.html";
    } else if (currentPage === "aq1.html") {
      window.location.href = "aq2.html";
    }

  } else {
    alert("Please choose an answer!");
  }
});
