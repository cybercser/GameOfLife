var canvas, ctx, isContinue, timeoutID, interval;

function start(canvasName, func) {
    if (timeoutID)
        stop();

    canvas = document.getElementById(canvasName);
    ctx = canvas.getContext("2d");
    isContinue = true;

    var loop = function() {
        func();
        if (isContinue)
            timeoutID = setTimeout(loop, interval);
    }

    loop();
}

function stop() {
    clearTimeout(timeoutID);
    isContinue = false;
}

function clearCanvas() {
    if (ctx != null) 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
}