function changeTextSize(){var e=1/devicePixelRatio,t=document.getElementsByClassName("gameBox");document.getElementsByClassName("header")[0],document.getElementsByClassName("main.be5e8715")[0];if(document.documentElement.clientWidth*e<=750)for(i=0;i<t.length;i++)t[i].style.height=window.screen.availHeight/e+"px";else{document.documentElement.style.fontSize="54px",e=1;for(var i=0;i<t.length;i++)t[i].style.height=window.screen.availHeight/e+"px"}}!function(e,t){function i(){var t=r.getBoundingClientRect().width;t/m>750&&(t=540*m);var i=t/10;r.style.fontSize=i+"px",c.rem=e.rem=i}var a,n=e.document,r=n.documentElement,l=n.querySelector('meta[name="viewport"]'),o=n.querySelector('meta[name="flexible"]'),m=0,s=0,c=t.flexible||(t.flexible={});if(l){console.warn("将根据已有的meta标签来设置缩放比例");var d=l.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(s=parseFloat(d[1]),m=parseInt(1/s))}else if(o){var p=o.getAttribute("content");if(p){var u=p.match(/initial\-dpr=([\d\.]+)/),h=p.match(/maximum\-dpr=([\d\.]+)/);u&&(m=parseFloat(u[1]),s=parseFloat((1/m).toFixed(2))),h&&(m=parseFloat(h[1]),s=parseFloat((1/m).toFixed(2)))}}if(!m&&!s){var f=(e.navigator.appVersion.match(/android/gi),e.navigator.appVersion.match(/iphone/gi)),g=e.devicePixelRatio;m=f?g>=3&&(!m||m>=3)?3:g>=2&&(!m||m>=2)?2:1:1,s=1/g}if(r.setAttribute("data-dpr",m),l||1==r.getAttribute("data-dpr")&&(s=1),(l=n.createElement("meta")).setAttribute("name","viewport"),e.webPageScalable?l.setAttribute("content","initial-scale="+s+", user-scalable=yes"):l.setAttribute("content","initial-scale="+s+", maximum-scale="+s+", minimum-scale="+s+", user-scalable=no"),r.firstElementChild)r.firstElementChild.appendChild(l);else{var v=n.createElement("div");v.appendChild(l),n.write(v.innerHTML)}e.addEventListener("resize",function(){clearTimeout(a),a=setTimeout(i,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(a),a=setTimeout(i,300))},!1),i(),c.dpr=e.dpr=m,c.refreshRem=i,c.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},c.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}));