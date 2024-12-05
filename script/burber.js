let burb = document.querySelector('.burger');

burb.addEventListener('click', ()=>{
    document.querySelector('.header__mobile-nav').classList.toggle('active');
});