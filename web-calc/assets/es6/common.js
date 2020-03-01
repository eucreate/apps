var strage = sessionStorage;

document.addEventListener('DOMContentLoaded', function() {
  var elemLang = document.getElementById('languageSelect');
  
  if (strage.getItem('dispLang') === "ja") {
    strage.setItem('dispLang', 'ja');
    elemLang.options[1].selected = true;
  } else {
    strage.setItem('dispLang', 'en');
    elemLang.options[1].selected = false;
  }
  
  elemLang.onchange = changeLanguage;
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var languageClassNameJa = document.getElementsByClassName('ja');
  var languageClassNameEn = document.getElementsByClassName('en');
  
  if (strage.getItem('dispLang') === "ja") {
    for (var i = 0, len = languageClassNameJa.length; i < len; i++) {
      languageClassNameJa[i].style.display = 'inline';
      languageClassNameEn[i].style.display = 'none';
    }
  } else {
    for (var i = 0, len = languageClassNameJa.length; i < len; i++) {
      languageClassNameJa[i].style.display = '';
      languageClassNameEn[i].style.display = '';
    }
  }
}, false);

function changeLanguage(){
  var elemLang = document.getElementById('languageSelect');
  var languageClassNameJa = document.getElementsByClassName('ja');
  var languageClassNameEn = document.getElementsByClassName('en');

  if (elemLang.value === "ja") {
    strage.setItem('dispLang', 'ja');
    for (var i = 0, len = languageClassNameJa.length; i < len; i++) {
      languageClassNameJa[i].style.display = 'inline';
      languageClassNameEn[i].style.display = 'none';
    }
  } else {
    strage.setItem('dispLang', 'en');
    for (var i = 0, len = languageClassNameJa.length; i < len; i++) {
      languageClassNameJa[i].style.display = '';
      languageClassNameEn[i].style.display = '';
    }
  }
}

function numDP(num, nod = 4, type = "floor") {
  if (type === "floor") {
    return Math.floor((num * Math.pow(10, nod))) / Math.pow(10, nod);
  } else if (type === "round") {
    return Math.round((num * Math.pow(10, nod))) / Math.pow(10, nod);
  }
}