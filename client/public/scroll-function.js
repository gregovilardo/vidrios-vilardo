window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navbar").style.padding = "0 0 0 0";
    document.getElementById("logo").width = "50";
    document.getElementById("logo").height = "50";
    

  } else {
    document.querySelector(".navbar").style.padding = "0 0 10px 0";
    document.getElementById("logo").width = "100";
    document.getElementById("logo").height = "100";
  }
}
