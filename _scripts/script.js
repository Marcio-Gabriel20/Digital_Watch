const updateTime = () => {
    const display = document.querySelector('.display');

    const currentTime = new Date(); // classe criada para pegar a hora, minuto e segundo atual do dispositivo

    let time = correctTime(currentTime.getHours()) + ':' + correctTime(currentTime.getMinutes()) + ':' + correctTime(currentTime.getSeconds());

    display.textContent = time;
}

let correctTime = (num) => {
    if(num < 10) {
        num = '0' + num;
    }

    return num;
}

updateTime();
setInterval(updateTime, 1000);