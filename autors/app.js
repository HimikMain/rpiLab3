var lang = localStorage.getItem('lang') || 'ru';

var path = window.location.pathname;
var page = path.split("/");
var name = page[page.length - 2];

var language = document.createElement('script');
language.setAttribute('src', `../../lang/locale/${lang}/Autors/${name}.js`);
document.head.appendChild(language);
