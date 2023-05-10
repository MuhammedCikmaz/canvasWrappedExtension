let cSession = 'init';

chrome.cookies.get({ url: "https://iowacityschools.instructure.com", name: "canvas_session" }, function (cookie) {
  cSession = cookie.value;
});

chrome.runtime.onMessage.addListener(async function (message, sender, sendResponse) {

  if (message === 'get-current-tab') {
    sendResponse(sender);
  }
  else {
    sendResponse(cSession)
  }
});