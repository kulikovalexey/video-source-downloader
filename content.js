chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === "SET_SRC") {
        const src = message.src;
        const link = document.createElement('a');
        link.href = src;
        link.innerText = 'Download Video';
        link.download = src.split('/').pop();  // Предполагаем, что это имя файла
        document.body.insertBefore(link, document.body.firstChild);
    }
});
