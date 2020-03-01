"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var elemCelsius = document.getElementById('celsius');
  var elemFahrenheit = document.getElementById('fahrenheit');
  var elemCentimeters = document.getElementById('centimeters');
  var elemInch = document.getElementById('inch');
  var elemFeet = document.getElementById('feet');
  var elemMeter = document.getElementById('meter');
  var elemYard = document.getElementById('yard');
  var elemFeet2 = document.getElementById('feet2');
  var elemKilometer = document.getElementById('kilometer');
  var elemMile = document.getElementById('mile');
  var elemKg = document.getElementById('kg');
  var elemPound = document.getElementById('pound');
  var elemLiters = document.getElementById('liters');
  var elemUSGallons = document.getElementById('USGallons');
  var elemUKGallons = document.getElementById('UKGallons');
  var elemMps = document.getElementById('mps');
  var elemKmph = document.getElementById('kmph');
  document.getElementById('changeFahrenheit').addEventListener('click', function () {
    Calculation('fahrenheit');
  }, false);
  document.getElementById('changeCelsius').addEventListener('click', function () {
    Calculation('celsius');
  }, false);
  document.getElementById('changeInch').addEventListener('click', function () {
    Calculation('inch');
  }, false);
  document.getElementById('changeCentimeters').addEventListener('click', function () {
    Calculation('cm');
  }, false);
  document.getElementById('changeFeet').addEventListener('click', function () {
    Calculation('feet');
  }, false);
  document.getElementById('changeYard').addEventListener('click', function () {
    Calculation('yard');
  }, false);
  document.getElementById('changeMeter').addEventListener('click', function () {
    Calculation('m');
  }, false);
  document.getElementById('ChangeFeet2').addEventListener('click', function () {
    Calculation('feet2');
  }, false);
  document.getElementById('changeMile').addEventListener('click', function () {
    Calculation('mile');
  }, false);
  document.getElementById('changeKilometer').addEventListener('click', function () {
    Calculation('kilometer');
  }, false);
  document.getElementById('changePound').addEventListener('click', function () {
    Calculation('pound');
  }, false);
  document.getElementById('changeKg').addEventListener('click', function () {
    Calculation('kg');
  }, false);
  document.getElementById('changeGallons').addEventListener('click', function () {
    Calculation('gallons');
  }, false);
  document.getElementById('changeLiters').addEventListener('click', function () {
    Calculation('liters');
  }, false);
  document.getElementById('changeLitersUSG').addEventListener('click', function () {
    Calculation('lusg');
  }, false);
  document.getElementById('changeMps').addEventListener('click', function () {
    Calculation('mps');
  }, false);
  document.getElementById('changeKmph').addEventListener('click', function () {
    Calculation('kmph');
  }, false);

  function Calculation(type) {
    var celsius = parseFloat(elemCelsius.value);
    var fahrenheit = parseFloat(elemFahrenheit.value);
    var centimeters = parseFloat(elemCentimeters.value);
    var inch = parseFloat(elemInch.value);
    var feet = parseFloat(elemFeet.value);
    var meter = parseFloat(elemMeter.value);
    var yard = parseFloat(elemYard.value);
    var feet2 = parseFloat(elemFeet2.value);
    var kilometer = parseFloat(elemKilometer.value);
    var mile = parseFloat(elemMile.value);
    var kg = parseFloat(elemKg.value);
    var pound = parseFloat(elemPound.value);
    var liters = parseFloat(elemLiters.value);
    var USGallons = parseFloat(elemUSGallons.value);
    var UKGallons = parseFloat(elemUKGallons.value);
    var mps = parseFloat(elemMps.value);
    var kmph = parseFloat(elemKmph.value);
    var fahrenheitResult, celsiusResult, inchResult, feetResult, cmResult, yardResult, mResult, feet2Result, kilometerResult, mileResult, kgResult, poundResult, litersResult, USGallonsResult, UKGallonsResult, mpsResult, kmpsResult;

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
}, false);