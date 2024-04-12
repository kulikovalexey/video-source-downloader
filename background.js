chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "downloadVideo",
        title: "Download Video",
        contexts: ["all"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "downloadVideo") {
        chrome.tabs.executeScript({
            code: 'document.querySelector("video")?.src || ""'
        }, (results) => {
            if (results && results[0]) {
                chrome.tabs.sendMessage(tab.id, { type: "SET_SRC", src: results[0] });
            }
        });
    }
});
