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
          this.setInitials();
          this.done = false;
          FADE.doFade('in', 'title');
          document.getElementById('mainInfo').style.visibility = 'hidden';
          document.getElementById('replacing').style.visibility = 'hidden';
          document.getElementById('certified').style.visibility = 'hidden';
          document.getElementById('certifyButton').style.visibility = 'hidden';
          main.handleNew();
          main.handleReplacement();
          this.handleInitials();
     }

     setInitials() {
          this.initials[0] = null;
          this.initials[1] = null;
          this.initials[2] = null;
          this.initials[3] = null;
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
          const LORI_LEWIS = 'LL';
          const HOWARD_BATES = 'HB';
          const TARA_MOORE = 'TM';
          const NICOLE_MORROW = 'NM';
          document.getElementById('initialsLL').addEventListener('change', () => {
               let initials = document.getElementById('initialsLL').value.toUpperCase();
               if (initials == '') {
                    this.initials[0] = null;
               } else if (initials == LORI_LEWIS) {
                    this.initials[0] = initials;
               } else {
                    alert('Incorrect value. Please try again.');
                    document.getElementById('initialsLL').value = null;
               }
               this.checkDone();
          });
          document.getElementById('initialsHB').addEventListener('change', () => {
               let initials = document.getElementById('initialsHB').value.toUpperCase();
               if (initials === '') {
                    this.initials[1] = null;
               } else if (initials === HOWARD_BATES) {
                    this.initials[1] = initials;
               } else {
                    alert('Incorrect value. Please try again.');
                    document.getElementById('initialsHB').value = null;
               }
               this.checkDone();
          });
          document.getElementById('initialsTM').addEventListener('change', () => {
               let initials = document.getElementById('initialsTM').value.toUpperCase();
               if (initials === '') {
                    this.initials[2] = null;
               } else if (initials === TARA_MOORE) {
                    this.initials[2] = initials;
               } else {
                    alert('Incorrect value. Please try again.');
                    document.getElementById('initialsTM').value = null;
               }
               this.checkDone();
          });
          document.getElementById('initialsNM').addEventListener('change', () => {
               let initials = document.getElementById('initialsNM').value.toUpperCase();
               if (initials === '') {
                    this.initials[3] = null;
               } else if (initials === NICOLE_MORROW) {
                    this.initials[3] = initials;
               } else {
                    alert('Incorrect value. Please try again.');
                    document.getElementById('initialsNM').value = null;
               }
               this.checkDone();
          });
     }

     checkDone() {
          for (let i = 0; i < this.initials.length; i++) {
               if (this.initials[i] === '' || this.initials[i] === null) {
                    this.done = false;
                    break;
               } else {
                    this.done = true;
               }
          }
          if (this.done === true) {
               FADE.doFade('in', 'certified');
          }
     }
}

window.addEventListener('load', () => {
     new main();
});