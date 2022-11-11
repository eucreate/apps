document.addEventListener('DOMContentLoaded', function() {
  const elemCelsius = document.getElementById('celsius');
  const elemFahrenheit = document.getElementById('fahrenheit');
  const elemCentimeters = document.getElementById('centimeters');
  const elemInch = document.getElementById('inch');
  const elemFeet = document.getElementById('feet');
  const elemMeter = document.getElementById('meter');
  const elemYard = document.getElementById('yard');
  const elemFeet2 = document.getElementById('feet2');
  const elemKilometer = document.getElementById('kilometer');
  const elemMile = document.getElementById('mile');
  const elemKg = document.getElementById('kg');
  const elemPound = document.getElementById('pound');
  const elemLiters = document.getElementById('liters');
  const elemUSGallons = document.getElementById('USGallons');
  const elemUKGallons = document.getElementById('UKGallons');
  const elemMps = document.getElementById('mps');
  const elemKmph = document.getElementById('kmph');
  
  document.getElementById('changeFahrenheit').addEventListener('click', function () { Calculation('fahrenheit') }, false);
  document.getElementById('changeCelsius').addEventListener('click', function () { Calculation('celsius') }, false);
  document.getElementById('changeInch').addEventListener('click', function () { Calculation('inch') }, false);
  document.getElementById('changeCentimeters').addEventListener('click', function () { Calculation('cm') }, false);
  document.getElementById('changeFeet').addEventListener('click', function () { Calculation('feet') }, false);
  document.getElementById('changeYard').addEventListener('click', function () { Calculation('yard') }, false);
  document.getElementById('changeMeter').addEventListener('click', function () { Calculation('m') }, false);
  document.getElementById('ChangeFeet2').addEventListener('click', function () { Calculation('feet2') }, false);
  document.getElementById('changeMile').addEventListener('click', function () { Calculation('mile') }, false);
  document.getElementById('changeKilometer').addEventListener('click', function () { Calculation('kilometer') }, false);
  document.getElementById('changePound').addEventListener('click', function () { Calculation('pound') }, false);
  document.getElementById('changeKg').addEventListener('click', function () { Calculation('kg') }, false);
  document.getElementById('changeGallons').addEventListener('click', function () { Calculation('gallons') }, false);
  document.getElementById('changeLiters').addEventListener('click', function () { Calculation('liters') }, false);
  document.getElementById('changeLitersUSG').addEventListener('click', function () { Calculation('lusg') }, false);
  document.getElementById('changeMps').addEventListener('click', function () { Calculation('mps') }, false);
  document.getElementById('changeKmph').addEventListener('click', function () { Calculation('kmph') }, false);
  document.getElementById('btnHReload').addEventListener('click', function () {window.location.reload(true)}, false);

  function Calculation(type) {
    const celsius = parseFloat(elemCelsius.value);
    const fahrenheit = parseFloat(elemFahrenheit.value);
    const centimeters = parseFloat(elemCentimeters.value);
    const inch = parseFloat(elemInch.value);
    const feet = parseFloat(elemFeet.value);
    const meter = parseFloat(elemMeter.value);
    const yard = parseFloat(elemYard.value);
    const feet2 = parseFloat(elemFeet2.value);
    const kilometer = parseFloat(elemKilometer.value);
    const mile = parseFloat(elemMile.value);
    const kg = parseFloat(elemKg.value);
    const pound = parseFloat(elemPound.value);
    const liters = parseFloat(elemLiters.value);
    const USGallons = parseFloat(elemUSGallons.value);
    const UKGallons = parseFloat(elemUKGallons.value);
    const mps = parseFloat(elemMps.value);
    const kmph = parseFloat(elemKmph.value);
    let fahrenheitResult,
    celsiusResult,
    inchResult,
    feetResult,
    cmResult,
    yardResult,
    mResult,
    feet2Result,
    kilometerResult,
    mileResult,
    kgResult,
    poundResult,
    litersResult,
    USGallonsResult,
    UKGallonsResult,
    mpsResult,
    kmpsResult;

    if (type === "celsius") {
      celsiusResult = (fahrenheit - 32) / 1.8;
      elemCelsius.value = numDP(celsiusResult, 2, 'round');
    } else if (type === "fahrenheit") {
      fahrenheitResult = celsius * 1.8 + 32;
      elemFahrenheit.value = numDP(fahrenheitResult, 2, 'round');
    } else if (type === "inch") {
      inchResult = centimeters / 2.54;
      elemInch.value = inchResult;
      feetResult = centimeters / 30.48;
      elemFeet.value = feetResult;
    } else if (type === "cm") {
      cmResult = inch * 2.54;
      elemCentimeters.value = cmResult;
      feetResult = inch / 12;
      elemFeet.value = feetResult;
    } else if (type === "feet") {
      cmResult = feet * 30.48;
      elemCentimeters.value = cmResult;
      inchResult = feet * 12;
      elemInch.value = inchResult;
    } else if (type === "yard") {
      yardResult = meter * 1.0936;
      elemYard.value = yardResult;
      feet2Result = meter * 3.2808;
      elemFeet2.value = feet2Result;
    } else if (type === "m") {
      mResult = yard / 1.0936;
      elemMeter.value = mResult;
      feet2Result = yard * 3;
      elemFeet2.value = feet2Result;
    } else if (type === "feet2") {
      mResult = feet2 / 3.2808;
      elemMeter.value = mResult;
      yardResult = feet2 * 0.33333;
      elemYard.value = numDP(yardResult, 2, 'round');
    } else if (type === "kilometer") {
      kilometerResult = mile * 1.609344;
      elemKilometer.value = kilometerResult;
    } else if (type === "mile") {
      mileResult = kilometer / 1.609344;
      elemMile.value = mileResult;
    } else if (type === "pound") {
      poundResult = kg * 2.20462;
      elemPound.value = poundResult;
    } else if (type === "kg") {
      kgResult = pound / 2.20462;
      elemKg.value = kgResult;
    } else if (type === "gallons") {
      USGallonsResult = liters * 0.264172;
      elemUSGallons.value = USGallonsResult;
      UKGallonsResult = liters * 0.219969;
      elemUKGallons.value = UKGallonsResult;
    } else if (type === "liters") {
      litersResult = USGallons / 0.264172;
      elemLiters.value = litersResult;
      UKGallonsResult = USGallons / (0.264172 / 0.219969);
      elemUKGallons.value = UKGallonsResult;
    } else if (type === "lusg") {
      litersResult = UKGallons / 0.219969;
      elemLiters.value = litersResult;
      USGallonsResult = UKGallons * (0.264172 / 0.219969);
      elemUSGallons.value = USGallonsResult;
    } else if (type === "mps") {
      mpsResult = kmph / 3.6;
      elemMps.value = mpsResult;
    } else if (type === "kmph") {
      kmpsResult = mps * 3.6;
      elemKmph.value = kmpsResult;
    }
  }

  function getRate() {
    let req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (req.readyState == 4 && req.status == 200) {
        lStorage.setItem('rate', req.responseText);
        lStorage.setItem('rateDate', Date.now());
      }
    };
    req.open("GET", "https://eu-create.example/apps/web-calc/assets/php/getrate.php");
    req.send(null);
  }

  getRate();
  let rate = JSON.parse(lStorage.getItem('rate'));
  let rateDate = new Date(parseInt(lStorage.getItem('rateDate')));
  document.getElementById('textCurrencyDate').textContent = rateDate.toLocaleString();

  const elemJPY = document.getElementById('JPY');
  const elemUSD = document.getElementById('USD');
  const elemEUR = document.getElementById('EUR');
  const elemGBP = document.getElementById('GBP');
  const elemAUD = document.getElementById('AUD');
  const elemCAD = document.getElementById("CAD");

  document.getElementById('changeJPY').addEventListener('click', function () { calcRate('jpy') }, false);
  document.getElementById('changeUSD').addEventListener('click', function () { calcRate('usd') }, false);
  document.getElementById('changeEUR').addEventListener('click', function () { calcRate('eur') }, false);
  document.getElementById('changeGBP').addEventListener('click', function () { calcRate('gbp') }, false);
  document.getElementById('changeAUD').addEventListener('click', function () { calcRate('aud') }, false);
  document.getElementById('changeCAD').addEventListener('click', function () { calcRate('cad') }, false);

  function calcRate(type) {
    let JPY = parseInt(elemJPY.value);
    let USD = parseFloat(elemUSD.value);
    let EUR = parseFloat(elemEUR.value);
    let GBP = parseFloat(elemGBP.value);
    let AUD = parseFloat(elemAUD.value);
    let CAD = parseFloat(elemCAD.value);
    let resultJPY,
    resultUSD,
    resultEUR,
    resultGBP,
    resultAUD,
    resultCAD;

    if (type === "jpy") {
      resultUSD = JPY / parseFloat(rate.quotes[20].ask);
      elemUSD.value = resultUSD;
      resultEUR = JPY / parseFloat(rate.quotes[16].ask);
      elemEUR.value = resultEUR;
      resultGBP = JPY / parseFloat(rate.quotes[23].ask);
      elemGBP.value = resultGBP;
      resultAUD = JPY / parseFloat(rate.quotes[3].ask);
      elemAUD.value = resultAUD;
      resultCAD = JPY / parseFloat(rate.quotes[1].ask);
      elemCAD.value = resultCAD;
    } else if (type === "usd") {
      resultJPY = USD * parseFloat(rate.quotes[20].ask);
      elemJPY.value = resultJPY;
      resultEUR = USD / parseFloat(rate.quotes[6].ask);
      elemEUR.value = resultEUR;
      resultGBP = USD / parseFloat(rate.quotes[10].ask);
      elemGBP.value = resultGBP;
      resultAUD = USD / parseFloat(rate.quotes[14].ask);
      elemAUD.value = resultAUD;
      resultCAD = USD * parseFloat(rate.quotes[8].ask);
      elemCAD.value = resultCAD;
    } else if (type === "eur") {
      resultJPY = EUR * parseFloat(rate.quotes[16].ask);
      elemJPY.value = resultJPY;
      resultUSD = EUR * parseFloat(rate.quotes[6].ask);
      elemUSD.value = resultUSD;
      resultGBP = EUR * parseFloat(rate.quotes[9].ask);
      elemGBP.value = resultGBP;
      resultAUD = EUR * parseFloat(rate.quotes[21].ask);
      elemAUD.value = resultAUD;
      resultCAD = EUR * parseFloat(rate.quotes[5].ask);
      elemCAD.value = resultCAD;
    } else if (type === "gbp") {
      resultJPY = GBP * parseFloat(rate.quotes[23].ask);
      elemJPY.value = resultJPY;
      resultUSD = GBP * parseFloat(rate.quotes[10].ask);
      elemUSD.value = resultUSD;
      resultEUR = GBP / parseFloat(rate.quotes[9].ask);
      elemEUR.value = resultEUR;
      resultAUD = GBP * parseFloat(rate.quotes[2].ask);
      elemAUD.value = resultAUD;
      resultCAD = GBP * parseFloat(rate.quotes[10].ask);
      resultCAD = resultCAD * parseFloat(rate.quotes[8].ask);
      elemCAD.value = resultCAD;
    } else if (type === "aud") {
      resultJPY = AUD * parseFloat(rate.quotes[3].ask);
      elemJPY.value = resultJPY;
      resultUSD = AUD * parseFloat(rate.quotes[14].ask);
      elemUSD.value = resultUSD;
      resultEUR = AUD / parseFloat(rate.quotes[21].ask);
      elemEUR.value = resultEUR;
      resultGBP = AUD / parseFloat(rate.quotes[2].ask);
      elemGBP.value = resultGBP;
      resultCAD = AUD * parseFloat(rate.quotes[14].ask);
      resultCAD = resultCAD * parseFloat(rate.quotes[8].ask);
      elemCAD.value = resultCAD;
    } else if (type === "cad") {
      resultJPY = CAD * parseFloat(rate.quotes[1].ask);
      elemJPY.value = resultJPY;
      resultUSD = CAD / parseFloat(rate.quotes[8].ask);
      elemUSD.value = resultUSD;
      resultEUR = CAD / parseFloat(rate.quotes[5].ask);
      elemEUR.value = resultEUR;
      resultGBP = CAD / parseFloat(rate.quotes[10].ask);
      resultGBP = resultGBP / parseFloat(rate.quotes[8].ask);
      elemGBP.value = resultGBP;
      resultAUD = CAD / parseFloat(rate.quotes[14].ask);
      resultAUD = resultAUD / parseFloat(rate.quotes[8].ask);
      elemAUD.value = resultAUD;
    }
  }
}, false);