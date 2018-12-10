window.onload = function() {

  var cv = document.getElementById("cv");
  var ctx = cv.getContext('2d');
  var font_size = 56;
  var initial_x = 64;
  var initial_y = 104;
  var line_height = 1.1;
  ctx.font = font_size + "px MiQglyph";

  var input = document.getElementById("input");
  var save_btn = document.getElementById("save-btn");

  input.onkeyup = function() {
    clearCanvas(cv, ctx);
    drawText(ctx, input.value, font_size, initial_x, initial_y, line_height);
    toImage(cv, save_btn);
  };
  input.change = function() {
    clearCanvas(cv, ctx);
    drawText(ctx, input.value, font_size, initial_x, initial_y, line_height);
    toImage(cv, save_btn);
  };


};


function drawText(ctx, input, font_size, ini_x, ini_y, line_height){
  ctx.fillStyle = "black";
  // full2half
  input_half = input.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });
  var lines = input_half.split( "\n" );
  for( var i=0, len=lines.length; i<len; i++ ) {
    var line = lines[i];
    ctx.fillText(line, ini_x+0, ini_y+font_size*i*line_height);
  }
}

function clearCanvas(cv, ctx) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cv.width, cv.height);
}

function toImage(cv, save_btn) {
  var png = cv.toDataURL();
  document.getElementById("new-image").src = png;
  save_btn.href = (png);
}
