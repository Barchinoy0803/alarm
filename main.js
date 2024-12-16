const hour_input = document.getElementById('hour-input')
const minute_input = document.getElementById('minute-input')
const current_hour = document.getElementById('current-hour')
const current_minute = document.getElementById('current-minute')
const current_second = document.getElementById('current-second')
const submitButton = document.getElementById('submit-button')
const audio_alarm = document.getElementById('audio')

current_hour.textContent = new Date().getHours()
current_minute.textContent = new Date().getMinutes()
current_second.textContent = new Date().getSeconds()

let hour = +current_hour.textContent
let minute = +current_minute.textContent
let second = +current_second.textContent
console.log(hour, minute, second);
submitButton.addEventListener("click", () => {
    const interval = setInterval(() => {
        if(second == 60){
            minute += 1 
            second = 0
        }

        if(minute == 60){
            hour += 1
            minute = 0
        }
        second += 1 


        if(hour_input.value == hour && minute_input.value == minute){
            audio_alarm.play()
            clearInterval(interval)
        }

        current_hour.textContent = hour.toString().padStart(2, '0')
        current_minute.textContent = minute.toString().padStart(2, '0')
        current_second.textContent = second.toString().padStart(2, '0')

    }, 1000)
})
