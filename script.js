// header toggle
let MenuBtn= document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


// typing effect
let typed = new Typed('#auto-input',{
    strings: ['Front-End Developer!','Web Designer!'],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 100,
    loop:true
})

document.querySelectorAll('iframe').forEach((el) => {
  if (el.getAttribute('referrerpolicy') === 'no-referrer-when-downgrade') {
    el.classList.add('custom-iframe');
  }
});
