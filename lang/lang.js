const select = document.querySelector('select');

const allLang = ['en', 'ru'];

select.addEventListener('change', changeUrlLanguage);

var lang = localStorage.getItem('lang') || 'ru';

document.querySelector('#cngLng').value = lang;

function changeUrlLanguage() {
    lang = select.value;
    localStorage.setItem('lang', lang);
    location.reload();
}

