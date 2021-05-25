var lang = localStorage.getItem('lang') || 'ru';

var path = window.location.pathname;
var page = path.split("/").pop();

var language = document.createElement('script');
if (page == 'index.html') {
    language.setAttribute('src', `lang/locale/${lang}/${lang}.js`);
} else if (page == 'index2.html') {
    language.setAttribute('src', `lang/locale/${lang}/${lang}Index2.js`);
}
document.head.appendChild(language);
