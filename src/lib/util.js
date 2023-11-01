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