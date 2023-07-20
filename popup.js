const getTelefloraId = async () => {
    const response = await chrome.runtime.sendMessage({
        action: "getVariable",
    });

    return response;
};

const displayError = () => {
    document.querySelector(".error").style.display = "block";
};

const displaySuccess = () => {
    document.querySelector(".success").style.color = "rgb(0, 117, 31, 1)";
};

const openPage = (telefloraId, env) => {
    open(`https://${telefloraId}.${env}.telefloristonline.com`);
};

document.addEventListener("DOMContentLoaded", () => {
    const copyButton = document.getElementById("copyButton");
    const uxButton = document.getElementById("uxButton");
    const stageButton = document.getElementById("stageButton");
    const qaButton = document.getElementById("qaButton");
    const prodButton = document.getElementById("prodButton");

    copyButton.addEventListener("click", async () => {
        const telefloraId = await getTelefloraId();

        if (!telefloraId) {
            displayError();
            return;
        }

        navigator.clipboard.writeText(telefloraId).then(
            () => {
                displaySuccess();
            },
            () => {
                console.error("Failed to copy");
            }
        );
    });

    uxButton.addEventListener("click", async () => {
        const telefloraId = await getTelefloraId();

        if (!telefloraId) {
            displayError();
            return;
        }

        openPage(telefloraId, "ux");
    });

    stageButton.addEventListener("click", async () => {
        const telefloraId = await getTelefloraId();

        if (!telefloraId) {
            displayError();
            return;
        }

        openPage(telefloraId, "stage");
    });

    qaButton.addEventListener("click", async () => {
        const telefloraId = await getTelefloraId();

        if (!telefloraId) {
            displayError();
            return;
        }

        openPage(telefloraId, "qa");
    });

    prodButton.addEventListener("click", async () => {
        const telefloraId = await getTelefloraId();

        if (!telefloraId) {
            displayError();
            return;
        }

        openPage(telefloraId, "preview");
    });
});
