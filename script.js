let footer = document.querySelector('footer');
let attribution = document.querySelector('.attribution');
let arrow = document.querySelector('#arrow');

footer.addEventListener('click', e => {
    if (attribution.style.display === 'block') {
        attribution.style.display = 'none';
        arrow.style.transform = 'rotate(-90deg)';
    }else{
        attribution.style.display = 'block';
        arrow.style.transform = 'rotate(0deg)';
    }
})