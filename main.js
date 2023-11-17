// Finn elementer som vi trenge fra DOM dokumentet
let inputElements = document.querySelectorAll("input")

// Bruk samlingen av input elementer og kjør en funksjon
// for hvert element, i essens en variant av en for løkke
inputElements.forEach((element) => {
  
  element.addEventListener("change", (event) => {
    // Hent ut å navngi de forskjellige variablene først
    let inputType = event.target.id;
    
    switch (inputType) {
      case "input-feet": {
        console.log("Converting from Feet")
        let feet = Number(event.target.value)

        // Konverter til felles formatet
        let meter = convertFeetToMeter(feet)

        // oppdatert de andre feltene
        updateDisplay(meter)
        break;
      }
        
      case "input-meter": {
        console.log("Converting from Meters")
        let meter = Number(event.target.value)

        updateDisplay(meter)
        break;
      }
    }
  })
})

function updateDisplay(meter) {
  // oppdatert alle feltene
  let displayMeter = document.querySelector("#input-meter")
  displayMeter.value = meter.toFixed(2)

  let displayFeet = document.querySelector("#input-feet")
  let feet = convertMeterToFeet(meter)
  displayFeet.value = feet.toFixed(2)
}

// Utility Funkjsoner
function convertFeetToMeter(feet) {
  // Bruk regnestykket en finner på nett
  // for å gjøre beregningen
  let meter = feet * 0.3048

  return meter
}

function convertMeterToFeet(meter) {
  let feet = meter * 3.2808399

  return feet
}