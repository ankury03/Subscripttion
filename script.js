const msg = document.getElementById("msg");
const scriptURL = 'https://script.google.com/macros/s/AKfycbxCooA1j8x4fdJJIg_TgLZcopFBrAmUWod6ut3ype4M6ogI0ZAb6NTW5pAhsJO1XMl0/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Thank You For Subscribing!";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 4000);
      form.reset();
})
    .catch(error => console.error('Error!', error.message))

})