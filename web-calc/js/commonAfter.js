var elemLang = document.getElementById('languageSelect');
var languageClassNameJa = document.getElementsByClassName('ja');
var languageClassNameEn = document.getElementsByClassName('en');

if (strage.getItem('dispLang') === "ja") {
  strage.setItem('dispLang', 'ja');
  elemLang.options[1].selected = true;
} else {
  strage.setItem('dispLang', 'en');
  elemLang.options[1].selected = false;
}

elemLang.onchange = changeLanguage;