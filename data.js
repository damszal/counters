const date = document.querySelector('.data')
const currentDate = new Date()
const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

date.innerHTML =   `
    ${day} ${month} ${year}
`