"use strict";

document.addEventListener('DOMContentLoaded', function () {
  const elemChangeWidthHeight = document.getElementById('changeWidthHeight');
  const elemNum1 = document.getElementById('num1');
  const elemNum2 = document.getElementById('num2');
  const elemInputNum1 = document.getElementById('inputNum1');
  const elemMetallicMeansResultH3 = document.querySelectorAll('#metallicMeansResult h3');
  const elemAspectRatioResulttH3 = document.querySelectorAll('#aspectRatioResult h3');
  const elemGoldenRatio = document.getElementById('goldenRatio');
  const elemSilverRatio = document.getElementById('silverRatio');
  const elemBronzeRatio = document.getElementById('bronzeRatio');
  const elemSdRatio = document.getElementById('sdRatio');
  const elemThreeToTwoRatio = document.getElementById('threeToTwoRatio');
  const elemLSizeRatio = document.getElementById('lSizeRatio');
  const elemHdRatio = document.getElementById('hdRatio');
  const elemSixteenToTenRatio = document.getElementById('sixteenToTenRatio');
  const elemTwentyOneByNineRatio = document.getElementById('twentyOneByNineRatio');
  const elemOgpImageRatio = document.getElementById('ogpImageRatio');
  const elemLang = document.getElementById('languageSelect');
  elemNum1.onchange = Calculation;
  elemNum2.onchange = Calculation;
  elemChangeWidthHeight.onchange = changeWidthHeight;
  function Calculation() {
    const num1 = parseFloat(elemNum1.value);
    const num2 = parseFloat(elemNum2.value);
    let inputNum = elemNum1.value + "px";
    let goldenRatioResult, silverRatioResult, bronzeRatioResult;
    let sdRatioResult, threeToTwoRatioResult, lSizeRatioResult, hHdRatioResult, sixteenToTenRatioResult, twentyOneByNineRatioResult, ogpImageRatioResult;
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
    } else if (elemLang.value === "cn") {
      elemInputNum1.innerHTML = "输入值" + inputNum;
    } else {
      elemInputNum1.innerHTML = "Input value " + inputNum;
    }
  }
  function changeWidthHeight() {
    const num1 = parseFloat(elemNum1.value);
    let goldenRatioResult, silverRatioResult, bronzeRatioResult;
    let sdRatioResult, threeToTwoRatioResult, lSizeRatioResult, hHdRatioResult, sixteenToTenRatioResult, twentyOneByNineRatioResult, ogpImageRatioResult;
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
  const elemChangeWidthHeight = document.getElementById('changeWidthHeight');
  const elem1 = elemChangeWidthHeight;
  const languageClassNameJa = document.getElementsByClassName('ja');
  const languageClassNameEn = document.getElementsByClassName('en');
  const languageClassNameCn = document.getElementsByClassName('cn');
  const elemMetallicMeansResultDiv = document.querySelectorAll('#metallicMeansResult div');
  if (storage.getItem('dispLang') === "ja") {
    storage.setItem('dispLang', 'ja');
    for (let i = 0, len = languageClassNameJa.length; i < len; i++) {
      if (i === 15) {
        languageClassNameJa[i].style.display = 'inline-block';
        languageClassNameJa[i].style.width = '56px';
        languageClassNameEn[i].style.display = 'none';
        languageClassNameCn[i].style.display = 'none';
      } else {
        languageClassNameJa[i].style.display = 'inline';
        languageClassNameEn[i].style.display = 'none';
        languageClassNameCn[i].style.display = 'none';
      }
    }
    if (elem1 !== null) {
      elem1.options[0].textContent = "計算された幅";
      elem1.options[1].textContent = "計算された高さ";
    }
    for (let i = 0, len = elemMetallicMeansResultDiv.length; i < len; i++) {
      elemMetallicMeansResultDiv[i].style.width = '240px';
    }
  } else if (storage.getItem('dispLang') === "cn") {
    storage.setItem('dispLang', 'cn');
    for (let i = 0, len = languageClassNameCn.length; i < len; i++) {
      if (i === 15) {
        languageClassNameCn[i].style.display = 'inline-block';
        languageClassNameEn[i].style.display = 'none';
        languageClassNameJa[i].style.display = 'none';
      } else {
        languageClassNameCn[i].style.display = 'inline';
        languageClassNameEn[i].style.display = 'none';
        languageClassNameJa[i].style.display = 'none';
      }
    }
    if (elem1 !== null) {
      elem1.options[0].textContent = "计算的宽度";
      elem1.options[1].textContent = "计算的高度";
    }
    for (let i = 0, len = elemMetallicMeansResultDiv.length; i < len; i++) {
      elemMetallicMeansResultDiv[i].style.width = '';
    }
  } else {
    storage.setItem('dispLang', 'en');
    for (let i = 0, len = languageClassNameEn.length; i < len; i++) {
      languageClassNameJa[i].style.display = 'none';
      languageClassNameEn[i].style.display = '';
      languageClassNameCn[i].style.display = 'none';
    }
    if (elem1 !== null) {
      elem1.options[0].textContent = "Calculated Width";
      elem1.options[1].textContent = "Calculated Height";
    }
    for (let i = 0, len = elemMetallicMeansResultDiv.length; i < len; i++) {
      elemMetallicMeansResultDiv[i].style.width = '';
    }
  }
}, false);
function changeLanguage() {
  const elemChangeWidthHeight = document.getElementById('changeWidthHeight');
  const elem1 = elemChangeWidthHeight;
  const elemNum1 = document.getElementById('num1');
  const inputNum = elemNum1.value + "px";
  const elemMetallicMeansResultDiv = document.querySelectorAll('#metallicMeansResult div');
  const elemInputNum1 = document.getElementById('inputNum1');
  const elemLang = document.getElementById('languageSelect');
  if (elemLang.value === "ja") {
    storage.setItem('dispLang', 'ja');
    for (let i = 0, len = languageClassNameJa.length; i < len; i++) {
      if (i === 15) {
        languageClassNameJa[i].style.display = 'inline-block';
        languageClassNameJa[i].style.width = '56px';
        languageClassNameEn[i].style.display = 'none';
        languageClassNameCn[i].style.display = 'none';
      } else {
        languageClassNameJa[i].style.display = 'inline';
        languageClassNameEn[i].style.display = 'none';
        languageClassNameCn[i].style.display = 'none';
      }
    }
    if (elem1 !== null) {
      elem1.options[0].textContent = "計算された幅";
      elem1.options[1].textContent = "計算された高さ";
    }
    for (let i = 0, len = elemMetallicMeansResultDiv.length; i < len; i++) {
      elemMetallicMeansResultDiv[i].style.width = '240px';
    }
    elemInputNum1.innerHTML = "入力値" + inputNum;
  } else if (elemLang.value === "cn") {
    storage.setItem('dispLang', 'cn');
    for (let i = 0, len = languageClassNameCn.length; i < len; i++) {
      if (i === 15) {
        languageClassNameCn[i].style.display = 'inline-block';
        languageClassNameEn[i].style.display = 'none';
        languageClassNameJa[i].style.display = 'none';
      } else {
        languageClassNameCn[i].style.display = 'inline';
        languageClassNameEn[i].style.display = 'none';
        languageClassNameJa[i].style.display = 'none';
      }
    }
    if (elem1 !== null) {
      elem1.options[0].textContent = "计算的宽度";
      elem1.options[1].textContent = "计算的高度";
    }
    for (let i = 0, len = elemMetallicMeansResultDiv.length; i < len; i++) {
      elemMetallicMeansResultDiv[i].style.width = '';
    }
    elemInputNum1.innerHTML = "输入值" + inputNum;
  } else {
    storage.setItem('dispLang', 'en');
    for (let i = 0, len = languageClassNameEn.length; i < len; i++) {
      languageClassNameJa[i].style.display = 'none';
      languageClassNameEn[i].style.display = '';
      languageClassNameCn[i].style.display = 'none';
    }
    if (elem1 !== null) {
      elem1.options[0].textContent = "Calculated Width";
      elem1.options[1].textContent = "Calculated Height";
    }
    for (let i = 0, len = elemMetallicMeansResultDiv.length; i < len; i++) {
      elemMetallicMeansResultDiv[i].style.width = '';
    }
    elemInputNum1.innerHTML = "Input value " + inputNum;
  }
}