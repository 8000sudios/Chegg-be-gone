//Checks to see if fresh install (initiates)
chrome.runtime.onInstalled.addListener((details) => {
    const reason = details.reason

    switch (reason) {
        case 'install':
            chrome.storage.sync.set({"enable":  enableBox.checked})
            break;
    }
})