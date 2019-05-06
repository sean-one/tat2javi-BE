
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([{ "id": 1, "firstname": "Faun", "lastname": "Doggerell", "email": "fdoggerell0@disqus.com", "phone": "2066573285", "address": "337 Rowland Terrace", "city": "Seattle", "state": "WA" },
      { "id": 2, "firstname": "Diane-marie", "lastname": "Hebbron", "email": "dhebbron1@blogger.com", "phone": "8581945854", "address": "8103 Rigney Center", "city": "San Diego", "state": "CA" },
      { "id": 3, "firstname": "Aveline", "lastname": "Silburn", "email": "asilburn2@last.fm", "phone": "6195563077", "address": "31 Mayer Street", "city": "San Diego", "state": "CA" },
      { "id": 4, "firstname": "Zarah", "lastname": "Osmant", "email": "zosmant3@samsung.com", "phone": "2097471557", "address": "342 Portage Road", "city": "Fresno", "state": "CA" },
      { "id": 5, "firstname": "Jeane", "lastname": "Woodroofe", "email": "jwoodroofe4@360.cn", "phone": "6192005045", "address": "48 Fremont Drive", "city": "Chula Vista", "state": "CA" }
      ]);
    });
};
