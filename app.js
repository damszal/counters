const leftSide = document.querySelector('.digit-left');
const rightSide = document.querySelector('.digit-right');
const startBtn = document.querySelector('.start');

let intervalId, minutes = 0, seconds = 0;  

startBtn.addEventListener('click', () => {  
    const isStart = startBtn.classList.contains('start');  
    clearInterval(intervalId); 
    
    if (isStart) { 
        intervalId = setInterval(() => {  
            seconds = (seconds + 1) % 60;  
            if (seconds === 0) minutes = (minutes + 1) % 60;  
            leftSide.innerHTML = `<p>${String(minutes).padStart(2, '0')}</p>`;  
            rightSide.innerHTML = `<p>${String(seconds).padStart(2, '0')}</p>`;  
        }, 1000);  
    } 
    
    [minutes, seconds] = isStart ? [minutes, seconds] : [0, 0]; 
    leftSide.innerHTML = `<p>${String(minutes).padStart(2, '0')}</p>`;  
    rightSide.innerHTML = `<p>${String(seconds).padStart(2, '0')}</p>`;  
    startBtn.classList.toggle('start');  
    startBtn.classList.toggle('stop');  
    startBtn.textContent = isStart ? 'Stop' : 'Start';  
});  

