import { dogsData } from '/data.js';
const emotionsEl = document.querySelector('.emotion-radios');



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

// event listeners

emotionsEl.addEventListener('change', function(e) {
  console.log(e.target.id)
})