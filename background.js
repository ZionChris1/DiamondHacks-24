// Define the block list of URLs
const blockList = [
    'blockedurl1.com',
    'wikipedia.org',
    'google.com'
];

// Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Check if the tab URL matches any URL in the block list
    if (blockList.some(url => tab.url.includes(url)) && !tab.url.includes('blocked.html')) {
        // Redirect the tab to blocked.html with the blocked URL as a query parameter
        const blockedUrl = encodeURIComponent(tab.url);
        const redirectUrl = `blocked.html?url=${blockedUrl}`;
        chrome.tabs.update(tabId, { url: chrome.runtime.getURL(redirectUrl) });
    }
});