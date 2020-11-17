new WOW().init();



$(".owl-carousel").owlCarousel({
    nav: true,
    dots: true,
    items: 1,
    loop: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
});



function inViewport(element) {

    let rect = element.getBoundingClientRect();

    return !(rect.top > innerHeight || rect.bottom < 0);

}

let progress = document.getElementById('demoprogressbar');

let runnedAlready = false;


document.addEventListener('scroll', event => {


    if (inViewport(progress) && !runnedAlready) {

        runnedAlready = true;

        $('#demoprogressbar').LineProgressbar({
            percentage: 92,
            duration: 2500,
            height: '5px'
        });

        $('#demoprogressbar1').LineProgressbar({
            percentage: 70,
            duration: 2500,
            height: '5px'
        });

        $('#demoprogressbar2').LineProgressbar({
            percentage: 60,
            duration: 2500,
            height: '5px'
        });

    }

});



let heroHeading = document.getElementsByClassName('hero-heading');
let arrowRight = document.getElementsByClassName('owl-next');
let arrowLeft = document.getElementsByClassName('owl-prev');
let owlDots = document.getElementsByClassName('owl-dots');


// Right Arrow

for (let i = 0; i < arrowRight.length; i++) {

    arrowRight[i].onclick = function () {


        for (let j = 0; j < heroHeading.length; j++) {

            heroHeading[j].classList.remove('animate-heading');

            setTimeout(function () {
                heroHeading[j].classList.add('animate-heading');

            }, 100);

        }


    }
}

// left Arrow

for (let i = 0; i < arrowLeft.length; i++) {

    arrowLeft[i].onclick = function () {


        for (let j = 0; j < heroHeading.length; j++) {

            heroHeading[j].classList.remove('animate-heading');

            setTimeout(function () {
                heroHeading[j].classList.add('animate-heading');

            }, 100);

        }

    }
}

// Dots

for (let i = 0; i < owlDots.length; i++) {

    owlDots[i].onclick = function () {


        for (let j = 0; j < heroHeading.length; j++) {

            heroHeading[j].classList.remove('animate-heading');

            setTimeout(function () {
                heroHeading[j].classList.add('animate-heading');

            }, 100);

        }

    }
}









