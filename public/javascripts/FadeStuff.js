/*  AUTHOR: hbates@northmen.org
 *  VERSION: 1.0
 *  CREATED: 12.01.2015
 */

"use strict";

class FadeStuff {
    constructor() {

    }

    static doFade(direction, fadeWhat) {
        //http://www.chrisbuttery.com/articles/fade-in-fade-out-with-javascript/
        let div = document.getElementById(fadeWhat);
        if (direction == "in") {
            div.style.opacity = 0;
            div.style.visibility = 'visible';
            (function fade() {
                let val = parseFloat(div.style.opacity);
                if (!((val += .01) >= 1)) {
                    div.style.opacity = val;
                    requestAnimationFrame(fade);
                }
            })();
        } else if (direction == "out") {
            div.style.opacity = 1;
            (function fade() {
                if ((div.style.opacity -= .01) <= 0) {
                    div.style.visibility = 'hidden';
                } else {
                    requestAnimationFrame(fade);
                }
            })();
        }
    }
}

module.exports = FadeStuff;