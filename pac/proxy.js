function FindProxyForURL(url, host) {
    var proxyDomains = {
        "duckduckgo.com": true,
        "google.com": true,
        "youtube.com": true
    };

    // Strip subdomains to find root
    var parts = host.split(".");
    while (parts.length >= 2) {
        var domain = parts.join(".");
        if (proxyDomains[domain]) {
            return "PROXY proxy.yourserver.com:8080";
        }
        parts.shift();
    }

    return "DIRECT";
}
