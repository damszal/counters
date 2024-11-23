function timeBetweenDates(startDateInput, endDateInput) {
    const startDate = new Date(startDateInput || new Date());
    const endDate = new Date(endDateInput || "2025-01-01T00:00:00");

    if (isNaN(startDate) || isNaN(endDate)) return console.log("Podano nieprawidłową datę.");

    const difference = Math.abs(endDate - startDate) / 1000;
    const years = Math.floor(difference / (365.25 * 24 * 3600));
    const months = Math.floor((difference % (365.25 * 24 * 3600)) / (30 * 24 * 3600));
    const days = Math.floor((difference % (30 * 24 * 3600)) / (24 * 3600));
    const hours = Math.floor((difference % (24 * 3600)) / 3600);
    const minutes = Math.floor((difference % 3600) / 60);
    const seconds = Math.floor(difference % 60);

    return { years, months, days, hours, minutes, seconds };
}


setInterval(()=>{
    const containerCountdown = document.querySelector('.container-countdown');
    const timeLeft = timeBetweenDates()
    containerCountdown.innerHTML = `
    <h4>2025 begins in:</h4>
    <p>years: ${timeLeft.years} </p>
    <p>months: ${timeLeft.months} </p>
    <p>days: ${timeLeft.days} </p>
    <p>hours: ${timeLeft.hours} </p>
    <p>minuts: ${timeLeft.minutes} </p>
    <p>minuts: ${timeLeft.seconds} </p>
    `
},1000)




