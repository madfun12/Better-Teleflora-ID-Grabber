// Inject script, DO NOT TOUCH
const injectScript = (file_path, tag) => {
    const node = document.getElementsByTagName(tag)[0];
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", file_path);
    node.appendChild(script);
};

injectScript(chrome.runtime.getURL("script.js"), "body");
let telefloraId = "";

// Get message from site script
window.addEventListener(
    "message",
    (event) => {
        if (event.data.type && event.data.type == "FROM_PAGE") {
            telefloraId = event.data.telefloraId;
            console.log(telefloraId);
        }
    },
    false
);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "retrieveVariable") {
        sendResponse(telefloraId);
    }
});
