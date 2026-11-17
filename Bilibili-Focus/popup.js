const toggle = document.getElementById('toggle');
chrome.storage.local.get(['focusmode'],(res) =>{
    toggle.checked = !!res.focusmode;
});
toggle.addEventListener('change', () => {
    chrome.storage.local.set({focusmode: toggle.checked});
});