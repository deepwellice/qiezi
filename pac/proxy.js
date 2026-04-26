function FindProxyForURL(url, host) {
    var proxyDomains = {
        "www.duckduckgo.com": true,
        "www.google.com": true,
        "www.youtube.com": true
    };

      var parts = host.split(".");
      while (parts.length >= 2) {
          if (proxyDomains[parts.join(".")]) {
              return "PROXY proxy.yourserver.com:8080";
          }
          parts.shift();
      }

      return "DIRECT";
}
