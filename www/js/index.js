var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
    
    //Loads the apps Events for the functions
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }
	
	 function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	} 


    // device APIs are available
    //Life cycle for On Ready
    function onDeviceReady() {
		alert("device ready");
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //Life Cycle for Pause
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	//Life Cycle for Pause
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }
