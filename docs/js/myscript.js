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


  var home_content = document.getElementById('home');
  var link_content = document.getElementById('link');

  var home_nav = document.getElementById('nav-home');
  var link_nav = document.getElementById('nav-link');

  document.getElementById('nav-title').onclick = function() {
    $(link_content).hide();
    $(home_content).fadeIn();
    link_nav.classList.remove('active');
    home_nav.classList.add('active');
  };

  home_nav.onclick = function() {
    $(link_content).hide();
    $(home_content).fadeIn();
    link_nav.classList.remove('active');
    home_nav.classList.add('active');
  };
  link_nav.onclick = function() {
    $(home_content).hide();
    $(link_content).fadeIn();
    home_nav.classList.remove('active');
    link_nav.classList.add('active');
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
