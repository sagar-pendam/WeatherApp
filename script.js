let days1;
let hour1;
let isPM1;
//Adding an event listener to menu on small device
let menu2 = document.getElementsByClassName('menu2')[0];











let hp1 = document.getElementsByClassName("hp1")[0];
hp1.addEventListener("scroll", (e) => {

  
    
    let a = e.target.scrollTop
  


    if (a > 0) {
        let def = document.getElementsByClassName('def')[0];
        if (!def.classList.contains('defg')) {
            let abc = document.getElementsByClassName('abc')[0];
            abc.style.transition = "all 1s"
            abc.style.height = "128px"
            let s = document.getElementsByClassName('search-logo01')[0]
            s.classList.add('a1-ui')
            s.classList.remove('srch-lgo')
            def.classList.add('defg')
         

        }
        if (def.classList.contains('bf-ui')) {
            let s = document.getElementsByClassName('search-logo01')[0]
            s.classList.remove('srch-lgo')
            def.classList.remove('bf-ui')


        }


    }
    else if (a == 0) {
        let def = document.getElementsByClassName('def')[0];
        if (def.classList.contains('defg')) {
            
            let abc = document.getElementsByClassName('abc')[0];
            abc.style.transition = "all 1s"
            abc.style.height = "260px"
        
            def.classList.remove('defg')
            def.classList.add('bf-ui')
            let bf_ui = document.getElementsByClassName('bf-ui')[0];
            bf_ui.style.animationPlayState = "running";

            let s = document.getElementsByClassName('search-logo01')[0]
            s.classList.add('srch-lgo')
            s.classList.remove('a1-ui')
            let srch_lgo = document.getElementsByClassName('srch-lgo')[0];
            srch_lgo.style.animationPlayState = "running";



        }

    }
  
})

//Adding an event listner to menu
function showMenu() {

    let a = document.getElementsByClassName('menu_visible')[0];
    a.style.height = "0%"
    a.style.display = "block"
    a.style.transition = "all 5s"
    a.style.height = "100vh"
    let close = document.getElementsByClassName('close')[0];
    close.style.display = "flex"
    close.style.transition = "all 2s";
    close.style.width = "34px"
    close.style.alignItems = "center"

    let menu = document.getElementsByClassName('menu')[0];
    menu.style.display = "none"
}
function closeMenu() {
    let a = document.getElementsByClassName('menu_visible')[0];
    a.style.display = "none"
    let close = document.getElementsByClassName('close')[0];
    close.style.width = "34px"

    close.style.width = "0%"
    close.style.transition = "all 100s";
    close.style.display = "none"


    let menu = document.getElementsByClassName('menu')[0];
    menu.style.display = "flex"
    menu.style.display = "flex"

}

async function weather(loc) {
    // let w =await fetch('https://wttr.in/London?format=j1')
    let w = await fetch(`https://wttr.in/${loc}?format=j1`)
    let api = await w.json()
    return api
}


//Adding event lister to THD
let current_btn;
let last_btn;
let THD = document.getElementsByClassName('THD')[0]
THD.addEventListener('click', (e) => {



    const element = document.activeElement.className;
    current_btn = element;
    // console.log(element.slice(0,2))


    let THD = document.getElementsByClassName('THD')[0].children;
    let arr = Array.from(THD)
  
    if (element.slice(0, 2) == 'b1' || element.slice(0, 2) == 'b2' || element.slice(0, 2) == 'b3') {
        let todayWeather = document.getElementsByClassName('todayWeather');

        for (let index = 0; index < arr.length; index++) {
            let a = arr[index].classList.contains(element.slice(0, 2))

            if (a) {
                // alert("hi")
                document.getElementsByClassName(current_btn)[0].style.backgroundColor = "black"
                document.getElementsByClassName(current_btn)[0].style.color = "white"
                document.getElementsByClassName(current_btn)[0].style.font = "900"
                // flex items-center justify-around  
                todayWeather[index].style.display = "flex"
                todayWeather[index].style.alignItems = "center"
                todayWeather[index].style.justifyContent = "space-around"



            }
            else {
                let b1 = document.getElementsByClassName(arr[index].classList.toString().slice(0, 2))[0]
                b1.style.backgroundColor = "white"
                b1.style.color = "gray"

                todayWeather[index].style.display = "none"
            }


        }
    }


})



let data;
async function main(index) {
    let search_data = document.getElementsByClassName("search-data")[index].value;

    let a = await weather(search_data)
    // console.log(a)
    data = a;
    // console.log("Hello")


}




function formatDateTime2(input) {
  // Parse the input date
  const date = new Date(input);

  // Get day abbreviation
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = days[date.getDay()];

  // Get hours and minutes
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');

  // Determine AM/PM and adjust hour format
  const isPM = hours >= 12;
  hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format

  // Combine into the desired format
  days1 = day
  hour1 = hours
  if(isPM){
isPM1='pm'
  } 
  else{
isPM1= 'am'
  } 
  return `${day}${","} ${hours}.${minutes}${isPM ? 'pm' : 'am'}`;
}



// Example usage
const inputDateTime = "2024-11-27T23:29:00"; // ISO format of "2024-11-27 11:29 PM"
// console.log(formatDateTime2(inputDateTime)); // Output: "Thu 11.29p"
let result = formatDateTime2(inputDateTime)
let retriveDate = document.getElementsByClassName("search-logo2")[1];

 async function fetchAllData(index) {
    
   
    // console.log("e")
   
    await main(index)
    let today = document.getElementsByClassName("today")[0]
    let hourly1 = document.getElementsByClassName("hourly")[0]
    hourly1.innerHTML = "";
    today.innerHTML = "";
    let search_data = document.getElementsByClassName("search-data")[0].value;
    // alert(search_data)
    console.log(data)
    console.log(data.weather[0].hourly[0].DewPointC)
    // console.log(data.current_condition[0])
    // console.log(data.current_condition[0].localObsDateTime)
    let current_time_date = document.getElementsByClassName("current-time-date")[0]
    current_time_date.innerHTML = data.current_condition[0].localObsDateTime

    let dayTime = document.getElementsByClassName("dayTime")[0].innerHTML = days1
    let currentTime = document.getElementsByClassName("currentTime")[0].innerHTML = ""+hour1+isPM1;
    // alert(formatDateTime2(data.current_condition[0].localObsDateTime))
    let feels_like = document.getElementsByClassName("feels-like")[0]
    feels_like.innerHTML = data.current_condition[0].FeelsLikeC + "<sup>o</sup>"
   
     let feels_like1 = document.getElementsByClassName("fls-like1")
    feels_like1[0].innerHTML =  data.current_condition[0].FeelsLikeC + "<sup>o</sup>"
     feels_like1[1].innerHTML =  data.current_condition[0].FeelsLikeC + "<sup>o</sup>"
    // console.log(data.nearest_area[0].areaName[0].value)
    // console.log(data.nearest_area[0].country[0].value)
    // console.log(data.nearest_area[0].region[0].value)

    let locationDetails = document.getElementsByClassName("locationDetails")
    let arrLocation = Array.from(locationDetails)
    for (let index = 0; index < arrLocation.length; index++) {

        arrLocation[index].innerHTML = data.nearest_area[0].areaName[0].value + ", " + data.nearest_area[0].country[0].value + ", " + data.nearest_area[0].region[0].value

    }

    // console.log(data.weather[0].astronomy[0])

    let moon_phase1 = document.getElementsByClassName("moon-phase")[0]
    moon_phase1.innerHTML = data.weather[0].astronomy[0].moon_phase

    // console.log(data.weather[0].uvIndex)

    let dew_point = document.getElementsByClassName("dew_point")[0]
    dew_point.innerHTML = data.weather[0].hourly[0].DewPointC+` <sup class="text-sm font-semibold">o</sup></span>`
    let uvIndex = document.getElementsByClassName("uv-index")[0];
    uvIndex.innerHTML = data.weather[0].uvIndex;

    let current_condition01 = data.current_condition[0]
    // console.log(data.current_condition[0])
    // console.log(data.current_condition[0].weatherDesc[0])

    // console.log(data.current_condition[0].weatherIconUrl[0])

    let humidity = document.getElementsByClassName("humidity")[0];
    humidity.innerHTML = current_condition01.humidity

    let visibility = document.getElementsByClassName("visibility")[0];
    visibility.innerHTML = current_condition01.visibility

    let pressure = document.getElementsByClassName("pressure")[0];
    pressure.innerHTML = current_condition01.pressure + "<span>mb</span>"


    let wheather_desc = document.getElementsByClassName("wheather-desc")[0];
    wheather_desc.innerHTML = current_condition01.weatherDesc[0].value



    let windspeedKmph = document.getElementsByClassName("windspeedKmph")[0];
    windspeedKmph.innerHTML = current_condition01.windspeedKmph + " km/h"

    let weather1 = data.weather[0]
    // console.log(weather1)


    let maxtempC = document.getElementsByClassName("maxtempC");
    maxtempC[0].innerHTML = weather1.maxtempC+` <sup class="text-sm font-semibold">o</sup></span>`
    maxtempC[1].innerHTML = weather1.maxtempC


    let mintempC = document.getElementsByClassName("mintempC");
    mintempC[0].innerHTML = weather1.mintempC+` <sup class="text-sm font-semibold">o</sup></span>`
    mintempC[1].innerHTML = weather1.mintempC

    let sunrise = document.getElementsByClassName("sunrise")[0];
    sunrise.innerHTML = weather1.astronomy[0].sunrise

    let sunset = document.getElementsByClassName("sunset")[0];
    sunset.innerHTML = weather1.astronomy[0].sunset

    let times = [];
    let baseDate = new Date();

    // Generate times from 1:30 AM to 12:30 PM and 1:30 PM to 12:30 AM
    for (let period = 0; period < 24; period++) {
        let hour = (period % 12) || 12; // Adjust for 12-hour clock
        let isPM = period >= 12;
        let specificTime = new Date(baseDate);
        specificTime.setHours(period, 30, 0, 0);
        times.push(specificTime.toLocaleTimeString('en-US', { hour12: true }));
    }

    // console.log(times); // Full list of times in AM/PM format

    let times1 = [];
    let baseDate1 = new Date();

    for (let i = 1; i <= 12; i++) {
        let specificTime = new Date(baseDate);
        specificTime.setHours(i, 30, 0, 0); // Set hour, minute, second, and millisecond
        times1.push(specificTime.toLocaleTimeString());
    }

    // console.log(times1); // ["1:30:00 AM", "2:30:00 AM", ..., "12:30:00 PM"]

    let hourly = weather1.hourly
    // console.log(hourly)
    let count = 0;
    //Fetching Hourly data and display in hourly tab
    for (let index = 0; index < hourly.length; index++) {
        let mydiv = document.createElement('div')


        if (index == 0) {
            mydiv.innerHTML = `
         <div class="m flex flex-col items-center">
                                    <div class="flex items-center">
                                        <p class="text-xl font-bold">${hourly[index].FeelsLikeC} <sup>o</sup></p>
                                    </div>
                                    <div>
                                        <span class="sm:text-[60px] text-[50px]  material-symbols-outlined">
                                            partly_cloudy_day
                                        </span>
                                    </div>
                                    <div>
                                        <h1 class="sm:text-xl text-[15px]">Now</h1>
                                    </div>
                                </div>
        `
            today.appendChild(mydiv);
        }
        else {

            mydiv.innerHTML = `
         <div class="m flex flex-col items-center">
                                    <div class="flex items-center">
                                        <p class="text-xl font-bold">${hourly[index].FeelsLikeC} <sup>o</sup></p>
                                    </div>
                                    <div>
                                        <span class="sm:text-[60px] text-[50px]  material-symbols-outlined">
                                            partly_cloudy_day
                                        </span>
                                    </div>
                                    <div>
                                        <h1 class="sm:text-xl text-[15px]">${times1[count].slice(0, 4)}</h1>
                                    </div>
                                </div>
        `

            today.appendChild(mydiv)
        }
        count++
    }
    count = 0;



    // console.log(formattedDate); // Outputs: "Fri 27"

    //Fetching Daily weather report and displaying

    let weatherDaily = data.weather
    let count2 = 1;
    
    for (let index = 0; index < weatherDaily.length; index++) {
        let mydiv2 = document.createElement('div')
        if (index == 0) {
            mydiv2.innerHTML = `<div class="m flex flex-col items-center">
                                    <div class="flex items-center">
                                        <p class="text-xl font-bold">${data.current_condition[0].FeelsLikeC} <sup>o</sup></p>
                                    </div>
                                    <div>
                                        <span class="sm:text-[60px] text-[50px] material-symbols-outlined">
                                            partly_cloudy_day
                                        </span>
                                    </div>
                                    <div>
                                        <h1 class=" text-[15px]">Today</h1>
                                    </div>
                                </div>`
            hourly1.appendChild(mydiv2)
        }
        else if(index!=0){

            // Input date string
            let dateString = weatherDaily[count2].date;

            // Convert to a Date object
            let date = new Date(dateString);

            // Format for Indian locale (English)
            let dayName = date.toLocaleDateString('en-IN', { weekday: 'short' }); // "शुक्र" for Hindi or "Fri" for English
            let dayOfMonth = date.getDate(); // 27

            // Combine into the desired format
            let formattedDate = `${dayName} ${dayOfMonth}`;

            // console.log(formattedDate); // Outputs: "Fri 27"

            mydiv2.innerHTML = `<div class="m flex flex-col items-center">
                                    <div class="flex items-center">
                                        <p class="text-xl font-bold">${weatherDaily[index].hourly[0].FeelsLikeC} <sup>o</sup></p>
                                    </div>
                                    <div>
                                        <span class="sm:text-[60px] text-[50px] material-symbols-outlined">
                                            partly_cloudy_day
                                        </span>
                                    </div>
                                    <div>
                                        <h1 class="text-[15px]">${formattedDate}</h1>
                                    </div>
                                </div>`


           
            
            hourly1.appendChild(mydiv2)
            // console.log(weatherDaily[index].hourly[0].FeelsLikeC)
            count2 +=1
        }
    }
}


function openNav() {
document.getElementById("mySidebar").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
document.getElementById("mySidebar").style.width = "0";
document.getElementById("main").style.marginLeft= "0";
}