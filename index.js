const dogsData = [
  {
      emotionTags: ["confused", "moody"],
      isGif: false,
      image: "confused.jpeg",
      alt: "A dog looking confused",
  },
  {
      emotionTags: ["dominant"],
      isGif: false,
      image: "dominant.jpg",
      alt: "A dog looking dominant",
  },
  {
      emotionTags: ["happy"],
      isGif: false,
      image: "happy.jpg",
      alt: "A dog looking happy",
  },
  {
    emotionTags: ["hungry"],
    isGif: false,
    image: "hungry.jpg",
    alt: "A dog looking hungry",
  },
  {
    emotionTags: ["insomniac"],
    isGif: false,
    image: "insomniac1.jpg",
    alt: "A dog looking sleepy",
  },
  {
    emotionTags: ["insomniac"],
    isGif: false,
    image: "insomniac2.jpg",
    alt: "A dog looking sleepy",
  },
{
  emotionTags: ["moody", "dominant"],
  isGif: false,
  image: "moody1.jpg",
  alt: "A dog looking moody",
  },
  {
    emotionTags: ["moody"],
    isGif: false,
    image: "moody2.jpg",
    alt: "A dog looking moody",
  },
  {
    emotionTags: ["relaxed"],
    isGif: false,
    image: "relaxed.jpeg",
    alt: "A dog looking relaxed",
  },
  {
    emotionTags: ["sad"],
    isGif: false,
    image: "sad1.jpg",
    alt: "A dog looking sad",
  },
  {
    emotionTags: ["scared"],
    isGif: false,
    image: "scared.jpeg",
    alt: "A dog looking scared",
  },
  {
    emotionTags: ["confused"],
    isGif: true,
    image: "confused1.gif",
    alt: "A dog looking confused",
  },
  {
    emotionTags: ["confused"],
    isGif: true,
    image: "confused2.gif",
    alt: "A dog looking confused",
  },
  {
    emotionTags: ["dominant"],
    isGif: true,
    image: "dominant.gif",
    alt: "A dog looking dominant",
  },
  {
    emotionTags: ["happy"],
    isGif: true,
    image: "happy.gif",
    alt: "A dog looking happy",
  },
  {
    emotionTags: ["hungry", "dominant"],
    isGif: true,
    image: "hungry.gif",
    alt: "A dog looking hungry",
  },
  {
    emotionTags: ["insomniac"],
    isGif: true,
    image: "insomniac.gif",
    alt: "A dog looking insomniac",
  },
  {
    emotionTags: ["moody", "dominant"],
    isGif: true,
    image: "moody.gif",
    alt: "A dog looking moody",
  },
  {
    emotionTags: ["relaxed", "insomniac"],
    isGif: true,
    image: "relaxed.gif",
    alt: "A dog looking relaxed",
  },
  {
    emotionTags: ["sad"],
    isGif: true,
    image: "sad.gif",
    alt: "A dog looking sad",
  },
  {
    emotionTags: ["scared"],
    isGif: true,
    image: "scared.gif",
    alt: "A dog looking scared",
  },
]

// DOM objects

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