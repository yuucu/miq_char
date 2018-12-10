window.onload = function() {
  console.log("Hello, World!");

  html2canvas(document.querySelector("#capture")).then(canvas => {
    document.body.appendChild(canvas)
  });

};


function drawText(input){
  var cv = document.getElementById("cv");
  var ctx = cv.getContext('2d');
  ctx.font = "16px MiQglyph";    // サイズとフォント名を指定
  ctx.fillText(input, 20, 160);
}

function clearCanvas() {
  var cv = document.getElementById("cv");
  var ctx = cv.getContext('2d');
  ctx.clearRect(0, 0, cv.width, cv.height);
}

var app = new Vue({
  el: '#app',
  data: {
    input: '',
  },
  methods: {
    draw() {
      clearCanvas();
      console.log(this.input);
      drawText(this.input);
    }
  }
});
