const buttonEl = document.querySelector('button');
const activityEl = document.querySelector('h4');

buttonEl.addEventListener('click', () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            activityEl.textContent = data.activity;
        });
});