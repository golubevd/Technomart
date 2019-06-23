'use strict';
(function () {

    let linksBuy = document.querySelectorAll('.js-buy');
    let buyWindow = document.querySelector('.modal-add-product');
    let closeBuy = document.querySelector('.close-modal-buy');

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