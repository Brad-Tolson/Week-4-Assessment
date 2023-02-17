const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/compliment")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortuneButton = document.querySelector('#get-fortune');
const updateFortuneButton = document.querySelector('#update-fortune');
const fortuneDisplay = document.getElementById("fortune-display");

getFortuneButton.addEventListener('click', () => {
  fetch('http://localhost:4000/fortune')
    .then(response => response.text())
    .then(fortune => {
      fortuneDisplay.textContent = fortune;
    });
});

updateFortuneButton.addEventListener('click', () => {
  const newFortune = prompt("Enter your new fortune:");

  if (newFortune) {
    axios.put('http://localhost:4000/fortune', { fortune: newFortune })
      .then(res => {
        fortuneDisplay.textContent = res.data;
      });
  }
});
const deleteFortuneButton = document.querySelector('#delete-fortune');

deleteFortuneButton.addEventListener('click', () => {
  fetch('http://localhost:4000/fortune', {
    method: 'DELETE'
  })
  .then(response => response.text())
  .then(message => {
    fortuneDisplay.textContent = "";
    alert(message);
  });
});


const personalizedMessageButton = document.querySelector('#personalized-message-button');
const nameInput = document.querySelector('#name-input');

personalizedMessageButton.addEventListener('click', () => {
  const name = nameInput.value;
  if (name) {
    axios.post('http://localhost:4000/personalized-message', { name })
      .then(res => {
        alert(res.data);
      });
  }
});


