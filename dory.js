window.onload = function init() {
    
   myAudio = new Audio('dory.ogg'); 
	  myAudio.addEventListener('ended', function() {
    	this.currentTime = 0;
   	 this.play();
	}, false);
	myAudio.play();
  
}
