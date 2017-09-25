
  jQuery(document).ready(function($) {

    var x = window.matchMedia("(min-width: 1024px)")
    toggleNav(x)
    x.addListener(toggleNav)  //keeps track of the state of the screen-width

 
    $('#i-nav').click(function() {
      $(this).toggleClass('openNav')
      $('ul').fadeToggle(170)
      $('ul').toggleClass('showNav')        
    })

  })


// This function makes the Navbar display all sections when min-width:1024px
// Otherwise, hide the NavBar to be accessed via button
//
  function toggleNav(x) {   
    if(x.matches) {
      if($('.navi ul').css('display') == 'none') {
        $('.navi ul').css('display', 'block')
      }
    }
    else {
      if($('.navi ul').css('display') == 'block') {
        $('.navi ul').css('display', 'none')
      }
    }
     
  };

// This function (re)loads the video as well as allow for play and pause
//
  function PlayPause(video) {
    if(typeof InstallTrigger == 'undefined')
      video.paused ? video.play() : video.pause();
  };
 
   function videoEnded(video) {
    video.load();
  }; 






