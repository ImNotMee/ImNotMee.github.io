(function() {
    // the variable to keep track of how long the loading screen stays for
    var loading = 0;
    var id = setInterval(frame, 64);
    
    function frame() {
        // Load the main.html when it reach the time
        if (loading == 60) {
            clearInterval(id);
            window.location.replace("main.html");
        } else {
            // Add one to loading
            loading = loading +1;
            // Cast the fade animation when it reaches the end of the loading time
            if (loading == 70) {
                preload.style.animation = "fadeout 1s ease";
            }
        }
    } 
})();