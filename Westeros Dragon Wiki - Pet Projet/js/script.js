window.onload = function () {

  var houseForm = document.forms.houseForm;
  var dragonForm = document.forms.dragonForm;
  console.log(houseForm);
  console.log(dragonForm);

  // Check if the form exists
  if (interestForm) {
    
  // Onsubmit event for houseForm
  houseForm.onsubmit = loadHouse;
  
  function loadHouse() {

    var house = houseForm.houseSelect;
    house.style.background = "";

    if (house.value === "") {
      house.style.background = "red";

      return false;
    }

    window.location.href = "house-" + house.value + ".html";

    return false;

  }

  };


  // Check if the form exists
  if (interestForm) {

   // Onsubmit event for dragonForm
  dragonForm.onsubmit = loadDragon;
  
  function loadDragon() {

    var dragon = dragonForm.dragonSelect;
    dragon.style.background = "";

    if (dragon.value === "") {
      dragon.style.background = "red";

      return false;
    }

    window.location.href = "dragon-" + dragon.value + ".html";

    return false;
  }

  };
  
// Interest Form  // 

  var interestForm = document.forms.interestForm;

  // Check if the form exists
  if (interestForm) {
    
    interestForm.onsubmit = processInterest;
    console.log(document.forms.interestForm);

    function processInterest() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var thankYouBox = document.getElementById('interest_thanks');

    // Reset background
    nameInput.style.background = '';
    emailInput.style.background = '';

    // Validate name
    if (nameInput.value === "") {
      nameInput.style.background = 'red';
      nameInput.focus();
      return false;
    }

    // Validate email
    if (emailInput.value === "") {
      emailInput.style.background = 'red';
      emailInput.focus();
      return false;
    }

    // Hide form
    interestForm.style.display = 'none';

    // Show thank you box with user's name

    var userName = nameInput.value;
  
    // Capitalize first letter
    userName = userName.charAt(0).toUpperCase() + userName.slice(1);

    document.getElementById('thankUserName').innerHTML = userName;
    thankYouBox.style.display = 'block';

    return false; 

    }

};

// --- ⏸️ 🔊 Music Play/Pause ---

//Get elements
var music = document.getElementById("background-music");
var musicBtn = document.getElementById("play-music");

//Set default state
var isPlaying = false;

//Event listener
musicBtn.addEventListener("click", musicSwitch);

//Play/pause fucntion
function musicSwitch() {

  if (isPlaying) {
    music.pause();
    musicBtn.textContent = "🔊 Play Music";
    isPlaying = false;

  } else {

    music.play();
    musicBtn.textContent = "⏸️ Pause Music";
    isPlaying = true;
  }

};

}
