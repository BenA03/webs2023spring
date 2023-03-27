"use strict";
window.addEventListener('DOMContentLoaded', init);

function init() {
    const yearList = document.getElementsByClassName("page-item");
    for (let i = 0, len = yearList.length; i < len; i++) {
        yearList[i].addEventListener('click', select(), false);
    }
}

function select()
{
    console.log("I have been clicked");
    console.log(this.id);
}