document.querySelector('#description').oninput = function (){
    let val = this.value.trim();
    let searchItems = document.querySelectorAll('.description li');
    if(val != ''){
        searchItems.forEach(function (element){
            if (element.innerText.toLowerCase().search(val.toLowerCase()) == - 1) {
                element.classList.add('hide');
            }
            else
            {
                element.classList.remove('hide');
            }
        });
    }
    else
    {
        searchItems.forEach(function (element){
            element.classList.remove('hide');
        });
    }
}