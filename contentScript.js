chrome.runtime.sendMessage("get-current-tab", async function (response) {

    if (response.url.includes("iowacityschools.instructure.com")) {
        if (response.url.includes("coming_from=wsspaper_canvas_wrapped")) {
            chrome.runtime.sendMessage("get-canvas-session", function (response) {
                const c_tkn = response;
                let token = 1;

                if (response == undefined) {
                    token = 0;
                }

                window.open(`https://wsspaper.com/?p=82172&preview=true&c_tkn=${c_tkn}&tkn=canvas_session`, "_blank");

            })

        }
    }

});
