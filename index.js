const mainEl = document.querySelector('main');
const getActivityEl = document.querySelector('#get-activity');
const activityEl = document.querySelector('#activity');
const titleEl = document.querySelector('#title');

getActivityEl.addEventListener('click', () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            activityEl.textContent = data.activity;
            titleEl.textContent = "🦾 HappyBot🦿";
            mainEl.classList.add('fun');
        });
});