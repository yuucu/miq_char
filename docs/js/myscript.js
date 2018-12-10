window.onload = function() {

  var cv = document.getElementById("cv");
  var ctx = cv.getContext('2d');
  var font_size = 56;
  var initial_x = 40;
  var initial_y = 80;
  var line_height = 1.1;
  ctx.font = font_size + "px MiQglyph";

  var input = document.getElementById("input");

  input.onkeyup = function() {
    clearCanvas(cv, ctx);
    drawText(ctx, input.value, font_size, initial_x, initial_y, line_height);
    toImage(cv);
  };
  input.change = function() {
    clearCanvas(cv, ctx);
    drawText(ctx, input.value, font_size, initial_x, initial_y, line_height);
    toImage(cv);
  };


  var save_btn = document.getElementById("save-btn");

  save_btn.onclick = function() {
    toImage(cv);
    console.log("aiueo");
  };

};


function drawText(ctx, input, font_size, ini_x, ini_y, line_height){
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
  ctx.clearRect(0, 0, cv.width, cv.height);
}

function toImage(cv) {
  var png = cv.toDataURL();
  console.log(png);
  document.getElementById("new-image").src = png;
}
