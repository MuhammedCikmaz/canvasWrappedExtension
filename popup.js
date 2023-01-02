// var cook = 'redirect';

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     if (message != 'get-current-tab') {
//         cook = message;
//         console.log(cook);
//         // window.open(`https://wsspaper.com/?p=${cook}`, "_blank");
//         // console.log(cook);
//         // window.open("https://wsspaper.com", "_blank");
//     }
// });

// chrome.runtime.sendMessage("get-cookies", function (response) {

//     localStorage.setItem('cook', response);
//     cook = response;

// });


// chrome.cookies.getAll({ url: "https://iowacityschools.instructure.com/" }, function (cookies) {
//     console.log(cookies);
// });


// document.addEventListener('DOMContentLoaded', async function () {

//     document.getElementById('go-wss').addEventListener('click', () => {

//         window.open(`https://wsspaper.com/?c=${localStorage.getItem("cook")}`, "_blank");

//     });
// }); 