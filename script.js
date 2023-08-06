//---------- portfolio button -----------

function scrollPortfolio() {
    document.body.scrollTop = 825;
    document.documentElement.scrollTop = 825;
}

//---------- mobile navigation menu -----------

function openNav() {
    document.getElementById("mobile-sidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mobile-sidenav").style.width = "0";
  }


//---------- carousel 1 -----------

const trackCarousel1 = document.querySelector('.carousel-track-carousel1');
const nextButtonCarousel1 = document.querySelector('.carousel-button-right-carousel1');
const prevButtonCarousel1 = document.querySelector('.carousel-button-left-carousel1');

//index of the current slide
var indexCarousel1 = 0;
prevButtonCarousel1.style.visibility = "hidden";

//store the slides in an array
const slidesCarousel1 = Array.from(trackCarousel1.children);

//get the size of each slide
var slideWidthCarousel1 = slidesCarousel1[0].getBoundingClientRect().width;

const moveToSlideCarousel1 = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';

    currentSlide.classList.remove('current-slide-carousel1');
    targetSlide.classList.add('current-slide-carousel1');
}


const setSlidePositionCarousel1 = (slide, index, slideLength) => {
    slideLength = slideWidthCarousel1 * index;
    slide.style.left = slideLength + 'px';
};
slidesCarousel1.forEach(setSlidePositionCarousel1);

window.addEventListener('resize', windowResizeCarousel1);

function windowResizeCarousel1() {

    slideWidthCarousel1 = slidesCarousel1[0].getBoundingClientRect().width;
    slidesCarousel1.forEach(setSlidePositionCarousel1);

    //on window resize, go to the previous slide so the slides don't only show half at the border

    if (indexCarousel1 > 0) {
        indexCarousel1 = indexCarousel1 - 1;

        const currentSlide = trackCarousel1.querySelector('.current-slide-carousel1');
        const prevSlide = currentSlide.previousElementSibling;
    
        moveToSlideCarousel1(trackCarousel1, currentSlide, prevSlide);

        indexCarousel1 = 0;
        prevButtonCarousel1.style.visibility = "hidden";
        nextButtonCarousel1.style.visibility = "visible";
    }
}

prevButtonCarousel1.addEventListener('click', e => {
    if (indexCarousel1 > 0) {
        indexCarousel1 = indexCarousel1 - 1;

        if(window.innerWidth > 1100) {
            if (indexCarousel1 < slidesCarousel1.length - 3) {
                nextButtonCarousel1.style.visibility = "visible";
            }
        }
        else {
            if (indexCarousel1 < slidesCarousel1.length - 1) {
                nextButtonCarousel1.style.visibility = "visible";
            }
        }

        if (indexCarousel1 == 0) {
            prevButtonCarousel1.style.visibility = "hidden";
        }

        const currentSlide = trackCarousel1.querySelector('.current-slide-carousel1');
        const prevSlide = currentSlide.previousElementSibling;
    
        moveToSlideCarousel1(trackCarousel1, currentSlide, prevSlide);
    }
});

nextButtonCarousel1.addEventListener('click', e => {


    if(window.innerWidth > 1100) {
        if (indexCarousel1 <= slidesCarousel1.length - 3) { //once .current-slide is the left positioned visible slide, stop the next button
            indexCarousel1 = indexCarousel1 + 1;

            if (indexCarousel1 > 0) {
                prevButtonCarousel1.style.visibility = "visible";
            }

            if (indexCarousel1 ==  slidesCarousel1.length - 3) {
                nextButtonCarousel1.style.visibility = "hidden";
            }


            const currentSlide = trackCarousel1.querySelector('.current-slide-carousel1');
            const nextSlide = currentSlide.nextElementSibling;

            moveToSlideCarousel1(trackCarousel1, currentSlide, nextSlide);
        }
    }
    else {
        if (indexCarousel1 <= slidesCarousel1.length - 1) { //once .current-slide is the left positioned visible slide, stop the next button
            indexCarousel1 = indexCarousel1 + 1;

            if (indexCarousel1 > 0) {
                prevButtonCarousel1.style.visibility = "visible";
            }

            if (indexCarousel1 ==  slidesCarousel1.length - 1) {
                nextButtonCarousel1.style.visibility = "hidden";
            }


            const currentSlide = trackCarousel1.querySelector('.current-slide-carousel1');
            const nextSlide = currentSlide.nextElementSibling;

            moveToSlideCarousel1(trackCarousel1, currentSlide, nextSlide);
        }
    }
    
});


//---------- carousel 2 -----------

const trackCarousel2 = document.querySelector('.carousel-track-carousel2');
const nextButtonCarousel2 = document.querySelector('.carousel-button-right-carousel2');
const prevButtonCarousel2 = document.querySelector('.carousel-button-left-carousel2');

//index of the current slide
var indexCarousel2 = 0;
prevButtonCarousel2.style.visibility = "hidden";

//store the slides in an array
const slidesCarousel2 = Array.from(trackCarousel2.children);

//get the size of each slide
var slideWidthCarousel2 = slidesCarousel2[0].getBoundingClientRect().width;

const moveToSlideCarousel2 = (track, currentSlide, targetSlide) => {

    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';

    currentSlide.classList.remove('current-slide-carousel2');
    targetSlide.classList.add('current-slide-carousel2');
}

const setSlidePositionCarousel2 = (slide, index, slideLength) => {
    slideLength = slideWidthCarousel2 * index;
    slide.style.left = slideLength + 'px';
};
slidesCarousel2.forEach(setSlidePositionCarousel2);

window.addEventListener('resize', windowResizeCarousel2);

function windowResizeCarousel2() {

    slideWidthCarousel2 = slidesCarousel2[0].getBoundingClientRect().width;
    slidesCarousel2.forEach(setSlidePositionCarousel2);

    //on window resize, go to the previous slide so the slides don't only show half at the border

    if (indexCarousel2 > 0) {
        indexCarousel2 = indexCarousel2 - 1;

        const currentSlide = trackCarousel2.querySelector('.current-slide-carousel2');
        const prevSlide = currentSlide.previousElementSibling;
    
        moveToSlideCarousel2(trackCarousel2, currentSlide, prevSlide);

        indexCarousel2 = 0;
        prevButtonCarousel2.style.visibility = "hidden";
        nextButtonCarousel2.style.visibility = "visible";
    } 
}

prevButtonCarousel2.addEventListener('click', e => {

    if (indexCarousel2 > 0) {
        indexCarousel2 = indexCarousel2 - 1;

        if(window.innerWidth > 1100) { 
            if (indexCarousel2 < slidesCarousel2.length - 3) {
                nextButtonCarousel2.style.visibility = "visible";
            }
        }
        else {
            if (indexCarousel2 < slidesCarousel2.length - 1) {
                nextButtonCarousel2.style.visibility = "visible";
            }
        }


        //if index = first carousel item, hide the previous button, else show it
        if (indexCarousel2 == 0) {
            prevButtonCarousel2.style.visibility = "hidden";
        }

        const currentSlide = trackCarousel2.querySelector('.current-slide-carousel2');
        const prevSlide = currentSlide.previousElementSibling;
    
        moveToSlideCarousel2(trackCarousel2, currentSlide, prevSlide);
    } 


});

nextButtonCarousel2.addEventListener('click', e => {


    if(window.innerWidth > 1100) {
        if (indexCarousel2 <= slidesCarousel2.length - 3) { //once .current-slide is the left positioned visible slide, stop the next button
            indexCarousel2 = indexCarousel2 + 1;

            if (indexCarousel2 > 0) {
                prevButtonCarousel2.style.visibility = "visible";
            }

            //if index = last carousel item, hide the next button, else show it
            if (indexCarousel2 ==  slidesCarousel2.length - 3) {
                nextButtonCarousel2.style.visibility = "hidden";
            } 

            const currentSlide = trackCarousel2.querySelector('.current-slide-carousel2');
            const nextSlide = currentSlide.nextElementSibling;

            moveToSlideCarousel2(trackCarousel2, currentSlide, nextSlide);
        }
    }
    else {
        if (indexCarousel2 <= slidesCarousel2.length - 1) { //once .current-slide is the left positioned visible slide, stop the next button
            indexCarousel2 = indexCarousel2 + 1;

            if (indexCarousel2 > 0) {
                prevButtonCarousel2.style.visibility = "visible";
            }

            //if index = last carousel item, hide the next button, else show it
            if (indexCarousel2 ==  slidesCarousel2.length - 1) {
                nextButtonCarousel2.style.visibility = "hidden";
            } 

            const currentSlide = trackCarousel2.querySelector('.current-slide-carousel2');
            const nextSlide = currentSlide.nextElementSibling;

            moveToSlideCarousel2(trackCarousel2, currentSlide, nextSlide);
        }
    }
    
});


//---------- carousel 3 -----------

const trackCarousel3 = document.querySelector('.carousel-track-carousel3');
const nextButtonCarousel3= document.querySelector('.carousel-button-right-carousel3');
const prevButtonCarousel3= document.querySelector('.carousel-button-left-carousel3');

//index of the current slide
var indexCarousel3 = 0;
prevButtonCarousel3.style.visibility = "hidden";

//store the slides in an array
const slidesCarousel3 = Array.from(trackCarousel3.children);

//get the size of each slide
var slideWidthCarousel3 = slidesCarousel3[0].getBoundingClientRect().width;


const moveToSlideCarousel3 = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';

    currentSlide.classList.remove('current-slide-carousel3');
    targetSlide.classList.add('current-slide-carousel3');
}

const setSlidePositionCarousel3 = (slide, index, slideLength) => {
    slideLength = slideWidthCarousel3 * index;
    slide.style.left = slideLength + 'px';
};
slidesCarousel3.forEach(setSlidePositionCarousel3);

window.addEventListener('resize', windowResizeCarousel3);

function windowResizeCarousel3() {

    slideWidthCarousel3 = slidesCarousel3[0].getBoundingClientRect().width;
    slidesCarousel3.forEach(setSlidePositionCarousel3);

    //on window resize, go to the previous slide so the slides don't only show half at the border

    if (indexCarousel3 > 0) {
        indexCarousel3 = indexCarousel3 - 1;

        const currentSlide = trackCarousel3.querySelector('.current-slide-carousel3');
        const prevSlide = currentSlide.previousElementSibling;
    
        moveToSlideCarousel3(trackCarousel3, currentSlide, prevSlide);

        indexCarousel3 = 0;
        prevButtonCarousel3.style.visibility = "hidden";
        nextButtonCarousel3.style.visibility = "visible";
    }
}

prevButtonCarousel3.addEventListener('click', e => {
    if (indexCarousel3 > 0) {
        indexCarousel3 = indexCarousel3 - 1;

        if(window.innerWidth > 1100) {
            if (indexCarousel3 < slidesCarousel3.length - 3) {
                nextButtonCarousel3.style.visibility = "visible";
            }
        }
        else {
            if (indexCarousel3 < slidesCarousel3.length - 1) {
                nextButtonCarousel3.style.visibility = "visible";
            }
        }

        if (indexCarousel3 == 0) {
            prevButtonCarousel3.style.visibility = "hidden";
        }

        const currentSlide = trackCarousel3.querySelector('.current-slide-carousel3');
        const prevSlide = currentSlide.previousElementSibling;
    
        moveToSlideCarousel3(trackCarousel3, currentSlide, prevSlide);
    }    
});

nextButtonCarousel3.addEventListener('click', e => {
    
    if(window.innerWidth > 1100) {
        if (indexCarousel3 <= slidesCarousel3.length - 3) { //once .current-slide is the left positioned visible slide, stop the next button
            indexCarousel3 = indexCarousel3 + 1;

            if (indexCarousel3 > 0) {
                prevButtonCarousel3.style.visibility = "visible";
            }

            if (indexCarousel3 ==  slidesCarousel3.length - 3) {
                nextButtonCarousel3.style.visibility = "hidden";
            }

            const currentSlide = trackCarousel3.querySelector('.current-slide-carousel3');
            const nextSlide = currentSlide.nextElementSibling;

            moveToSlideCarousel3(trackCarousel3, currentSlide, nextSlide);
        }
    }
    else {
        if (indexCarousel3 <= slidesCarousel3.length - 1) { //once .current-slide is the left positioned visible slide, stop the next button
            indexCarousel3 = indexCarousel3 + 1;

            if (indexCarousel3 > 0) {
                prevButtonCarousel3.style.visibility = "visible";
            }

            if (indexCarousel3 ==  slidesCarousel3.length - 1) {
                nextButtonCarousel3.style.visibility = "hidden";
            }

            const currentSlide = trackCarousel3.querySelector('.current-slide-carousel3');
            const nextSlide = currentSlide.nextElementSibling;

            moveToSlideCarousel3(trackCarousel3, currentSlide, nextSlide);
        }
    }
    
});



//---------- modals -----------

var modal = document.getElementById('slides-modal')
var images = document.getElementsByClassName('carousel-image');
var modalImg = document.getElementById("modal-image");
var captionText = document.getElementById("caption");


// Go through all of the images
for (var i = 0; i < images.length; i++) {
    var img = images[i];
    //attach click listener
    img.onclick = function(evt) {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}


//nice