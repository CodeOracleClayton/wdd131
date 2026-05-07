const temperatureC = 12;
const windSpeedKmh = 10;

function calculateWindChill(T, V) {
    return 13.12 + 0.6215 * T - 11.37 * Math.pow(V, 0.16) + 0.3965 * T * Math.pow(V, 0.16);
}

const windChillEl = document.getElementById("windchill");

if (temperatureC <= 10 && windSpeedKmh > 4.8) {
    const windChillValue = calculateWindChill(temperatureC, windSpeedKmh);
    windChillEl.textContent = `${windChillValue.toFixed(1)} °C`;
} else {
    windChillEl.textContent = "N/A";
}