// Define the block list of URLs
const allowList = [
    'chrome://newtab/'
];

// Listen for tab updates
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    // Check if the tab URL matches any URL in the block list
    const suspicious = await isSuspicious(tab.url);
    if (suspicious && !tab.url.includes('blocked.html') && !allowList.some(url => tab.url.includes(url))) {
        // Redirect the tab to blocked.html with the blocked URL as a query parameter
        const blockedUrl = encodeURIComponent(tab.url);
        const redirectUrl = `blocked.html?url=${blockedUrl}`;
        chrome.tabs.update(tabId, { url: chrome.runtime.getURL(redirectUrl) });
    }
});

function query(data) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer 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");
    
    const raw = JSON.stringify({
      "inputs": data
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    return fetch("https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1", requestOptions)
      .then((response) => response.text())
      .then((result) => result);
}

async function isSuspicious(url) {
    const response = await query("Your job is to determine if the provided url is a potential phishing link. If the url is suspicous reply with exactly {THIS URL IS SUSPICIOUS}. Make sure to use all caps and include the {} Keep your reply short and to the point. Only say the link is suspicious if you think so. The url is " + url + " Your answer here?");
    return JSON.parse(response)[0]["generated_text"].split("?")[1].includes("THIS URL IS SUSPICIOUS");
}