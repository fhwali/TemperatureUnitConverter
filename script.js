const calculateTemp = () => {

const numberTemp = document.getElementById('temp').value;

const tempSelected = document.getElementById('temp_diff');
const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

const celToFah = (celcius) => {
    let fahrenheit = Math.round((celcius *9/5) + 32);
    return fahrenheit;
}

const fahToCel = (fahr) => {
    let celcius = Math.round((fahr -32) * 5/9);
    return celcius;
}
let result;

if(valueTemp == 'cel') {
    result = celToFah(numberTemp);
    document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
}else {
    result = fahToCel(numberTemp);
    document.getElementById('resultContainer').innerHTML = `= ${result}°Celcius`;

}

}

