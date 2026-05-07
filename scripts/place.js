const copyrightYear = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
copyrightYear.textContent = currentYear;

const modifiedDate = document.getElementById("lastModified").innerHTML = document.lastModified;

const FullName = function fullName(first, last) {
    return `${first} ${last}`;
}

let temperature = document.getElementById("displayTemperature").innerHTML;
let windSpeed = document.getElementById("displayWindSpeed").innerHTML;
let windChill = 0;


if ((windSpeed > 3) && (temperature >= 50)) {
    let windChillCalculation = calculateWindChill(temperature, windSpeed);
    windChill = Math.round(windChillCalculation);
}
else {
    windChill = 0;
}

function calculateWindChill(temp, speed) {
    return (35.74 + 0.6215 * temp - 35.75 * (speed ^ 0.16) + 0.4275 * temp * (speed ^ 0.16))
}

if (windChill > 0) {
    document.getElementById("displayWindChill").innerHTML = windChill
}
else {
    document.getElementById("displayWindChill").innerHTML = `N/A`
}

