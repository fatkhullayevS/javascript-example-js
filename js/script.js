const elForm = document.querySelector(".form");
const elInput = document.querySelector(".form-input");
const elResult = document.querySelector(".form-result");

const elPerson = document.querySelector(".person-result")
const elBicycle = document.querySelector(".bicycle-result")
const elCar = document.querySelector(".car-result")
const elPlane = document.querySelector(".plane-result")

const onFoot = "3.6";
const bicycle = "20.1";
const car = "70";
const plane = "800";

elForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = elInput.value

    if(inputValue > 0){
        const walkTime = inputValue / onFoot;
        const walkHour = parseInt(walkTime, 10);
        const walkMinute = Math.round((parseFloat(walkTime.toFixed(2), 10) - walkHour) * 60);
        elPerson.textContent = ` ${walkHour} hours, ${walkMinute} min`;

        const bikeTime = inputValue / bicycle;
        const bikeHour = parseInt(bikeTime, 10);
        const bikeMInute = Math.round((parseFloat(bikeTime.toFixed(2), 10) - bikeHour) *60);
        elBicycle.textContent = `${bikeHour} hours, ${bikeMInute} min`;

        const carTime = inputValue / car;
        const carHour = parseInt(carTime, 10);
        const carMinute = Math.round((parseFloat(carTime.toFixed(2) , 10) - carHour) * 60);
        elCar.textContent = `${carHour} hours, ${carMinute} min`;

        const planeTime = inputValue / plane;
        const planeHour = parseInt(planeTime, 10);
        const planeMinute = Math.round((parseFloat(planeTime.toFixed(2), 10) - planeHour) * 60);
        elPlane.textContent = `${planeHour} hours, ${planeMinute} min`
    }


} )

// masala 2

const elTempForm = document.querySelector (".temp-form");
const elTempInput = document.querySelector (".temp-form-input");
const elTempResult = document.querySelector (".temp-form-result");

elTempForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const tempInputValue = elTempInput.value;

    elTempResult.textContent = (tempInputValue * 9/5 + 32).toFixed(0);
        console.log(tempInputValue * 9/5 + 32).toFixed(0);
})

// masala 3

const elRainForm = document.querySelector(".rain-form");
const elRainInput = document.querySelector(".rain-form-input");
const elRainCheck = document.querySelector(".rain-check");
const elSportCheck = document.querySelector(".sport-check");

const elYes = document.querySelector(".yes");
const elNo = document.querySelector (".no");

elRainForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const rainInputValue = elRainInput.value;

    if(rainInputValue >= 5 && rainInputValue <= 30){
        elYes.classList.add("text-green");
        elNo.classList.remove("text-red")
    } else{
        elNo.classList.add("text-red");
        elYes.classList.remove("text-green")

    }
    if(elRainCheck.checked){
        elNo.classList.add("text-red");
        elYes.classList.remove("text-green");
    }

    if (elSportCheck.checked && elRainCheck.checked){
        elYes.classList.add("text-green");
        elNo.classList.remove("text-red");
    } else if(rainInputValue <= 5 && elSportCheck.checked){
            elYes.classList.remove("text-green");
            elNo.classList.add("text-red")
        }


})