//your JS code here. If required.
const form = document.getElementById('myForm');
const ageInput = document.getElementById('age');
const nameInput = document.getElementById('name');

function submitForm(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const age = parseInt(ageInput.value);
  const name = nameInput.value;

  if (!age || !name) {
    alert('Please fill in all fields');
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  promise
    .then(message => {
      alert(message);
    })
    .catch(errorMessage => {
      alert(errorMessage);
    });

  form.reset(); // Clear the form inputs after submission
}

form.addEventListener('submit', submitForm);
