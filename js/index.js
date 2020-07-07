// Your code goes here
// Short notattion for document object
const doc = document;

// Mouseover listener

const header = doc.querySelector('.main-navigation');

// Bolden up our header to make it more prominent

header.addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.style.fontWeight = 'bold';
});


// Keydown listener

// Remind people to pay attention and scroll

doc.addEventListener('keydown', (event) => {
    const keydown = event.key;
    alert('Typing any keys while reading our page including: ' + keydown + ' is strictly prohibited. Yes, even ' + keydown + '.');
});



const scrollPixelNav = doc.createElement('span');
scrollPixelNav.innerHTML = 0;
scrollPixelNav.style.fontSize = '1.6rem';
// onst scrollPixelNav = doc.createElement('span');
// scrollPixelNav.innerHTML = 0;


// scrollPixelNav.style.cssFloat = 'right';
let scrollPixelDescription = doc.createElement('span');
scrollPixelDescription.innerHTML = 'Scroll Pixel Counter: '
scrollPixelDescription.style.fontSize = '1.6rem';

const body = doc.querySelector('body');
body.addEventListener('wheel', (event) => {
    event.stopPropagation;
    
    scrollPixelNav.innerHTML++;
});


doc.querySelector('.main-navigation').append(scrollPixelDescription)
doc.querySelector('.main-navigation').append(scrollPixelNav)

// Load Event Listener

window.addEventListener("load", function(event) {
    setTimeout(() => (alert("Are you ready? Because this webpage is.."), 0));
});

// Focus Resize Listener
window.addEventListener('resize', (event) => {
    console.log(event);
    alert('No cheating here. We know if you are rezing');
});
// Double Click Listener

var footerColor = document.querySelector('footer');


footerColor.addEventListener('dblclick', (event) => {
    
    event.target.style.backgroundColor = 'red';

});
// Scroll Listener

const funBox = doc.createElement('div');
funBox.innerHTML = 'funbox';
funBox.style.display = 'none';
header.appendChild(funBox);

window.addEventListener('scroll', (event) => {
    setTimeout(() => (funBox.className = 'scroll-active'), 1000);
});
// Click
doc.querySelectorAll('.btn').forEach((button)=>{
    button.addEventListener('click', () =>{
    button.style.background = 'blue';
    button.style.color = 'white';

    //preventDefault
    button.preventDefault();
});
// MouseEnter
button.addEventListener('mouseenter', ()=>{
    button.style.background='black';
    button.style.color = 'white';
});
//mouseLeave
button.addEventListener('mouseleave', ()=>{
    button.style.background = 'white';
    button.style.color = 'black';
})

})









//Propagation

const topElement = doc.querySelector('header');
const bottomElement = doc.querySelector('.nav-container');


bottomElement.addEventListener('click', (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = 'navy';
});

topElement.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
});







