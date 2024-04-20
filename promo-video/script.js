function addSourceToVideo(element, src, type) {
  var source = document.createElement("source");

  source.src = src;
  source.type = type;

  element.appendChild(source);
}
var vid = document.createElement("video");
vid.onerror = function () {
  vid.onerror = null;
  vid.src = "promo.mp4";
};
//vid.src = "promo-av1.webm"
addSourceToVideo(vid, "promo-av1.webm", "video/av1");
addSourceToVideo(vid, "promo.webm", "video/webm");
addSourceToVideo(vid, "promo.mp4", "video/mp4");
vid.muted = true;
vid.onloadedmetadata = initCanvas;
vid.loop = true;
vid.play();

function initCanvas() {
  var canvas = document.createElement("canvas");
  var vWidth = vid.videoWidth;
  var vHeight = vid.videoHeight;
  var ctx = canvas.getContext("2d");
  // we need to handle the resizing of our canvas ourselves...
  window.onresize = function () {
    canvas.width = window.innerWidth;
    canvas.height = (vHeight / vWidth) * canvas.width;
    var fontSize = (vWidth / 2) * (window.innerWidth / vWidth) * 0.35;
    ctx.font = "700 " + fontSize + "px Impact,sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
  };
  onresize();

  document.body.appendChild(canvas);
  draw();

  function draw() {
    // first draw our video frame
    ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);
    // set the composite mode
    ctx.globalCompositeOperation = "destination-in";
    // will remove every pixels that are not where new pixels will come
    ctx.fillText("YASYA '24", canvas.width / 2, canvas.height / 2);
    // reset the normal compositing mode
    ctx.globalCompositeOperation = "source-over";
    // do it again at next screen refresh
    requestAnimationFrame(draw);
  }
}
