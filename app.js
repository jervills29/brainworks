particlesJS("particles-js",{

});
var type = new Typed(".brandText",{
    strings:["Brainworks"],
    typeSpeed:150,
    
})
alert("This is just a personal project, enjoy scrolling!");



window.addEventListener('scroll',function(){
    var navbar = document.querySelector('.navbar');
    var scrolled = window.scrollY;
    if(scrolled > 0){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
})

let countAnimationTriggered = false;

function countUp1(target, duration){
    const increment = target / (duration/16);
    const start = 0
    let currentNumber = start;
    const countElement1 = document.getElementById('counter1');

    const timer = setInterval(()=>{
        countElement1.textContent = Math.floor(currentNumber)+"%";
        if(currentNumber >=target){
            clearInterval(timer);
        }
        currentNumber += increment;
    },16);
}
function countUp2(target, duration){
    const increment = target / (duration/16);
    const start = 0
    let currentNumber = start;
    const countElement2 = document.getElementById('counter2');

    const timer = setInterval(()=>{
        countElement2.textContent = Math.floor(currentNumber);
        if(currentNumber >=target){
            clearInterval(timer);
        }
        currentNumber += increment;
    },16);
}

function countUp3(target, duration){
    const increment = target / (duration/16);
    const start = 0
    let currentNumber = start;
    const countElement3 = document.getElementById('counter3');

    const timer = setInterval(()=>{
        countElement3.textContent = Math.floor(currentNumber);
        if(currentNumber >=target){
            clearInterval(timer);
        }
        currentNumber += increment;
    },16);
}


function handleIntersection(entries, observer){
    entries.forEach((entry)=>{
        if(entry.isIntersecting && !countAnimationTriggered){
            countAnimationTriggered = true;
            const targetNumber1 = 97;
            const targetNumber2 = 50;
            const targetNumber3 = 200;
            const animationDuration = 2000;

            countUp1(targetNumber1, animationDuration);
            countUp2(targetNumber2, animationDuration);
            countUp3(targetNumber3, animationDuration);

            observer.unobserve(entry.target);
        }
    });
}
const observer = new IntersectionObserver(handleIntersection,{threshold:0.5,
});
const sectionElement1 = document.getElementById('counter1');
observer.observe(sectionElement1);
