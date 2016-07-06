/**
 *   @author Bates, Howard [ hbates@northmen.org ]
 *   @version 0.0.1
 *   @summary http server: XX || Created: XX.XX.2016
 *   @todo Everything!
 */

"use strict";

const FADE = require('./FadeStuff');

class main {
     constructor() {
          FADE.doFade('in', 'title');
          FADE.doFade('out', 'mainInfo');
          main.handleNew();
     }

     static handleNew() {
          document.getElementById('startNew').addEventListener('click', () => {
               FADE.doFade('in', 'mainInfo');
          });
     }
}

window.addEventListener('load', () => {
     new main();
});