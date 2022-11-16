import { dogsData } from '/data.js';
const emotionsEl = document.querySelector('.emotion-radios');
const imgGenerateBtn = document.querySelector('.img-generate-btn');
const gifsOnlyOption = document.querySelector('#gifs-only-option');

// event listeners

emotionsEl.addEventListener('change', highlightCheckedOption);

imgGenerateBtn.addEventListener('click', renderDog);

// create function to highlight clicked radio

function highlightCheckedOption(e) {
  const radioArr = document.getElementsByClassName('radio');
  for (let radio of radioArr) {
    radio.classList.remove('highlight');
  }

  document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

// create function to connect button to selected emotion

function getMatchingDogsArray(){
  if(document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector('input[type="radio"]:checked').value;
    const isGif = gifsOnlyOption.checked;

  // filter method with ternary arrow function to match gif option 

    const matchingDogsArray = dogsData.filter(dog => 
      (isGif) ? dog.emotionTags.includes(selectedEmotion) && dog.isGif :
        dog.emotionTags.includes(selectedEmotion));

    return matchingDogsArray;
  }
}

// create function to get single dog object

function getSingleDogObject(){
  const dogsArr = getMatchingDogsArray();

  if (dogsArr.length === 1) {
    return dogsArr[0];
  } else {
    const randomNum = Math.floor(Math.random() * dogsArr.length);
    return dogsArr[randomNum];
  }
}


// create function to render dog 

function renderDog() {
  console.log(getSingleDogObject());
}

// create function to iterate over emotion array

function getEmotionsArray(dogs) {

  const emotionsArray = [];

  for (let dog of dogs) {
    for (let emotion of dog.emotionTags) {
      if (!emotionsArray.includes(emotion)) {
        emotionsArray.push(emotion);
      } 
    }
  }
  return emotionsArray;
}

// create function to render out emotions from emotion array

function renderEmotionsRadios(dogs) {
  const emotions = getEmotionsArray(dogs);
  console.log(emotions);

/*   let emotionsStr = "";

  for (let i = 0; i < emotions.length; i++) {
    emotionsStr += `<p>${emotions[i]}</p>`
  }

  emotionsEl.innerHTML = emotionsStr;} */
  for (let emotion of emotions) {
    emotionsEl.innerHTML += `
    <div class="radio">
      <label for="${emotion}">${emotion}</label>
      <input 
        type="radio"
        id="${emotion}"
        value="${emotion}"
        name="emotions"
      >
    </div>
    `
  }
}

renderEmotionsRadios(dogsData);

