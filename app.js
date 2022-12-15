const slides = document.querySelectorAll('.slide');
for(let slide of slides){
    slide.addEventListener('click', () => {
        slide.classList.add('active');
        setTimeout(() => {clearActiveClasses()}, 2000);
    });
}
function clearActiveClasses(){
    slides.forEach((slide)=> {
    slide.classList.remove('active');
    });
}
