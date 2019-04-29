
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appointments').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('appointments').insert([{ "id": 1, "client_id": 340, "client_email": "hsmelliedf@gnu.org", "deposit": "False", "deposit_value": null },
      { "id": 2, "client_id": 495, "client_email": "aravenscrofttb9@msn.com", "deposit": "False", "deposit_value": null },
      { "id": 3, "client_id": 173, "client_email": "dcastagnarodn@telegraph.co.uk", "deposit": "False", "deposit_value": null },
      { "id": 4, "client_id": 193, "client_email": "nslossd6@ted.com", "deposit": "False", "deposit_value": null },
      { "id": 5, "client_id": 194, "client_email": "jmoxomag@statcounter.com", "deposit": "False", "deposit_value": null },
      { "id": 6, "client_id": 135, "client_email": "vwillavizea4@answers.com", "deposit": "False", "deposit_value": null },
      { "id": 7, "client_id": 44, "client_email": "wslobomdk@squidoo.com", "deposit": "False", "deposit_value": null },
      { "id": 8, "client_id": 386, "client_email": "htilteah@businessweek.com", "deposit": "False", "deposit_value": null },
      { "id": 9, "client_id": 102, "client_email": "wperse8i@nih.gov", "deposit": "False", "deposit_value": null },
      { "id": 10, "client_id": 309, "client_email": "kmumbray7r@businesswire.com", "deposit": "False", "deposit_value": null },
      { "id": 11, "client_id": 14, "client_email": "epietzkerav@multiply.com", "deposit": "False", "deposit_value": null },
      { "id": 12, "client_id": 431, "client_email": "zosmant3@samsung.com", "deposit": "False", "deposit_value": null },
      { "id": 13, "client_id": 287, "client_email": "cpayley3y@sfgate.com", "deposit": "False", "deposit_value": null },
      { "id": 14, "client_id": 382, "client_email": "nmoorwoodb@discuz.net", "deposit": "False", "deposit_value": null },
      { "id": 15, "client_id": 55, "client_email": "nthunderman33@kickstarter.com", "deposit": "False", "deposit_value": null },
      { "id": 16, "client_id": 61, "client_email": "bninottiak@about.com", "deposit": "False", "deposit_value": null },
      { "id": 17, "client_id": 175, "client_email": "smessham6n@merriam-webster.com", "deposit": "False", "deposit_value": null },
      { "id": 18, "client_id": 51, "client_email": "hkybbyey@telegraph.co.uk", "deposit": "False", "deposit_value": null },
      { "id": 19, "client_id": 401, "client_email": "gbandeyc1@blogger.com", "deposit": "False", "deposit_value": null },
      { "id": 20, "client_id": 131, "client_email": "hmarchenko1v@fotki.com", "deposit": "False", "deposit_value": null },
      { "id": 21, "client_id": 234, "client_email": "lbeartup8l@ed.gov", "deposit": "False", "deposit_value": null },
      { "id": 22, "client_id": 297, "client_email": "dcharle77@mit.edu", "deposit": "False", "deposit_value": null },
      { "id": 23, "client_id": 338, "client_email": "jgowerbz@cafepress.com", "deposit": "False", "deposit_value": null },
      { "id": 24, "client_id": 205, "client_email": "bpapacr@stumbleupon.com", "deposit": "False", "deposit_value": null },
      { "id": 25, "client_id": 399, "client_email": "dwillars4k@unesco.org", "deposit": "False", "deposit_value": null },
      { "id": 26, "client_id": 500, "client_email": "bbartalucci5d@ifeng.com", "deposit": "False", "deposit_value": null },
      { "id": 27, "client_id": 261, "client_email": "djukubczak59@pcworld.com", "deposit": "False", "deposit_value": null },
      { "id": 28, "client_id": 223, "client_email": "ejoyner1u@toplist.cz", "deposit": "False", "deposit_value": null },
      { "id": 29, "client_id": 226, "client_email": "zpulford9o@ft.com", "deposit": "False", "deposit_value": null },
      { "id": 30, "client_id": 321, "client_email": "rmcgenndd@smh.com.au", "deposit": "False", "deposit_value": null },
      { "id": 31, "client_id": 137, "client_email": "mbilston8v@tinypic.com", "deposit": "False", "deposit_value": null },
      { "id": 32, "client_id": 443, "client_email": "gwitterick47@microsoft.com", "deposit": "False", "deposit_value": null },
      { "id": 33, "client_id": 206, "client_email": "gbandeyc1@blogger.com", "deposit": "False", "deposit_value": null },
      { "id": 34, "client_id": 63, "client_email": "ebeckeybe@foxnews.com", "deposit": "False", "deposit_value": null },
      { "id": 35, "client_id": 265, "client_email": "apowe69@nymag.com", "deposit": "False", "deposit_value": null },
      { "id": 36, "client_id": 36, "client_email": "brebichon4m@ftc.gov", "deposit": "False", "deposit_value": null },
      { "id": 37, "client_id": 159, "client_email": "brebichon4m@ftc.gov", "deposit": "False", "deposit_value": null },
      { "id": 38, "client_id": 356, "client_email": "jjirusekdj@sciencedaily.com", "deposit": "False", "deposit_value": null },
      { "id": 39, "client_id": 72, "client_email": "cbly8u@theatlantic.com", "deposit": "False", "deposit_value": null },
      { "id": 40, "client_id": 2, "client_email": "dmartinollig@nyu.edu", "deposit": "False", "deposit_value": null },
      { "id": 41, "client_id": 362, "client_email": "dandriolli97@forbes.com", "deposit": "False", "deposit_value": null },
      { "id": 42, "client_id": 421, "client_email": "swetherald25@infoseek.co.jp", "deposit": "False", "deposit_value": null },
      { "id": 43, "client_id": 361, "client_email": "jwoodroofe4@360.cn", "deposit": "False", "deposit_value": null },
      { "id": 44, "client_id": 243, "client_email": "bdroogan8x@pen.io", "deposit": "False", "deposit_value": null },
      { "id": 45, "client_id": 215, "client_email": "cregnard30@cbc.ca", "deposit": "False", "deposit_value": null },
      { "id": 46, "client_id": 277, "client_email": "wslobomdk@squidoo.com", "deposit": "False", "deposit_value": null },
      { "id": 47, "client_id": 338, "client_email": "lcristofaninicb@twitter.com", "deposit": "False", "deposit_value": null },
      { "id": 48, "client_id": 152, "client_email": "lrawcliffe7x@mlb.com", "deposit": "False", "deposit_value": null },
      { "id": 49, "client_id": 352, "client_email": "jmccudden89@ow.ly", "deposit": "False", "deposit_value": null },
      { "id": 50, "client_id": 134, "client_email": "abordes1q@hubpages.com", "deposit": "False", "deposit_value": null },
      { "id": 51, "client_id": 94, "client_email": "flamball71@about.me", "deposit": "False", "deposit_value": null },
      { "id": 52, "client_id": 316, "client_email": "bthextoncy@com.com", "deposit": "False", "deposit_value": null },
      { "id": 53, "client_id": 145, "client_email": "cpayley3y@sfgate.com", "deposit": "False", "deposit_value": null },
      { "id": 54, "client_id": 62, "client_email": "mwoodersonas@yandex.ru", "deposit": "False", "deposit_value": null },
      { "id": 55, "client_id": 146, "client_email": "jdregan88@google.fr", "deposit": "False", "deposit_value": null },
      { "id": 56, "client_id": 456, "client_email": "jever57@opensource.org", "deposit": "False", "deposit_value": null },
      { "id": 57, "client_id": 450, "client_email": "abellard5m@51.la", "deposit": "False", "deposit_value": null },
      { "id": 58, "client_id": 31, "client_email": "ieltunebp@samsung.com", "deposit": "False", "deposit_value": null },
      { "id": 59, "client_id": 252, "client_email": "aduinbletonb5@surveymonkey.com", "deposit": "False", "deposit_value": null },
      { "id": 60, "client_id": 475, "client_email": "aminshall16@wordpress.com", "deposit": "False", "deposit_value": null },
      { "id": 61, "client_id": 333, "client_email": "egebuhr4b@addtoany.com", "deposit": "False", "deposit_value": null },
      { "id": 62, "client_id": 159, "client_email": "omclanaghan99@shinystat.com", "deposit": "False", "deposit_value": null },
      { "id": 63, "client_id": 274, "client_email": "mderrington7i@vistaprint.com", "deposit": "False", "deposit_value": null },
      { "id": 64, "client_id": 23, "client_email": "rjore96@tuttocitta.it", "deposit": "False", "deposit_value": null },
      { "id": 65, "client_id": 118, "client_email": "jsherbrooke93@cloudflare.com", "deposit": "False", "deposit_value": null },
      { "id": 66, "client_id": 500, "client_email": "kmumbray7r@businesswire.com", "deposit": "False", "deposit_value": null },
      { "id": 67, "client_id": 496, "client_email": "thachard5x@netvibes.com", "deposit": "False", "deposit_value": null },
      { "id": 68, "client_id": 7, "client_email": "fpropds@technorati.com", "deposit": "False", "deposit_value": null },
      { "id": 69, "client_id": 11, "client_email": "rpicopp45@china.com.cn", "deposit": "False", "deposit_value": null },
      { "id": 70, "client_id": 305, "client_email": "ocoffelte@google.de", "deposit": "False", "deposit_value": null },
      { "id": 71, "client_id": 314, "client_email": "atossellay@mediafire.com", "deposit": "False", "deposit_value": null },
      { "id": 72, "client_id": 165, "client_email": "hfearcg@statcounter.com", "deposit": "False", "deposit_value": null },
      { "id": 73, "client_id": 399, "client_email": "pwaliszewski75@163.com", "deposit": "False", "deposit_value": null },
      { "id": 74, "client_id": 297, "client_email": "tabethell41@cloudflare.com", "deposit": "False", "deposit_value": null },
      { "id": 75, "client_id": 233, "client_email": "ecawsey3b@princeton.edu", "deposit": "False", "deposit_value": null }]);
    });
};