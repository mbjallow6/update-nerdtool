
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire477f"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire477f"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("aKzDW", function(module, exports) {

$parcel$export(module.exports, "register", () => $7d39d93f9098a310$export$6503ec6e8aabbaf, (v) => $7d39d93f9098a310$export$6503ec6e8aabbaf = v);
$parcel$export(module.exports, "resolve", () => $7d39d93f9098a310$export$f7ad0328861e2f03, (v) => $7d39d93f9098a310$export$f7ad0328861e2f03 = v);
var $7d39d93f9098a310$export$6503ec6e8aabbaf;
var $7d39d93f9098a310$export$f7ad0328861e2f03;
"use strict";
var $7d39d93f9098a310$var$mapping = new Map();
function $7d39d93f9098a310$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$7d39d93f9098a310$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $7d39d93f9098a310$var$resolve(id) {
    var resolved = $7d39d93f9098a310$var$mapping.get(id);
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$7d39d93f9098a310$export$6503ec6e8aabbaf = $7d39d93f9098a310$var$register;
$7d39d93f9098a310$export$f7ad0328861e2f03 = $7d39d93f9098a310$var$resolve;

});

var $18198ef6f51a31a1$exports = {};

(parcelRequire("aKzDW")).register(new URL("", import.meta.url).toString(), JSON.parse('["epDtc","index.c9709cc1.js","1Pe1M","esp32.1ec622f5.js","4V25e","esp32c2.994f71d9.js","2ahOx","esp32c3.5998b3cd.js","b1lFH","esp32c6.c588c94e.js","cVOvA","esp32h2.b62eb10e.js","2l4Yt","esp32s3.b162bcd0.js","an1uI","esp32s2.d47646df.js","lHdCh","esp8266.27a23164.js"]'));


//# sourceMappingURL=index.runtime.d03ee2e9.js.map
