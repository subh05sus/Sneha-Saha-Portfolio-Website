var width = $(window).width();
window.onscroll = function () {
  if (width >= 1000) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      $("#header").css("background", "#fff");
      $("#header").css("color", "#000");
      $("#header").css("box-shadow", "0px 0px 20px rgba(0,0,0,0.09)");
      $("#header").css("padding", "4vh 4vw");
      $("#navigation a").hover(
        function () {
          $(this).css("border-bottom", "2px solid rgb(255, 44, 90)");
        },
        function () {
          $(this).css("border-bottom", "2px solid transparent");
        }
      );
    } else {
      $("#header").css("background", "transparent");
      $("#header").css("color", "#fff");
      $("#header").css("box-shadow", "0px 0px 0px rgba(0,0,0,0)");
      $("#header").css("padding", "6vh 4vw");
      $("#navigation a").hover(
        function () {
          $(this).css("border-bottom", "2px solid #fff");
        },
        function () {
          $(this).css("border-bottom", "2px solid transparent");
        }
      );
    }
  }
};
document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".video-item");

  videos.forEach((video) => {
    video.addEventListener("mouseover", () => {
      videos.forEach((v) => {
        if (v !== video) {
          v.pause();
        }
      });
      video.play();
    });

    video.addEventListener("click", () => {
      if (video.muted) {
        video.muted = false;
        console.log("Unmuted");
      } else {
        video.muted = true;
        console.log("Muted");
      }
    });
  });
});

function magnify(imglink) {
  $("#img_here").css("background", `url('${imglink}') center center`);
  $("#magnify").css("display", "flex");
  $("#magnify").addClass("animated fadeIn");
  setTimeout(function () {
    $("#magnify").removeClass("animated fadeIn");
  }, 800);
}

function closemagnify() {
  $("#magnify").addClass("animated fadeOut");
  setTimeout(function () {
    $("#magnify").css("display", "none");
    $("#magnify").removeClass("animated fadeOut");
    $("#img_here").css("background", `url('') center center`);
  }, 800);
}

setTimeout(function () {
  $("#loading").addClass("animated fadeOut");
  setTimeout(function () {
    $("#loading").removeClass("animated fadeOut");
    $("#loading").css("display", "none");
  }, 800);
}, 1650);

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("body,html").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};

document.querySelector("form").addEventListener("submit", handleSubmit);
