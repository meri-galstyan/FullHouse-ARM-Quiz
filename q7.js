const form = document.getElementById("quizForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Don't reload the page

  const chosen = document.querySelector('input[name="answer"]:checked');

  if (chosen) {
    // Save the chosen answer in localStorage as q1
    localStorage.setItem("q7", chosen.value);

    // Detect which file we're on
    const currentPage = window.location.pathname.split("/").pop();

    // Redirect based on current page
    if (currentPage === "q7.html") {
      window.location.href = "reveal.html";
    } else if (currentPage === "aq7.html") {
      window.location.href = "areveal.html";
    }

  } else {
    alert("Please choose an answer!");
  }
});

