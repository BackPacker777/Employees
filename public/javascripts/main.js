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
          this.initials = [];
          FADE.doFade('in', 'title');
          document.getElementById('mainInfo').style.visibility = 'hidden';
          document.getElementById('replacing').style.visibility = 'hidden';
          document.getElementById('certified').style.visibility = 'hidden';
          document.getElementById('certifyButton').style.visibility = 'hidden';
          main.handleNew();
          main.handleReplacement();
          this.handleInitials();
     }

     static handleNew() {
          document.getElementById('startNew').addEventListener('click', () => {
               FADE.doFade('in', 'mainInfo');
               FADE.doFade('out', 'buttons');
          });
     }

     static handleReplacement() {
          document.getElementById('replacement').addEventListener('click', () => {
               if (document.getElementById('replacement').checked) {
                    FADE.doFade('in', 'replacing');
               } else {
                    FADE.doFade('out', 'replacing');
               }
          });
     }

     handleInitials() {
          document.getElementById('initialsLL').addEventListener('change', () => {
               let initials = document.getElementById('initialsLL').value.toUpperCase();
               if (initials === '') {
                    this.initials[0] = null;
               } else if (initials !== 'LL') {
                    alert('Incorrect value. Please try again.');
                    document.getElementById('initialsLL').value = null;
               } else {
                    this.initials[0] = initials;
               }
               console.log(this.initials[0]);
          });
     }
}

window.addEventListener('load', () => {
     new main();
});