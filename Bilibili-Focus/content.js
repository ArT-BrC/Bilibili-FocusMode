function applymode(isOn){
    if(isOn){
        document.documentElement.classList.add('focus-mode-on');
    }
    else{
        document.documentElement.classList.remove('focus-mode-on');
    }
}

chrome.storage.local.get(['focusmode'], (res) => {
    applymode(!!res.focusmode);
});

chrome.storage.onChanged.addListener((changes) => {
    if(changes.focusmode) {
        applymode(changes.focusmode.newValue);
    }
});