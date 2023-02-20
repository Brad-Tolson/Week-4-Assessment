const compliments = [
  "Gee, you're a smart cookie!",
  "Cool shirt!",
  "Your Javascript skills are stellar."
];

let fortunes = [
  "All your hard work will soon pay off.",
  "Chance favors those in motion.",
  "Fortune Not Found: Abort, Retry, Ignore?",
  "It takes courage to admit fault.",
  "There’s no such thing as an ordinary cat."
];

const getCompliment = (req, res) => {
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
};

const getFortune = (req, res) => {
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  if (req.params.request) {
    randomFortune = `${req.params.request}: ${randomFortune}`;
  }

  res.status(200).send(randomFortune);
};

const getPersonalizedMessage = (req, res) => {
  const name = req.body.name;
  const message = `Hello, ${name}! Have a great day.`;
  res.status(200).send(message);
};

const updateFortune = (req, res) => {
  const newFortune = req.body.fortune;
  fortunes.push(newFortune);
  res.status(200).send(newFortune);
};

const deleteFortune = (req, res, index) => {
  fortunes.splice(index, 1);
  res.status(200).send("Fortune deleted");
};

module.exports = { getCompliment, getFortune, getPersonalizedMessage, updateFortune, deleteFortune };







  
  
  