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
        name: "Տաթև",
        img: "../images/tatev.jpg",
        bio: "Դու քնքուշ ես, բայց եթե մի քիչ հեգնական ես, դա քո հմայքն է։ Առանձին սիրում ես աշխատել և նպատակներիդ հետդ լուրջ ես։"

      },
      lika: {
        name: "Լիկա",
        img: "../images/lika.jpg",
        bio: "Դու ուժեղ ես, միշտ ասում ես էն ինչ մտածում ես։ Սիրում ես բամբասանք։"
      },
      mushex: {
        name: "Մուշեղ",
        img: "../images/mushex.jpg",
        bio: "Դու սիրում ես ինքդ քեզ հետ մենակ մնալ ու հանգստանալ։ Խորամանկ ես:"
      },
      felo: {
        name: "Ֆելո",
        img: "../images/felo.jpg",
       bio: "Դու ուզում ես որ բոլորը քեզ գնահատեն։ Հավատարիմ ես ու մի քիչ ամաչկոտ։"
      },
      arsen: {
        name: "Արսեն",
        img: "../images/arsen.jpg",
        bio: "Դու հանգիստ ես, բայց ավելի շատ դրսում ես, քան տանը։"
      },
      tamara: {
        name: "Թամարա",
        img: "../images/tamara.jpg",
        bio: "Դու առաջնորդ ես, ու ոչ ոք չի համարձակվում քեզ մերժի:"
      },
      ruben: {
        name: "Ռուբեն",
        img: "../images/ruben.jpg",
        bio: "Դու սիրում ես ուրախանալ, նվերներ ստանալ ու խմիչքներ։ Միշտ խնջույքներին ես ու դու լավ ընկեր ես, ով միշտ պատրաստ է օգնել։"
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
     Սեղմիր ցանկացած տեղ՝ բացահայտելու քո<br>Ֆուլ Հաուսի կերպարը
  </div>
`;

    // This function displays the result and plays confetti + sound
    function showResult() {
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `
        <div class="character-card">
          <h1>Քո կերպարը...</h1>
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
  