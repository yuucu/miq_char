window.onload = function() {

  var cv = document.getElementById("cv");
  var ctx = cv.getContext('2d');
  ctx.font = "18px MiQglyph";

  var input = document.getElementById("input");
  var miq_btn = document.getElementById("miq-btn");

  miq_btn.onclick = function() {
    clearCanvas(cv, ctx);
    drawText(ctx, input.value);
  };


  input.onkeyup = function() {
    clearCanvas(cv, ctx);
    drawText(ctx, input.value);
  };
  input.change = function() {
    clearCanvas(cv, ctx);
    drawText(ctx, input.value);
  };

};


function drawText(ctx, input){

  // full2half
  input_half = input.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });

  var lines = input_half.split( "\n" );
  for( var i=0, len=lines.length; i<len; i++ ) {
    var line = lines[i];
    var addY = 18;
    ctx.fillText(line, 16+0, 32+22*i);
  }
}

function clearCanvas(cv, ctx) {
  ctx.clearRect(0, 0, cv.width, cv.height);
}

