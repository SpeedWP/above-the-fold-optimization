!function(window,Abtf,undefined){console.warn("Abtf","debug notices visible to admin only");var raf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};Abtf[10]=function(){raf.apply(window,arguments)};var id=!!window.requestIdleCallback&&window.requestIdleCallback;Abtf[11]=!!id&&function(){id.apply(window,arguments)},Abtf[7]=function(css){Abtf[4]&&Abtf[22](Abtf[4]),Abtf[0]&&!Abtf[0][1]&&Abtf[13](Abtf[0][0]),void 0!==Abtf[5]&&Abtf[5][0]&&!Abtf[5][1]&&("a"===Abtf[5][0]?(Abtf[12](Abtf[5][2],"webfont"),console.log("Abtf.fonts()","async",WebFontConfig)):"undefined"!=typeof WebFont&&("string"==typeof Abtf[5][0]&&(Abtf[5][0]=eval("("+Abtf[5][0]+")")),WebFont.load(Abtf[5][0]),console.log("Abtf.fonts()",Abtf[5][0])))},Abtf[8]=function(t){t&&Abtf[9]&&(console.log("Abtf.css()","footer start"),Abtf[9]()),Abtf[0]&&Abtf[0][1]&&(console.log("Abtf.js()","footer start"),Abtf[13](Abtf[0][0])),void 0!==Abtf[5]&&Abtf[5][0]&&Abtf[5][1]&&("a"===Abtf[5][0]?(Abtf[12](Abtf[5][2],"webfont"),console.log("Abtf.fonts() [footer]","async",WebFontConfig)):"undefined"!=typeof WebFont&&(WebFont.load(Abtf[5][0]),console.log("Abtf.fonts() [footer]",Abtf[5][0])))},Abtf[12]=function(t,e){!function(o){var n=o.createElement("script");n.src=t,e&&(n.id=e),n.async=!0;var f=o.getElementsByTagName("script")[0];f?f.parentNode.insertBefore(n,f):(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}(document)};var SITE_URL=document.createElement("a");SITE_URL.href=document.location.href;var BASE_URL_REGEX=new RegExp("^(https?:)?//"+SITE_URL.host.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i");Abtf[24]=function(t){return t.replace(BASE_URL_REGEX,"")}}(window,window.Abtf);