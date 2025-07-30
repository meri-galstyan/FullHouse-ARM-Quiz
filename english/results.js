window.addEventListener("DOMContentLoaded", function () {
    // Store the answers and characters data here so they're ready
    const answers = [
      localStorage.getItem("q1"),
      localStorage.getItem("q2"),
      localStorage.getItem("q3"),
      localStorage.getItem("q4"),
      localStorage.getItem("q5"),
      localStorage.getItem("q6"),
      localStorage.getItem("q7")
    ];
  
    const count = {
      tatev: 0,
      lika: 0,
      mushex: 0,
      felo: 0,
      arsen: 0,
      tamara: 0,
      ruben: 0
    };
  
    //Goes through the designated character for each answer. Updates the count.
    answers.forEach(ans => {
      if (count.hasOwnProperty(ans)) {
        count[ans]++;
      }
    });
  
    //Makes an array with each character, then keeps the one with the highest count by comparing each
    const winner = Object.keys(count).reduce((a, b) => count[a] >= count[b] ? a : b);
  
    //All available characters with their names, an image, and short bio
    const characters = {
      tatev: {
        name: "Tatev",
        img: "../images/tatev.jpg",
        bio: "You are usually very sweet, but have a very big mean streak. You are more reserved and have goals you aspire to achieve."
      },
      lika: {
        name: "Lika",
        img: "../images/lika.jpg",
        bio: "You are bold, not being afraid to stand up for what is right. Very sarcastic and drama loving"
      },
      mushex: {
        name: "Mushex",
        img: "../images/mushex.jpg",
        bio: "You are an old soul. Your idea of a perfect day is lying in bed with no one around. No shame in that!"
      },
      felo: {
        name: "Felo",
        img: "../images/felo.jpg",
        bio: "You seek validation from a lot of people and keep your family very close.Loyal and shy person. "
      },
      arsen: {
        name: "Arsen",
        img: "../images/arsen.jpg",
        bio: "You're very chill but can also be very flirty at times. You are seen outside more than at your house!"
      },
      tamara: {
        name: "Tamara",
        img: "../images/tamara.jpg",
        bio: "You are very bossy, even the scariest people fear you. You like to keep things in order and love when people help you with that"
      },
      ruben: {
        name: "Ruben",
        img: "../images/ruben.jpg",
        bio: "You loveee when you get some sweet gifts and drinks! Party goer and always involved in drama. Very helpful and sweet"
      }
    };
  

    // Wait for user to click anywhere, then reveal results and play audio/confetti
    document.body.addEventListener('click', function onClick() {
      showResult();
      back.style.display = "inline-block";
      // Remove the click listener after the first click so it only happens once
      document.body.removeEventListener('click', onClick);
    });
  
    // Showing user to click to reveal
    const resultDiv = document.getElementById("result");
resultDiv.innerHTML = `
  <div id="click-message">
     Click anywhere to reveal your<br>Full House Armenia character 
  </div>
`;

    // This function displays the result and plays confetti + sound
    function showResult() {
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `
        <div class="character-card">
          <h1>You are...</h1>
          <img src="${characters[winner].img}" alt="${characters[winner].name}">
          <h2>${characters[winner].name}</h2>
          <p>${characters[winner].bio}</p>
        </div>
      `;
  
      // Play confetti sound
      const audio = new Audio('../confetti.mp3');
      audio.play().catch(e => {
        //browser issue
        console.warn("Audio play prevented:", e);
      });
  
      // Fire confetti from canvas library
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
      });
    }
    
    document.getElementById("back").addEventListener("click", function(){
      window.location.href = "../main.html";
  })


  });
  