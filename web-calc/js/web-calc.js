"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var elemChangeWidthHeight = document.getElementById('changeWidthHeight');
  var elemNum1 = document.getElementById('num1');
  var elemNum2 = document.getElementById('num2');
  var elemInputNum1 = document.getElementById('inputNum1');
  var elemMetallicMeansResultH3 = document.querySelectorAll('#metallicMeansResult h3');
  var elemAspectRatioResulttH3 = document.querySelectorAll('#aspectRatioResult h3');
  var elemGoldenRatio = document.getElementById('goldenRatio');
  var elemSilverRatio = document.getElementById('silverRatio');
  var elemBronzeRatio = document.getElementById('bronzeRatio');
  var elemSdRatio = document.getElementById('sdRatio');
  var elemThreeToTwoRatio = document.getElementById('threeToTwoRatio');
  var elemLSizeRatio = document.getElementById('lSizeRatio');
  var elemHdRatio = document.getElementById('hdRatio');
  var elemSixteenToTenRatio = document.getElementById('sixteenToTenRatio');
  var elemTwentyOneByNineRatio = document.getElementById('twentyOneByNineRatio');
  var elemOgpImageRatio = document.getElementById('ogpImageRatio');
  var elemLang = document.getElementById('languageSelect');
  elemNum1.onchange = Calculation;
  elemNum2.onchange = Calculation;
  elemChangeWidthHeight.onchange = changeWidthHeight;

  function Calculation() {
    var num1 = parseFloat(elemNum1.value);
    var num2 = parseFloat(elemNum2.value);
    var inputNum = elemNum1.value + "px";
    var goldenRatioResult, silverRatioResult, bronzeRatioResult;
    var sdRatioResult, threeToTwoRatioResult, lSizeRatioResult, hHdRatioResult, sixteenToTenRatioResult, twentyOneByNineRatioResult, ogpImageRatioResult;
    document.getElementById('result1').value = num2 / num1 * 100;
    document.getElementById('result2').value = num2 / num1;
    goldenRatioResult = num1 * ((1 + Math.sqrt(5)) / 2);
    elemGoldenRatio.value = numDP(goldenRatioResult);
    silverRatioResult = num1 * Math.SQRT2;
    elemSilverRatio.value = numDP(silverRatioResult);
    bronzeRatioResult = num1 * ((3 + Math.sqrt(13)) / 2);
    elemBronzeRatio.value = numDP(bronzeRatioResult);
    sdRatioResult = num1 / (3 / 4);
    elemSdRatio.value = numDP(sdRatioResult);
    threeToTwoRatioResult = num1 / (3 / 2);
    elemThreeToTwoRatio.value = numDP(threeToTwoRatioResult);
    lSizeRatioResult = num1 / (89 / 127);
    elemLSizeRatio.value = numDP(lSizeRatioResult);
    hHdRatioResult = num1 / (9 / 16);
    elemHdRatio.value = numDP(hHdRatioResult);
    sixteenToTenRatioResult = num1 / (5 / 8);
    elemSixteenToTenRatio.value = numDP(sixteenToTenRatioResult);
    twentyOneByNineRatioResult = num1 / (9 / 21);
    elemTwentyOneByNineRatio.value = numDP(twentyOneByNineRatioResult);
    ogpImageRatioResult = num1 * (120 / 63);
    elemOgpImageRatio.value = numDP(ogpImageRatioResult);

    if (elemLang.value === "ja") {
      elemInputNum1.innerHTML = "入力値" + inputNum;
    } else {
      elemInputNum1.innerHTML = "Input value " + inputNum;
    }
  }

  function changeWidthHeight() {
    var num1 = parseFloat(elemNum1.value);
    var goldenRatioResult, silverRatioResult, bronzeRatioResult;
    var sdRatioResult, threeToTwoRatioResult, lSizeRatioResult, hHdRatioResult, sixteenToTenRatioResult, twentyOneByNineRatioResult, ogpImageRatioResult;

    if (elemChangeWidthHeight.value === "h") {
      goldenRatioResult = num1 / ((1 + Math.sqrt(5)) / 2);
      elemGoldenRatio.value = numDP(goldenRatioResult);
      silverRatioResult = num1 / Math.SQRT2;
      elemSilverRatio.value = numDP(silverRatioResult);
      bronzeRatioResult = num1 / ((3 + Math.sqrt(13)) / 2);
      elemBronzeRatio.value = numDP(bronzeRatioResult);
      sdRatioResult = num1 * (3 / 4);
      elemSdRatio.value = numDP(sdRatioResult);
      threeToTwoRatioResult = num1 * (2 / 3);
      elemThreeToTwoRatio.value = numDP(threeToTwoRatioResult);
      lSizeRatioResult = num1 * (89 / 127);
      elemLSizeRatio.value = numDP(lSizeRatioResult);
      hHdRatioResult = num1 * (9 / 16);
      elemHdRatio.value = numDP(hHdRatioResult);
      sixteenToTenRatioResult = num1 * (5 / 8);
      elemSixteenToTenRatio.value = numDP(sixteenToTenRatioResult);
      twentyOneByNineRatioResult = num1 * (9 / 21);
      elemTwentyOneByNineRatio.value = numDP(twentyOneByNineRatioResult);
      ogpImageRatioResult = num1 / (120 / 63);
      elemOgpImageRatio.value = numDP(ogpImageRatioResult);
      elemMetallicMeansResultH3[0].classList.add('green');
      elemAspectRatioResulttH3[0].classList.add('green');
    } else {
      Calculation();
      elemMetallicMeansResultH3[0].classList.remove('green');
      elemAspectRatioResulttH3[0].classList.remove('green');
    }
  }
}, false);
document.addEventListener('DOMContentLoaded', function () {
  var elemChangeWidthHeight = document.getElementById('changeWidthHeight');
  var elem1 = elemChangeWidthHeight;
  var languageClassNameJa = document.getElementsByClassName('ja');
  var languageClassNameEn = document.getElementsByClassName('en');
  var elemMetallicMeansResultDiv = document.querySelectorAll('#metallicMeansResult div');

  if (strage.getItem('dispLang') === "ja") {
    strage.setItem('dispLang', 'ja');

    for (var i = 0, len = languageClassNameJa.length; i < len; i++) {
      if (i === 15) {
        languageClassNameJa[i].style.display = 'inline-block';
        languageClassNameJa[i].style.width = '56px';
        languageClassNameEn[i].style.display = 'none';
      } else {
        languageClassNameJa[i].style.display = 'inline';
        languageClassNameEn[i].style.display = 'none';
      }
    }

    if (elem1 !== null) {
      elem1.options[0].textContent = "計算された幅";
      elem1.options[1].textContent = "計算された高さ";
    }

    for (var i = 0, len = elemMetallicMeansResultDiv.length; i < len; i++) {
      elemMetallicMeansResultDiv[i].style.width = '240px';
    }
  } else {
    strage.setItem('dispLang', 'en');

    for (var i = 0, len = languageClassNameJa.length; i < len; i++) {
      languageClassNameJa[i].style.display = 'none';
      languageClassNameEn[i].style.display = '';
    }

    if (elem1 !== null) {
      elem1.options[0].textContent = "Calclated Width";
      elem1.options[1].textContent = "Calclated Height";
    }

    for (var i = 0, len = elemMetallicMeansResultDiv.length; i < len; i++) {
      elemMetallicMeansResultDiv[i].style.width = '';
    }
  }
}, false);

function changeLanguage() {
  var elemChangeWidthHeight = document.getElementById('changeWidthHeight');
  var elem1 = elemChangeWidthHeight;
  var elemNum1 = document.getElementById('num1');
  var inputNum = elemNum1.value + "px";
  var elemMetallicMeansResultDiv = document.querySelectorAll('#metallicMeansResult div');
  var elemInputNum1 = document.getElementById('inputNum1');
  var elemLang = document.getElementById('languageSelect');
  var languageClassNameJa = document.getElementsByClassName('ja');
  var languageClassNameEn = document.getElementsByClassName('en');

  if (elemLang.value === "ja") {
    strage.setItem('dispLang', 'ja');

    for (var i = 0, len = languageClassNameJa.length; i < len; i++) {
      if (i === 15) {
        languageClassNameJa[i].style.display = 'inline-block';
        languageClassNameJa[i].style.width = '56px';
        languageClassNameEn[i].style.display = 'none';
      } else {
        languageClassNameJa[i].style.display = 'inline';
        languageClassNameEn[i].style.display = 'none';
      }
    }

    if (elem1 !== null) {
      elem1.options[0].textContent = "計算された幅";
      elem1.options[1].textContent = "計算された高さ";
    }

    for (var i = 0, len = elemMetallicMeansResultDiv.length; i < len; i++) {
      elemMetallicMeansResultDiv[i].style.width = '240px';
    }

    elemInputNum1.innerHTML = "入力値" + inputNum;
  } else {
    strage.setItem('dispLang', 'en');

    for (var i = 0, len = languageClassNameJa.length; i < len; i++) {
      languageClassNameJa[i].style.display = 'none';
      languageClassNameEn[i].style.display = '';
    }

    if (elem1 !== null) {
      elem1.options[0].textContent = "Calclated Width";
      elem1.options[1].textContent = "Calclated Height";
    }

    for (var i = 0, len = elemMetallicMeansResultDiv.length; i < len; i++) {
      elemMetallicMeansResultDiv[i].style.width = '';
    }

    elemInputNum1.innerHTML = "Input value " + inputNum;
  }
}