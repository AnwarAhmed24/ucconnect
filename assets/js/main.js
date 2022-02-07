
//Scroll to Top Function//

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    var element = document.getElementById("scroll-top").style.opacity = "1";

  } else {
    document.getElementById("scroll-top").style.opacity = "0";
   
  }
}
