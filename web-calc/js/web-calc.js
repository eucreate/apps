"use strict";

window.onload = function () {
  var elem1 = elemChangeWidthHeight;
  var inputNum = elemNum1.value + "px";

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
};

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

function changeLanguage() {
  var elem1 = elemChangeWidthHeight;
  var inputNum = elemNum1.value + "px";

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

function numDP(num) {
  var nod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "floor";

  if (type === "floor") {
    return Math.floor(num * Math.pow(10, nod)) / Math.pow(10, nod);
  }
}