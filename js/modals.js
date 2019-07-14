'use strict';

(function () {


    let linkMap = document.querySelector('.js-map');
    let linksBuy = document.querySelectorAll('.js-buy');
    let linkWrite = document.querySelector('.js-write-us');
    let mapWindow = document.querySelector('.map-modal');
    let buyWindow = document.querySelector('.modal-add-product');
    let writeWindow = document.querySelector('.write-us-modal');
    let closeMap = document.querySelector('.modal-close-map');
    let closeBuy = document.querySelector('.close-modal-buy');
    let closeWrite = document.querySelector('.modal-write-close');
    
    const openModal = function (modalName, classToAdd) {
        if (!modalName.classList.contains(classToAdd)) {
            modalName.classList.add(classToAdd);
        }
        window.addEventListener('keydown', function (e) {
            if (e.keyCode === 27 && modalName.classList.contains(classToAdd)) {
                closeModal(modalName, classToAdd);
            }
        });
    };


    const closeModal = function (modalName, classToDel) {
        if (modalName.classList.contains(classToDel)) {
            modalName.classList.remove(classToDel);
        }
    };


    linkMap.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(mapWindow, 'show-modal-map');
    });

    closeMap.addEventListener('click', function (e) {
        e.preventDefault();
        closeModal(mapWindow, 'show-modal-map');
    });


    linkWrite.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(writeWindow, 'show-modal-content');
    });

    closeWrite.addEventListener('click', function (e) {
        e.preventDefault();
        closeModal(writeWindow, 'show-modal-content');
    });

    for (let i = 0; i < linksBuy.length; i++) {
        linksBuy[i].addEventListener('click', function (e) {
            e.preventDefault();
            openModal(buyWindow, 'show-modal-content');
        });
    }

    closeBuy.addEventListener('click', function (e) {
        e.preventDefault();
        closeModal(buyWindow, 'show-modal-content');
    });

})();