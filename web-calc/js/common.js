"use strict";

const storage = sessionStorage;
const lStorage = localStorage;
const languageClassNameJa = document.getElementsByClassName('ja');
const languageClassNameEn = document.getElementsByClassName('en');
const languageClassNameCn = document.getElementsByClassName('cn');
document.addEventListener('DOMContentLoaded', function () {
  const elemLang = document.getElementById('languageSelect');
  if (storage.getItem('dispLang') === "ja") {
    storage.setItem('dispLang', 'ja');
    elemLang.options[1].selected = true;
    elemLang.options[2].selected = false;
  } else if (storage.getItem('dispLang') === "cn") {
    storage.setItem('dispLang', 'cn');
    elemLang.options[1].selected = false;
    elemLang.options[2].selected = true;
  } else {
    storage.setItem('dispLang', 'en');
    elemLang.options[1].selected = false;
    elemLang.options[2].selected = false;
  }
  elemLang.onchange = changeLanguage;
}, false);
document.addEventListener('DOMContentLoaded', function () {
  if (storage.getItem('dispLang') === "ja") {
    for (let i = 0, len = languageClassNameJa.length; i < len; i++) {
      languageClassNameJa[i].style.display = 'inline';
      languageClassNameEn[i].style.display = 'none';
      languageClassNameCn[i].style.display = 'none';
    }
  } else if (storage.getItem('dispLang') === "cn") {
    for (let i = 0, len = languageClassNameCn.length; i < len; i++) {
      languageClassNameCn[i].style.display = 'inline';
      languageClassNameJa[i].style.display = 'none';
      languageClassNameEn[i].style.display = 'none';
    }
  } else {
    for (let i = 0, len = languageClassNameJa.length; i < len; i++) {
      languageClassNameJa[i].style.display = '';
      languageClassNameEn[i].style.display = '';
      languageClassNameCn[i].style.display = '';
    }
  }
}, false);
function changeLanguage() {
  const elemLang = document.getElementById('languageSelect');
  if (elemLang.value === "ja") {
    storage.setItem('dispLang', 'ja');
    for (let i = 0, len = languageClassNameJa.length; i < len; i++) {
      languageClassNameJa[i].style.display = 'inline';
      languageClassNameEn[i].style.display = 'none';
      languageClassNameCn[i].style.display = 'none';
    }
  } else if (elemLang.value === "cn") {
    storage.setItem('dispLang', 'cn');
    for (let i = 0, len = languageClassNameCn.length; i < len; i++) {
      languageClassNameCn[i].style.display = 'inline';
      languageClassNameEn[i].style.display = 'none';
      languageClassNameJa[i].style.display = 'none';
    }
  } else {
    storage.setItem('dispLang', 'en');
    for (let i = 0, len = languageClassNameJa.length; i < len; i++) {
      languageClassNameJa[i].style.display = '';
      languageClassNameEn[i].style.display = '';
      languageClassNameCn[i].style.display = '';
    }
  }
}
function numDP(num) {
  let nod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  let type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "floor";
  if (type === "floor") {
    return Math.floor(num * Math.pow(10, nod)) / Math.pow(10, nod);
  } else if (type === "round") {
    return Math.round(num * Math.pow(10, nod)) / Math.pow(10, nod);
  }
}