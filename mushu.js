
  $(document).ready(function () {
     $(window).on('load scroll', function ()
  {         
         var scrolled = $(this).scrollTop();

         $('vid').css('transform', 'translate3d(0, ' +
           -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
         });

   });
 
  function PlayPause(video) {
    if(typeof InstallTrigger == 'undefined')
      video.paused ? video.play() : video.pause();
  };
 
   function videoEnded(video) {
    video.load();
  }; 






