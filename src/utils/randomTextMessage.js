const messages = [
  "Hi! there...",
  "What's going on ?",
  "Genius!!",
  "That's cool",
  "🤣 what was that ?",
  "🤣🤣🤣",
  "❤️❤️❤️",
  "Nobody cares",
  "Thank you 😊😊",
  "Legendddd.. 🙌🙌",
  "You broke my heart 😜😜",
  "Who knows 🤷‍♀️🤷‍♀️",
  "Spreading love 💕💕",
  "That's so funny 😂😂",
  "Horrible 🤦‍♀️",
  "Disgusting 🤦‍♀️🤦‍♀️",
  "Pathetic 🤦‍♀️🤦‍♀️🤦‍♀️",
  "Fingers crossed 🤞🤞",
  "🎶🎶🎶🎶🎶",
  "Messi is the GOAT👍👍",
  "Elementary my dear Watson",
  "Hi 😁😁",
  "you sound naughty 😜",
  "Best 👌👌",
  "Not satisfactory",
  "Happy Independence day!!",
  "Oh God!!!",
  "I'm so sorry for u",
  "RIP 😢😢",
  "🤣🤣🤣🤣🤣🤣",
  "That's pure gold..",
  "Let's get started",
  "Let's go...",
  "Let's do it together",
  "Massive upgrade",
  "Seek some grass",
  "Seek sunlight",
  "You sound dumb bro",
];

export default function getRandomeMessage() {
  return messages[Math.floor(messages.length * Math.random())];
}
