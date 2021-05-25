var lang = localStorage.getItem('lang') || 'ru';

fetch(`lang/locale/${lang}/${lang}.js`)
    .then(e=>e.json())
    .then(data=>init(data))
    .catch(e=>console.error(e));

let title = document.querySelector('title');

let h1 = document.createElement('h1');
document.body.appendChild(h1);

let init = (data) => {
    h1.innerText = data['Title'];
    title.text = data['Title'];
}