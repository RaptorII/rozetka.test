
'use strict';

window.onload = function () {

    document.getElementById('loader').classList.add('loaded_hiding');

    let imagesCount = document.getElementsByTagName('img');
    let loader = document.getElementById('loader');
    let percent = 100 / imagesCount.length;
    let progress = 0;

    for ( let i = 0; i < imagesCount.length; i++ ) {

        progress += percent;

        loader.innerHTML='<div class="progress">' + '<strong> ' + Math.floor(progress) + '% </strong></div>';

        let img = new Image();
        /*img.onload = function() {
            console.log('load' + imagesCount[i].src );
        };*/
        img.src = imagesCount[i].src;
        img.onload;

        //console.log(progress);
        if (progress >= 100) {
            console.log('Load was performed.');
        }
    }

    window.setTimeout(function () {
        document.getElementById('loader').classList.remove('loaded_hiding');
        document.getElementById('loader').classList.add('loaded');
    }, 1000);

};

