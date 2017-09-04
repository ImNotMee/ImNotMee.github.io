(function() {
    
    var preload = document.getElementById("preload");
    var loading = 0;
    var id = setInterval(frame, 64);
    
    function frame() {
        if (loading == 30) {
            clearInterval(id);
            window.location.replace("main.html");
        } else {
            loading = loading +1;
            if (loading == 20) {
                preload.style.animation = "fadeout 1s ease";
            }
        }
    } 
})();