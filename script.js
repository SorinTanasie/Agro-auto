// page loader

$(window).on('load',function(){
    $(".page-loader").fadeOut('slow');
})

//navbar

body = document.querySelector('body');
menu = document.querySelector('.checkbtn')
overlay = document.querySelector('.nav')

menu.addEventListener('click',(e)=>{
    body.classList.toggle('open')
})

window.addEventListener('click',(e)=>{
    console.log(e.target);

    if(e.target===overlay&&body.className==="open"){
        body.classList.remove('open');
    }
});
// carusel

let li = document.querySelectorAll('.item');
let index = 0;
console.log(li);
const moveSlide = (increase) => {
    if(index + increase > li.length) {
        index = 0;
    }
    console.log(index);
    index = index + increase;
    console.log(index);
    index = Math.min(Math.max(index, 0), li.length - 1);
    li[index].scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});
}
let next = document.querySelector('#next');
next.addEventListener('click', () => {moveSlide(+1)});
let prev = document.getElementById('prev');
prev.addEventListener('click', () => moveSlide(-1));

//switch

clientiText = document.querySelector('.sectiune-clienti');
furnizoriText = document.querySelector('.sectiune-furnizori');
clienti =document.querySelector('.clienti');
furnizori = document.querySelector('.furnizori');

clienti.addEventListener('click', ()=>{
    display(clienti,furnizori,clientiText,furnizoriText);
})
furnizori.addEventListener('click', ()=>{
    display(furnizori,clienti,furnizoriText,clientiText);
})


display = (sectiune1,sectiune2,sectiune1Text, sectiune2Text) =>{
    sectiune1Text.classList.remove('d-none')
    sectiune2Text.classList.add('d-none');
    sectiune2.classList.remove('switch-active');
    sectiune1.classList.add('switch-active')
}


// counter
const counterAnimation =() =>{
    const counters = document.querySelectorAll('.counter');
    const speed = 100;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 2);
            } else {
                counter.innerText = target;
            }
        };

	updateCount();
});
}

let i=0;
window.addEventListener('scroll', function() {
    const pagePosition= document.querySelector('.sectiune-mica-numbers')
    const h = window.innerHeight;

    if(this.window.pageYOffset + h >= pagePosition.offsetTop &&i===0){
        counterAnimation();
        i++;
    }
});

