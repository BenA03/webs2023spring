"use strict";
window.addEventListener('DOMContentLoaded', init);

function init() {
    const yearList = document.getElementsByClassName("page-item");
    for (let i = 0, len = yearList.length; i < len; i++) {
        yearList[i].addEventListener('click', select, false);
    }
}

function select(e)
{
    const yearList = document.getElementsByClassName("page-item");
    for (let i = 0, len = yearList.length; i < len; i++) {
        if (yearList[i].id == this.id)
        {
            yearList[i].classList.add('year-selected');
        }
        else
        {
            yearList[i].classList.remove('year-selected');
        }
    }
}