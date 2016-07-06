/**
 *   @author Bates, Howard [ hbates@northmen.org ]
 *   @version 0.0.1
 *   @summary http server: HPA Forms || Created: 05.25.2016
 *   @todo
 */

"use strict";

const FS = require ('fs'),
     DATASTORE = require('nedb'),
     EJS = require('ejs');

let DB = new DATASTORE({ filename: './data/forms_db.json', autoload: true });

class DataHandler {
	constructor(whichAjax, data, req, res) {
          this.file = null;
          if (whichAjax == 0) {

          }
	}

     loadData(callback) {
          DB.find({}, (err, docs) => {
               if (docs.length != null) {
                    callback(docs);
               }
          });
     }

     queryData(data) {
          DB.findOne({ _id: data.id }, (err, docs) => {
               if (docs == null) {
                    this.addData(data);
               } else {
                    this.updateData(data);
               }
          });
     }

     updateData(data) {
          DB.update({ _id: data.id }, { lastName: data.lastName, firstName: data.firstName, date: data.date
          }, { upsert: true });
     }

     addData(data) {
          delete data.id;  // remove id field out of JSON parameter
          DB.insert(data);
      }
}

module.exports = DataHandler;