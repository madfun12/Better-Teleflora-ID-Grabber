chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getVariable") {
        console.log("Message received:", message.action);
        chrome.tabs.query({ active: true }, async (tab) => {
            const tabId = tab[0].id;
            chrome.tabs.sendMessage(
                tabId,
                {
                    action: "retrieveVariable",
                },
                (response) => {
                    console.log("Message received from script:", response);

                    if (typeof response === "string") {
                        console.log("Sending response:", response);
                        sendResponse(response);
                    } else {
                        sendResponse(undefined);
                    }
                }
            );
        });
        return true; // Important: Indicates that the response will be sent asynchronously.
    }
});
