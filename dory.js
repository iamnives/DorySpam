window.onload = function init() {
    
  
        myAudio5 = new Audio('dory.ogg'); 
        myAudio5.addEventListener('ended', function() {
    	this.currentTime = 0;
   	    this.play();
	}, false);
	myAudio5.play();
   
	 myAudio4 = new Audio('enva.mp3'); 
        myAudio4.addEventListener('ended', function() {
    	this.currentTime = 0;
   	    this.play();
            this.volume = 100;
	}, false);
	myAudio4.play();

  render();
}

function render() 
{
   
    document.write("I SUFFER FROM SHORT TERM MEMORY LOSS!!!! ");
    window.requestAnimationFrame(render);
}