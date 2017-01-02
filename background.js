chrome.browserAction.onClicked.addListener((tab) => {
    chrome.windows.getCurrent({}, (window) => {
    	chrome.windows.update(window.id, {state: "fullscreen"}, () => {
            chrome.tabs.executeScript(tab.id, {file: 'injection.js'});
        });
    });
});
