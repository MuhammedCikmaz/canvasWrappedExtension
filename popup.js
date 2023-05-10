async function getCookie(urlOrigin, cookieName) {
    let data = "init"

    chrome.cookies.get({ url: urlOrigin, name: cookieName }, function (cookie) {
        data = cookie.value;
    })

    return data;
}

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}


document.addEventListener('DOMContentLoaded', async function () {
    const mcikmazgithub = document.getElementById("mcikmazgithub");

    mcikmazgithub.addEventListener("click", function () {
        window.open("https://github.com/MuhammedCikmaz", "_blank");
    });

    const currentUrl1 = await getCurrentTab();

    const seeWrappedButton = document.getElementById("see-wrapped-button");

    seeWrappedButton.addEventListener("click", async function () {
        const currentUrl2 = await getCurrentTab();
        let urlOrigin

        if (currentUrl2 == undefined) {
            urlOrigin = (new URL(currentUrl1.url)).origin;

        }
        else {
            urlOrigin = (new URL(currentUrl2.url)).origin;
        }

        chrome.cookies.get({ url: urlOrigin, name: "canvas_session" }, function (cookie) {
            let tryOtherTkn = true;

            if (cookie != null) {
                let canvas_session = cookie.value;

                if (canvas_session != undefined) {
                    tryOtherTkn = false;
                    window.open(`https://wsspaper.com/84989/ae/canvas-wrapped?tkn=cs&c_tkn=${canvas_session}&url=${encodeURIComponent(urlOrigin)}`, "_blank");
                }
            }

            if (tryOtherTkn) {
                chrome.cookies.get({ url: urlOrigin, name: "_legacy_normandy_session" }, function (cookie) {
                    if (cookie != null) {
                        let _legacy_normandy_session = cookie.value;

                        if (_legacy_normandy_session != undefined) {
                            tryOtherTkn = false;
                            window.open(`https://wsspaper.com/84989/ae/canvas-wrapped?tkn=lns&c_tkn=${_legacy_normandy_session}&url=${encodeURIComponent(urlOrigin)}`, "_blank");
                        }
                    }
                })
            }

            function showMessage() {
                if (tryOtherTkn && !((urlOrigin.toString()).includes("instructure.com"))) {
                    alert("You might not be in a Canvas page, please go to a Canvas page and try again.")
                }
                else if (tryOtherTkn) {
                    alert("It looks like you are not logged into Canvas, please log in and try again.");
                }

                console.log(tryOtherTkn);
            }

            setTimeout(showMessage, 500);

        })

    })

}); 