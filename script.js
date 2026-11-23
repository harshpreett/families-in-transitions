const menuButton=document.querySelector('.menu');const navigation=document.querySelector('header nav');if(menuButton&&navigation){menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));navigation.classList.toggle('open',!open);});}

