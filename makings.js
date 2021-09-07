// Went online and checked out this https://www.geeksforgeeks.org/design-a-typing-speed-test-game-using-javascript/
// for reference. This helped make sense and made me realize i gotta start labeling things better instead as well as
// taught me many new things in all three parts. 


const url = `https://pokeapi.co/api/v2/pokemon/`;


//DOM GROUP
let timer_text = document.querySelector(".current_time");
let accuracy_text = document.querySelector(".current_accuracy");
let error_text = document.querySelector(".current_errors");
let wpm_text = document.querySelector(".current_wpm");
let quote_text = document.querySelector(".quote");
let input_area = document.querySelector(".input_area");
let restart_btn = document.querySelector(".restart_btn");
let wpm_group = document.querySelector(".wpm");
let error_group = document.querySelector(".errors");
let accuracy_group = document.querySelector(".accuracy");



// gets the names/type of the pokemon
async function getPokemonName() {
  try {
    const res = await axios.get(`${url}${randomNum()}`);
    console.log(res.data.name);
    quotes_array.push(res.data.name);
    quotes_array.push(res.data.types[0].type.name)
  } catch (error) {
    console.log(error);
  }

}

async function getPokemonType() {
  try {
    const res = await axios.get(`${url}${randomNum()}`);
    console.log(res.data.types[0].type.name);
    quotes_array.push(res.data.types[0].type.name)
  } catch (error) {
    console.log(error);
  }

}




// gets up to 100 names
function makeAQuote() {
  for (let i = 0; i < 100; i++) {
    getPokemonName();
    getPokemonType();
  }
}


// LET GROUP
let TIME_LIMIT = 60;
let timeLeft = TIME_LIMIT;
let timeElapsed = 0;
let timer = null;
let errors = 0;
let total_errors = 0;
let current_quote = "";
let characterTyped = 0;
let quoteNo = 0;
let accuracy = 0;
let quotes_array = [];





function updateQuote() {
  quote_text.textContent = null;
  current_quote = quotes_array[quoteNo];

  current_quote.split('').forEach(character => {
    const charSpan = document.createElement("span")
    charSpan.innerText = character
    quote_text.appendChild(charSpan)
  })

  if (quoteNo < quotes_array.length - 1)
    quoteNo++;
  else
    quoteNo = 0;
}



function randomNum() {
  num = Math.floor(Math.random() * 500);
  return num
}



function processCurrentText() {

  current_input = input_area.value;
  current_input_array = current_input.split("");
  characterTyped++;
  errors = 0;
  quoteSpanArray = quote_text.querySelectorAll("span");
  quoteSpanArray.forEach((character, index) => {

    let typedChar = current_input_array[index]


    if (typedChar == null) {
      character.classList.remove("correct_char");
      character.classList.remove("incorrect_char");

    } else if (typedChar === character.innerText) {
      character.classList.add("correct_char");
      character.classList.remove("incorrect_char");

    } else {
      character.classList.add("incorrect_char");
      character.classList.remove("correct_char");
      errors++;
    }
  });


  let correctCharacters = (characterTyped - (errors));
  let accuracyVal = ((correctCharacters / characterTyped) * 100);
  accuracy_text.textContent = Math.round(accuracyVal);
  error_text.textContent = errors;

  if (current_input.length == current_quote.length) {
    updateQuote();
    total_errors += errors;
    input_area.value = "";
  }
}





function startGame() {
  resetValues();
  updateQuote();
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
}

function hault() {
  clearInterval(timer);
  input_area.disabled = true;
  wpm = Math.round((((characterTyped / 5) / timeElapsed) * 60));
  wpm_text.textContent = wpm;
}



function resetValues() {
  timeLeft = TIME_LIMIT;
  timeElapsed = 0;
  errors = 0;
  total_errors = 0;
  accuracy = 0;
  characterTyped = 0;
  quoteNo = 0;
  input_area.disabled = false;

  input_area.value = "";
  quote_text.textContent = "Click down there to start!";
  accuracy_text.textContent = 100;
  timer_text.textContent = timeLeft;
  error_text.textContent = 0;
}




function updateTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timeElapsed++;
    timer_text.textContent = timeLeft;
  }
  else {
    hault();
  }
}

//since im using the oninput in the html section, i have to call makeAQuote(); here
makeAQuote();