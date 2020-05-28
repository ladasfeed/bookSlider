let currentSlide = 0;
let arrayOfSlides = Array.from(document.querySelectorAll('.slide'));
let slideLength = arrayOfSlides.length;
let currentRotate = -360;
arrayOfSlides.reverse();
arrayOfSlides.forEach((item, index) => {
    item.style.zIndex = -index;
})


 function slideNext() {
    if (currentSlide==slideLength) {
         arrayOfSlides.forEach((item, index) => {
            item.style.zIndex = -index;
        })
        currentRotate-=360;
        currentSlide=0;
    } 
   

    arrayOfSlides[currentSlide].style.transform = `rotateY(${currentRotate}deg)`;
    setTimeout(()=>{
        arrayOfSlides[currentSlide-1].style.zIndex = -slideLength-currentSlide;
        console.log(currentSlide-1)
    }, 50)
    currentSlide++;
}