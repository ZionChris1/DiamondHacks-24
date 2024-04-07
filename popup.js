// Retreive website url display to show current link
document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var currentTab = tabs[0];
      if (currentTab) {
        // Get URL
        var currentTabUrl = currentTab.url;
        // Display it in a DOM element with id 'currentLink':
        document.getElementById('currentLink').textContent = currentTabUrl;
      }
    });
  });

  // Handler function for id="checkButton"
  document.getElementById('checkButton').addEventListener('click', async function() {
    // Get the value from id="urlInput"
    var urlInputValue = document.getElementById('urlInput').value;
    
    if (await isSuspicious(urlInputValue)) {
      // Do something if the URL is suspicious
      alert('URL is unsafe. Proceed at your own risk.');
    } else {
      alert('URL is safe.');
    }
  });