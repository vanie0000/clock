setInterval(setClock, 1000) //this function calls the setClock every 1000 ms so the clock updates real-time

const hourHand = document.querySelector('[data-hour-hand]') //selects the corresponding HTML elements
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date(); //new date object
    const secondsRatio = currentDate.getSeconds() / 60; //this calculates the fraction of the current second, if time is 15s past the minute, secondsRatio is 15/60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60; //fraction of the current minute, adding the fractional seconds for smoother minute hand movement
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12; //fraction of hour + fractional minutes
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio);
} //this function calculates how far each hand should rotate based on the current time

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
} //this function sets the CSS rotation property on the element, the rotationRatio * 360 converts the ratio into degrees 