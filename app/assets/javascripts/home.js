
function drawBoard(width, height, pieces) {
  
  var canvas = $('#board');

  for (var x = 1; x <= 8; x++) {
    for (var y = 1; y <= 8; y++) {
      canvas.drawRect({
        fillStyle: ((x + y) % 2 == 1) ? '#000' : '#fff',
        x: (x - 1) * 50, y: (y - 1) * 50,
        width: 50, height: 50,
        fromCenter: false
      });
    }
  }
  
  _.each(pieces, function(info) {
    canvas.drawText({
      x: (info.x - 1) * 50 + 10,
      y: (8 - info.y) * 50 + 10,
      strokeStyle: '#f00',
      strokeWidth: 2,
      font: '30px Verdana, Sans-Serif',
      text: 'P',
      fromCenter: false
    });
  });

  canvas.click(function(e) {

    var rect = canvas.get(0).getBoundingClientRect(), root = document.documentElement;
    var x = e.clientX - canvas.get(0).offsetLeft;
    var y = e.clientY - canvas.get(0).offsetTop;
    console.log(x + '/' + y);
  });
}

$(function() {

  $.ajax({
    url: '/board',
    dataType: 'json'
  }).fail(function(xhr) {
    console.log('fail!');
  }).done(function(response) {
    console.log(response);
    drawBoard(response.width, response.height, response.board);
  });
});
