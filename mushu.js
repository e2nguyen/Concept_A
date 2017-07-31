 
  function PlayPause(video) {
    if(typeof InstallTrigger == 'undefined')
      video.paused ? video.play() : video.pause();
  };
 
   function videoEnded(video) {
    video.load();
  }; 






