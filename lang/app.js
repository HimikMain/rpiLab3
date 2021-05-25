var lang = localStorage.getItem('lang') || 'ru';

fetch(`/lang/locale/${lang}/${lang}.js`)
    .then(e=>e.json())
    .then(data=>init(data))
    .catch(e=>console.error(e));

let title = document.querySelector('title');

let init = (data) => {
    title.text = data['Title'];
}
