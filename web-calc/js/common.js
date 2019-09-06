var strage = sessionStorage;

window.onload = function(){
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
}

function changeLanguage(){
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
