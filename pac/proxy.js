function FindProxyForURL(url, host) {
  var proxy = "PROXY 127.0.0.1:8080";

  // 🚀 以键值对形式排列，适合极长列表
  var domainList = {
    "github.com": 1,
    "google.com": 1,
    "youtube.com": 1
  };

  // 提取根域名进行匹配
  var suffix;
  var pos = host.lastIndexOf(".");
  while (pos > 0) {
    suffix = host.substring(pos + 1);
    if (domainList[host]) return proxy; // 检查完整域名
    
    // 逐级检查子域名 (例如: ://google.com -> google.com)
    var nextPos = host.lastIndexOf(".", pos - 1);
    if (nextPos < 0) {
      if (domainList[host]) return proxy;
      break;
    }
    pos = nextPos;
  }

  return "DIRECT";
}
