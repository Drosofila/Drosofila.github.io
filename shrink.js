window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "10pt";
    document.getElementById("header").style.height = "70px";
  } else {
    document.getElementById("header").style.fontSize = "16pt";
    document.getElementById("header").style.height = "120px";
  }

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("mosca").style.width = "50px";
    document.getElementById("mosca").style.margin = "10px 0 0 220px"
  } else {
    document.getElementById("mosca").style.width = "75px";
    document.getElementById("mosca").style.margin = "18px 0 0 30px";
  }

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("botao").style.fontSize = "10pt";
  } else {
    document.getElementById("botao").style.fontSize = "16pt";
  }

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("ul1").style.margin = "10px 200px 0 0"
    document.getElementById("header").style.fontSize = "10pt";
  } else {
    document.getElementById("ul1").style.margin = "30px 0 0 30px";
    document.getElementById("header").style.fontSize = "16pt";
  }

}