
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([{ "id": 1, "firstname": "Faun", "lastname": "Doggerell", "email": "fdoggerell0@disqus.com", "phone": "2066573285", "address": "337 Rowland Terrace", "city": "Seattle", "state": "WA" },
      { "id": 2, "firstname": "Diane-marie", "lastname": "Hebbron", "email": "dhebbron1@blogger.com", "phone": "8581945854", "address": "8103 Rigney Center", "city": "San Diego", "state": "CA" },
      { "id": 3, "firstname": "Aveline", "lastname": "Silburn", "email": "asilburn2@last.fm", "phone": "6195563077", "address": "31 Mayer Street", "city": "San Diego", "state": "CA" },
      { "id": 4, "firstname": "Zarah", "lastname": "Osmant", "email": "zosmant3@samsung.com", "phone": "2097471557", "address": "342 Portage Road", "city": "Fresno", "state": "CA" },
      { "id": 5, "firstname": "Jeane", "lastname": "Woodroofe", "email": "jwoodroofe4@360.cn", "phone": "6192005045", "address": "48 Fremont Drive", "city": "Chula Vista", "state": "CA" },
      { "id": 6, "firstname": "Dermot", "lastname": "Wackett", "email": "dwackett5@skype.com", "phone": "5091775660", "address": "3 Gina Hill", "city": "Spokane", "state": "WA" },
      { "id": 7, "firstname": "Thayne", "lastname": "Auton", "email": "tauton6@mapquest.com", "phone": "8055395812", "address": "48655 Twin Pines Point", "city": "San Luis Obispo", "state": "CA" },
      { "id": 8, "firstname": "Irvin", "lastname": "Takos", "email": "itakos7@mayoclinic.com", "phone": "5625589631", "address": "43289 Vidon Junction", "city": "Huntington Beach", "state": "CA" },
      { "id": 9, "firstname": "Gretna", "lastname": "Hartus", "email": "ghartus8@aol.com", "phone": "3601000672", "address": "00 Moulton Alley", "city": "Seattle", "state": "WA" },
      { "id": 10, "firstname": "Ronnie", "lastname": "MacKnight", "email": "rmacknight9@noaa.gov", "phone": "8185971149", "address": "9 Bayside Pass", "city": "Glendale", "state": "CA" },
      { "id": 11, "firstname": "Shir", "lastname": "Rumens", "email": "srumensa@sina.com.cn", "phone": "9512706360", "address": "93 Jenna Road", "city": "Riverside", "state": "CA" },
      { "id": 12, "firstname": "Nelle", "lastname": "Moorwood", "email": "nmoorwoodb@discuz.net", "phone": "6192863348", "address": "5152 Farragut Terrace", "city": "San Diego", "state": "CA" },
      { "id": 13, "firstname": "Asia", "lastname": "Signore", "email": "asignorec@tinyurl.com", "phone": "5625081840", "address": "1 Gale Circle", "city": "Anaheim", "state": "CA" },
      { "id": 14, "firstname": "Jamal", "lastname": "Blakely", "email": "jblakelyd@icq.com", "phone": "6618075120", "address": "9636 Thierer Crossing", "city": "Bakersfield", "state": "CA" },
      { "id": 15, "firstname": "Oates", "lastname": "Coffelt", "email": "ocoffelte@google.de", "phone": "2131697004", "address": "1 Dahle Point", "city": "Los Angeles", "state": "CA" },
      { "id": 16, "firstname": "Jorey", "lastname": "Vickar", "email": "jvickarf@noaa.gov", "phone": "3238402038", "address": "0292 Mifflin Park", "city": "Los Angeles", "state": "CA" },
      { "id": 17, "firstname": "Duff", "lastname": "Martinolli", "email": "dmartinollig@nyu.edu", "phone": "6616239118", "address": "8698 Longview Plaza", "city": "Bakersfield", "state": "CA" },
      { "id": 18, "firstname": "Franni", "lastname": "Coombes", "email": "fcoombesh@51.la", "phone": "2534809696", "address": "395 Mariners Cove Terrace", "city": "Tacoma", "state": "WA" },
      { "id": 19, "firstname": "Charissa", "lastname": "Robker", "email": "crobkeri@1688.com", "phone": "2139977453", "address": "450 Badeau Way", "city": "Los Angeles", "state": "CA" },
      { "id": 20, "firstname": "Winonah", "lastname": "Priestner", "email": "wpriestnerj@yale.edu", "phone": "3106747013", "address": "438 Reindahl Road", "city": "Los Angeles", "state": "CA" }
      ]);
    });
};
