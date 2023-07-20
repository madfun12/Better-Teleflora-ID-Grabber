// DO NOT TOUCH
// When tab is opened, add the script to look for t_tfid
const getTelefloraId = () => {
    if (typeof t_tfid === "string") {
        let telelforaId = t_tfid;
        return telelforaId;
    } else {
        return null;
    }
};

let telefloraId = getTelefloraId();

window.postMessage({ type: "FROM_PAGE", telefloraId });
