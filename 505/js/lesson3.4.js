let days = document.querySelector('.days i')
let hours = document.querySelector('.hours i')
let mins = document.querySelector('.mins i')

let totalDays = 0
let totalHours = 2
let totalMinutes = 30

days.innerText = totalDays
hours.innerText = totalHours
mins.innerText = totalMinutes

// algoritm
setInterval(() => {
    if(totalMinutes == 0) {
        if(totalHours == 0) {
            totalDays--
            totalHours = 23
            totalMinutes = 59
        } else {
            totalHours--
            totalMinutes = 59
        }
    } else {
        totalMinutes--
    }
    
    if(totalDays == 0 && totalHours == 0 && totalMinutes == 0) {
        alert('Sales end!')
    }

    // UI
    days.innerText = totalDays
    hours.innerText = totalHours
    mins.innerText = totalMinutes
}, 50)
// algoritm end

