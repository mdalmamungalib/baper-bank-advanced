function getInputFieldById(newValue){
    const inputField = document.getElementById(newValue);
    const inputFieldValueEstring = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueEstring);
    inputField.value = " ";
    return inputFieldValue;
}

function getTextElimentById (elimentId){
    const textElement = document.getElementById(elimentId);
    const textElementValueEstring = textElement.innerText;
    const textElementValue = parseFloat(textElementValueEstring);
    return textElementValue;
}

function setTextElimentValueById( elimentId, newValue ){
    const textElement = document.getElementById(elimentId);
    textElement.innerText = newValue;
}