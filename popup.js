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