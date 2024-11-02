export function getlangFromUrl(url) {
    const path = url.pathname;
    return path.split("/")[1];

}