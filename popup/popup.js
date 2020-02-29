//Updates enableBox to current status
chrome.storage.sync.get(['enable'], function(result) {
    if(result.enable){
        document.getElementById("enableBox").checked = true;
    }
})

//waits until page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    var enableBox = document.getElementById('enableBox');
   
    //Event listener for when enable is toggled
    enableBox.addEventListener('click', function() {
        chrome.storage.sync.set({
            "enable":  enableBox.checked
        })
    });
});