/*var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
var showWrap = function(){
    var parallaxContainer = document.getElementById('parallax');
    var wrap = document.getElementsByClassName('wrapper');
    if(isMobile.any()){
    wrap[0].style.background = 'url(../backgrounds/welcome-background.jpg) no-repeat';
    wrap[0].style.backgroundPosition = 'center top';
    wrap[0].style.backgroundSize = 'cover';
    parallaxContainer.remove();
    } else{
        parallaxContainer.style.display = 'block';
    }
};
document.addEventListener('DOMContentLoaded', showWrap);
*/