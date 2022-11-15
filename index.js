import { dogsData } from '/data.js';
const emotionsEl = document.querySelector('.emotion-radios');



// create function to iterate over emotion array

function getEmotionsArray(dogs) {
  const emotionsArray = [];

  for (let dog of dogs) {
    for (let emotion of dog.emotionTags) {
      emotionsArray.push(emotion);
    }
  }

  let uniqueEmoArray = [...new Set(emotionsArray)];
  return uniqueEmoArray;
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
    emotionsEl.innerHTML += `<p>${emotion}</p>`
  }
}

renderEmotionsRadios(dogsData);