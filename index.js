/* globals App */

const app = new App();

// this is not quite working yet.  That is, it works, but somehow it interferes with recording the choices. 
 
//const clickData = window.localStorage.getItem('totalClicks');

// window.onbeforeunload = () => {
//     if(app.totalClicks >= app.maxClicks) {
//         app.totalClicks = 0;
//     }
//     window.localStorage.setItem('totalClicks', JSON.stringify(app.totalClicks));
// };

// if(clickData === 'undefined' || !clickData) {
//     app.totalClicks = 0;
// }
// else {
//     app.totalClicks = parseInt(JSON.parse(clickData));
// }

app.drawPictures();


