const timeNow = document.querySelector('.timePoland');

const timeInterval = setInterval(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();

  timeNow.innerHTML = `
    ${currentHour < 10 ? '0' + currentHour : currentHour}:
    ${currentMinutes < 10 ? '0' + currentMinutes : currentMinutes}:
    ${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}
  `;
}, 1000);

