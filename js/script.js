$(function (){
  $("#one").click(function () {
    $(".screen").append("1");
  });

  $("#two").click(function () {
    $(".screen").append("2");
  });

  $("#three").click(function () {
    $(".screen").append("3");
  });

  $("#four").click(function () {
    $(".screen").append("4");
  });

  $("#five").click(function () {
    $(".screen").append("5");
  });

  $("#six").click(function () {
    $(".screen").append("6");
  });

  $("#seven").click(function () {
    $(".screen").append("7");
  });

  $("#eight").click(function () {
    $(".screen").append("8");
  });

  $("#nine").click(function () {
    $(".screen").append("9");
  });

  $("#zero").click(function () {
    $(".screen").append("0");
  });

  $("#plus").click(function () {
    window.num = $(".screen").text();
    window.sign = "+";
    $(".screen").empty();
  });

  $("#minus").click(function () {
    window.num = $(".screen").text();
    window.sign = "-";
    $(".screen").empty();
  });

  $("#times").click(function () {
    window.num = $(".screen").text();
    window.sign = "*";
    $(".screen").empty();
  });

  $("#divide").click(function () {
    window.num = $(".screen").text();
    window.sign = "/";
    $(".screen").empty();
  });

  $("#equals").click(function () {
      window.num_two = $(".screen").text();
      $(".screen").empty();
      if (window.sign === "+") {
        window.num = parseInt(window.num) + parseInt(window.num_two);
        $(".screen").append(window.num);
      } else if (window.sign === "-") {
        window.num = window.num - window.num_two;
        $(".screen").append(window.num);
      } else if (window.sign === "*") {
        window.num = window.num * window.num_two;
        $(".screen").append(window.num);
      } else if (window.sign === "/") {
        window.num = window.num / window.num_two;
        $(".screen").append(window.num);
      };
  });
})