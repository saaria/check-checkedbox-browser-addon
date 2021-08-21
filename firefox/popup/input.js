var enableInput = document.querySelector('input');
var cookieVal = { enable : '' };

function getActiveTab() {
    return browser.tabs.query({active: true, currentWindow: true});
}

getActiveTab().then((tabs) => {
    let save = browser.storage.local.get(tabs[0].url);
    save.then((storedInfo) => {
        let status = storedInfo[Object.keys(storedInfo)[0]];
        if (status) enableInput.checked = true;
    });
}); 

enableInput.onchange = function(e) {
    getActiveTab().then((tabs) => {
        var checked = e.target.checked;
        let settingToStore = {};
        settingToStore[tabs[0].url] = checked;
        browser.storage.local.set(settingToStore);
    });
}