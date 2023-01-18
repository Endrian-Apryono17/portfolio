const menu = document.querySelector('.menu input');
const change = document.querySelector('.menu');
const nav = document.querySelector('.konten .nav');

menu.addEventListener('click', function() {
    change.classList.toggle('change');
    nav.classList.toggle('slide');
})

// mode
const mode = document.querySelector('.nav li .mode');

mode.addEventListener('click', function() {
    document.body.classList.toggle('ubah');
    mode.classList.toggle('warna');
})