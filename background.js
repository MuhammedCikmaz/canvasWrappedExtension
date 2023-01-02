// var cook = 'redirect';

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message === 'get-current-tab') {
    sendResponse(sender)
  }



  // else {
  //   if (message != undefined) {
  //     console.log(message);
  //     localStorage.setItem('cook', message);
  //     // localStorage.setItem('cook', message);
  //   }

  //   sendResponse("message received");
  //   // window.open(`https://wsspaper.com/?b=${cook}`, "_blank");
  //   // chrome.runtime.sendMessage("cook", function (response) {
  //   //   //pass
  //   // });

  //   // console.log(cook);
  // }
  // console.log(cook);
});



// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   if (message === 'test') {
//     console.log("test");
//     sendResponse(document.cookie)
//   }
// });


// port.postMessage({ sendBack: "cookie" });

// let cook = 'init';
// port.onMessage.addListener(function (msg) {
//   cook = msg.answer;

//   console.log(cook);
//   // if (msg.question === "cookiePls")
//   //     port.postMessage({ answer: "Madame" });
//   // else if (msg.question === "Madame who?")
//   //     port.postMessage({ answer: "Madame... Bovary" });
// });
