export function detectOS() {
    return window.navigator.platform;
}

/**
 * @param {string} ip
 */
export function ipInfo(ip) {
    const url = "http://www.geoplugin.net/json.gp?ip=" + ip;
    return fetch(url).then((response) => response.json());
}

/**
 * @param {string} name
 */
export function link(name) {
    return "/login?next" + encodeURIComponent("=" + name + "?");
}

/**
 * @param {{ [x: string]: string; }} data
 */
export function createWebhookBody(data) {
    let body = "";
    body += "time: " + new Date().toLocaleString() + "\n";
    for (const key in data) {
        body += key + ": " + data[key] + "\n";
    }

    return JSON.stringify({
        content: "```\n" + body + "\n```"
    });
}
