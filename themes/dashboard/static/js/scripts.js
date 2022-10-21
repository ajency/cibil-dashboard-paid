//faq
$(".faq-collapse").on("show.bs.collapse", function () {
  $(this).prev().addClass("show");
});
$(".faq-collapse").on("hide.bs.collapse", function () {
  $(this).prev().removeClass("show");
});

// banner cta
$(".banner-cta").each( function(){
  $bannerHeight = $(this).attr("data-height");
  $(this).css("height", $bannerHeight);
});

$(function() {
  if ($(window).width() < 767) {
    // circular usage
    $('.card-usage').easyPieChart({
      size: 64,
      barColor: "#00A6CA",
      scaleLength: 0,
      lineWidth: 4,
      trackColor: "#F1F6FF",
      lineCap: "round",
      animate: 1000,
    });
  } else{
    // circular usage
    $('.card-usage').easyPieChart({
      size: 64,
      barColor: "#00A6CA",
      scaleLength: 0,
      lineWidth: 5.5,
      trackColor: "#F1F6FF",
      lineCap: "round",
      animate: 1000,
    });
  }
});

  /* tooltip */
  $(".tooltip-toggle").each(function(){
    var tooltip_trigger = $(this);
    var tooltipBoxId = tooltip_trigger.next();
    var tooltip_box = $(tooltipBoxId);
    var tooltip_box_arrow = $(".tooltip-box .tooltip-box__wraper:before");
  
    let calculatePosition = () => {
      let topPosition = tooltip_trigger.position().top;
      let leftPosition =  tooltip_trigger.position().left;
      let elHeight = tooltip_trigger.height()*2.2;
      let elWidth = tooltip_trigger.width()*70/100;

      let windowWidth = $( document ).width();
      let arrowPosition = (windowWidth - leftPosition)- 45;

      if ( (leftPosition-elWidth) < 0 ){
        tooltip_box.css({"top":topPosition+elHeight, "left":leftPosition});
        $('head').append('<style>.tooltip-box .tooltip-box__wraper:before{left: '+ leftPosition +'px;}</style>');
      } else{
        let finalLeft = leftPosition - elWidth;
        tooltip_box.css({"top":topPosition+elHeight, "left": finalLeft});
        $('head').append('<style>.tooltip-box .tooltip-box__wraper:before{right:'+ arrowPosition +'px !important;}</style>');
      }
    }

    let calculatePositionMob = () => {
      let topPosition = tooltip_trigger.position().top;
      let leftPosition =  tooltip_trigger.position().left;
      let elHeight = tooltip_trigger.height()*2.2;
      let elWidth = tooltip_trigger.width()*70/100;

      let windowWidth = $( document ).width();
      let arrowPosition = (windowWidth - leftPosition)- 40;

      if ( (leftPosition-elWidth) < 0 ){
        tooltip_box.css({"top":topPosition+elHeight, "left":leftPosition});
        $('head').append('<style>.tooltip-box .tooltip-box__wraper:before{left: '+ leftPosition +'px;}</style>');
      } else{
        let finalLeft = leftPosition - elWidth;
        if(finalLeft > 160 ){
          tooltip_box.css({"top":topPosition+elHeight, "left": 160 });
          $('head').append('<style>.tooltip-box .tooltip-box__wraper:before{right:'+ arrowPosition +'px !important;left: auto;}</style>');
        }else{
          tooltip_box.css({"top":topPosition+elHeight, "left": finalLeft});
          $('head').append('<style>.tooltip-box .tooltip-box__wraper:before{right:'+ arrowPosition +'px !important;left: auto;}</style>');
        }
      }
    }
  
    let showTooltip = () => {
      tooltip_box.removeClass("hide");
      tooltip_box.addClass("show");
    }
  
    let hideTooltip = () => {
      tooltip_box.removeClass("show");
      tooltip_box.addClass("hide");
    }
  
    tooltip_trigger.mouseover(function(){
      var newWindowWidth = $(window).width();
        if (newWindowWidth < 760) {
          calculatePositionMob();
        }
        else
        {
          calculatePosition();
        }
      showTooltip();
    });
    tooltip_trigger.mouseout(function(){
      hideTooltip();
    });
  });

//our partners slider
$(".partners").slick({
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  pauseOnHover: true,
  accesibility: false,
  draggable: false,
  swipe: false,
  touchMove: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        
      },
    },
  ],
});

//account summary slider
function enableAccountSlider(){
  let targetSlide = 1;
  if(location.hash){
    targetSlide = location.hash.split("_")[1];
  }
  $(".account-summary-slider").slick({
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: targetSlide - 1,
    responsive: [
      {
        breakpoint: 576,
        settings:{
          speed: 600
        }
      }
    ]
  });
}

function disableAccountSlider(){
  $(".account-summary-slider").slick('unslick')
}

//account summary
$(".account-collapse").on("show.bs.collapse", function () {
  $(this).prev().addClass("show");
});
$(".account-collapse").on("hide.bs.collapse", function () {
  $(this).prev().removeClass("show");
});

// tabs redirect
var hash = location.hash.replace(/^#/, '').split('_')[0];
$tabsParent =  $(".reportTabs");
$panelParent = $(".report-content .tab-content");
if (hash) {
    $tabsParent.find(".report-nav-item button").removeClass("active");
    $('.report-nav-item button[data-target="#' + hash + '"]').addClass("active");
    $panelParent.find(".tab-panel").removeClass("active");
    $('.tab-panel[id="' + hash + '"]').addClass("active");
    //checkAccountVisibility();
}

//tooltip funciton
function addTooltip(){
  $(".tooltip-toggle").each(function(){
    var tooltip_trigger = $(this);
    var tooltipBoxId = tooltip_trigger.next();
    var tooltip_box = $(tooltipBoxId);
    var tooltip_box_arrow = $(".tooltip-box .tooltip-box__wraper:before");

    let calculatePosition = () => {
      let topPosition = tooltip_trigger.position().top;
      let leftPosition =  tooltip_trigger.position().left;
      let elHeight = tooltip_trigger.height()*2.2;
      let elWidth = tooltip_trigger.width()*70/100;

      let windowWidth = $( document ).width();
      let arrowPosition = (windowWidth - leftPosition)- 45;

      if ( (leftPosition-elWidth) < 0 ){
        tooltip_box.css({"top":topPosition+elHeight, "left":leftPosition});
        $('head').append('<style>.tooltip-box .tooltip-box__wraper:before{left: '+ leftPosition +'px;}</style>');
      } else{
        tooltip_box.css({"top":topPosition+elHeight, "left": (leftPosition - elWidth)});
        $('head').append('<style>.tooltip-box .tooltip-box__wraper:before{right:'+ arrowPosition +'px !important;}</style>');
      }
    }

    let showTooltip = () => {
      tooltip_box.removeClass("hide");
      tooltip_box.addClass("show");
    }

    let hideTooltip = () => {
      tooltip_box.removeClass("show");
      tooltip_box.addClass("hide");
    }

    tooltip_trigger.mouseover(function(){
      calculatePosition();
      showTooltip();
    });
    tooltip_trigger.mouseout(function(){
      hideTooltip();
    });
  })
};

//revert bar
$(".revert-bar .close-button").click( function(){
  $(this).parents().eq(1).hide("fast");
});

$(".reset-field").next("input").on('keyup change', function(){
    $(this).prev(".reset-field").show("fast");
    if ($(this).val() == ''){
      $(this).prev(".reset-field").hide("fast");
    }
});

// coupon code form
$(".reset-field").click(function(){
  $(this).next("input").val('');
  $(this).hide("fast");
});

$(".CouponFormToggle").click(function(){
  let couponPopup = $("#"+$(this).attr("popup-link"));

  let planPrice = couponPopup.find(".plan-price-ammount .ammount").text();
  let disountedPrice = couponPopup.find(".coupon-discount .discount-ammount").text();

  let subtotalVal = parseInt(planPrice) ;

  if(disountedPrice){
    subtotalVal = parseInt(planPrice)-parseInt(disountedPrice) ;
  }
  couponPopup.find(".subtotal .subtotal-ammount").text(subtotalVal);
});

function howItWorks(){
  
  introJs().setOptions({
    doneLabel: 'TAKE ME TO MY DASHBOARD',
    nextLabel: 'Next',
    hidePrev: true,
    showStepNumbers: true,
    showBullets: true,
    showProgress: false,
    steps: [
      {
        element: document.querySelector('.simulator-section'),
        intro: 'Your CIBIL Score and last refresh status',
        position: 'right'
      },
      {
        element: document.querySelector('.key-highlights'),
        intro: 'Factors affecting your CIBIL Score'
      },
      {
        element: document.querySelector('.nav-list'),
        intro: 'Explore all available CIBIL features'
      },
      {
        element: document.querySelector('.report-cta'),
        intro: 'View & download your CIBIL Report'
      }
    ]
  })
  .onchange(function (targetElement) {
    let stepNo = $('.introjs-helperNumberLayer').text();
    $('.steps .stepNumber').text(parseInt(stepNo)+1);
  })
  .start();
  let totalSteps = $('.introjs-bullets ul').children().length;
  let stepNumber = $('.introjs-helperNumberLayer').text();
    $(".introjs-tooltip").prepend('<p class="steps"><span class="stepNumber">'+stepNumber+'</span><span class="totalSteps">/'+totalSteps+'</span></p>');
}

function howItWorksMob(){
  
  introJs().setOptions({
    doneLabel: 'TAKE ME TO MY DASHBOARD',
    nextLabel: 'Next',
    hidePrev: true,
    showStepNumbers: true,
    showBullets: true,
    showProgress: false,
    steps: [
      {
        element: document.querySelector('.simulator-section'),
        intro: 'Your CIBIL Score and last refresh status',
        position: 'right'
      },
      {
        element: document.querySelector('.key-highlights'),
        intro: 'Factors affecting your CIBIL Score'
      },
      {
        element: document.querySelector('header'),
        intro: 'Explore all available CIBIL features'
      },
      {
        element: document.querySelector('.report-cta'),
        intro: 'View & download your CIBIL Report'
      }
    ]
  })
  .onchange(function (targetElement) {
    let stepNo = $('.introjs-helperNumberLayer').text();
    $('.steps .stepNumber').text(parseInt(stepNo)+1);
  })
  .start();
  $('header').css("position", "inherit");
  let totalSteps = $('.introjs-bullets ul').children().length;
  let stepNumber = $('.introjs-helperNumberLayer').text();
    $(".introjs-tooltip").prepend('<p class="steps"><span class="stepNumber">'+stepNumber+'</span><span class="totalSteps">/'+totalSteps+'</span></p>');
}

// countdown banner
if($('.countdown-timer').is(":visible")){
  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
    let today = new Date(),
        dd = $('.countdown-timer').data("day"),
        mm = $('.countdown-timer').data("month"),
        yyyy = $('.countdown-timer').data("year");
    expireyDate = mm + "/" + dd + "/" + yyyy;
    today = mm + "/" + dd + "/" + yyyy;
    
    const countDown = new Date(expireyDate).getTime(),
        x = setInterval(function() { 
  
          const now = new Date().getTime(),
          distance = countDown - now;
  
          document.getElementById("days").innerText = String(Math.floor(distance / (day))).padStart(2, '0'),
          document.getElementById("hours").innerText = String(Math.floor((distance % (day)) / (hour))).padStart(2, '0'),
          document.getElementById("minutes").innerText = String(Math.floor((distance % (hour)) / (minute))).padStart(2, '0'),
          document.getElementById("seconds").innerText = String(Math.floor((distance % (minute)) / second)).padStart(2, '0');
  
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerText = "00",
            document.getElementById("hours").innerText = "00",
            document.getElementById("minutes").innerText = "00",
            document.getElementById("seconds").innerText = "00";
          }
          //seconds
        }, 0)
    }());
}

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
  }
  return false;
};

// show edit information popup
var editInfo = getUrlParameter('editInfo');
if (editInfo == "show"){
  editOInfoToggle();
}

//score comparison
if($('.comparison-graph')){
  let percentBox = $('.comparison-graph .graph-bar').find('.percent');
  let scoreBox = $('.graph-bar-pointer');
  let percentText = $('.score-percent-text .percent');

  //assign values
  $(percentBox).each(function(){
    let scoreWidth = $(this).data('width');
    let scorePercent = $(this).data('percent');

    $(this).css({'width':scoreWidth});
    $(this).html('<span>'+scorePercent+'%</span>');
  });

  //position score pointer
  let graphBarPointer = $('.graph-bar-pointer');
  let poniterBoxCenter = $(graphBarPointer).innerWidth()/2;

  $(graphBarPointer).find('.graph-bar-pointer__wraper').css({'left': -(poniterBoxCenter+4)})
  
  $(graphBarPointer).css({'left': 0+'%'});

  $(scoreBox).each(function(){
    let scoreElement = $(this).find('.score');
    let comparedScore = $(scoreElement).data('score');
    let lowestScore = 300;
    let highestScore = 900;
    let pointerBoxPosition = Math.ceil((comparedScore - lowestScore)/(highestScore - lowestScore)*100);
    $(this).find(scoreElement).text(comparedScore);

    $({ score : lowestScore }).animate(
      { score : comparedScore },
      {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          $(scoreElement).text((now) | 0);
        },
      }
    );
    if(pointerBoxPosition >= 0 && pointerBoxPosition <= 100){
      //console.log('1 working');
      $(this).animate(
        {
          left:  pointerBoxPosition+'%',
        },
        {
          duration: 2000,
          easing: "swing",
        }
      );
    }else if(pointerBoxPosition <= 0){
      $(this).animate(
        {
          left:  pointerBoxPosition+'%',
        },
        {
          duration: 2000,
          easing: "swing",
        }
      );
    }
    else{
      $(this).animate(
        {
          left:  pointerBoxPosition+'%',
        },
        {
          duration: 2000,
          easing: "swing",
        }
      );
    }

    $({ perc : 0 }).animate(
      { perc : pointerBoxPosition },
      {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          $(percentText).text((now) | 0);
        },
      }
    );

  });
}