"use strict";
window.addEventListener('DOMContentLoaded', init);

function init() {
    const yearList = document.getElementsByClassName("page-item");
    for (let i = 0, len = yearList.length; i < len; i++) {
        yearList[i].addEventListener('click', select, false);
    }
    const show = document.getElementById("2022");
    show.style.display = 'block';
}

function select(e)
{
    const yearList = document.getElementsByClassName("page-item");
    const displays = document.getElementsByClassName("collapse-1");

    for (let i = 0, len = displays.length; i < len; i++) {
        displays[i].style.display = 'none';
    }

    let thingToShow;
    let target;
    for (let i = 0, len = yearList.length; i < len; i++) {
        if (yearList[i].id == this.id)
        {
            yearList[i].classList.add('year-selected');
            target = this.id.substring(1);
            thingToShow = document.getElementById(target);
            thingToShow.style.display = 'block';
        }
        else
        {
            yearList[i].classList.remove('year-selected');
        }
    }
}