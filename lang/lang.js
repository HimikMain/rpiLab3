const select = document.querySelector('select');

const allLang = ['en', 'ru'];

select.addEventListener('change', changeUrlLanguage);

var lang = localStorage.getItem('lang') || 'ru';

document.querySelector('#cngLng').value = lang;

function changeUrlLanguage() {
    lang = select.value;
    localStorage.setItem('lang', lang);
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)){
        location.href = window.location.pathname + '#ru';
        location.reload();
    }
    select.value = hash;
}

changeLanguage();