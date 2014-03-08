// start slingin' some d3 here.


var width = 600;
var height = 600;
var size = 10;
var pos = 300;

var svg = d3.select("body").append("svg").append("g");


var renderEnemy = function(data) {

  var enemies = svg.selectAll("circle").data(data, function(d){return d.id;});

  enemies.enter().append("circle")
  .attr("r", size)
  .attr("class", "enemy");

  enemies.transition().duration(1000).attr("cx", function(d){return d.x;})
  .attr("cy", function(d){return d.y;});

  enemies.exit().remove();

};

// # svg:rect x="0" y="0" width="0" height="0" rx="0" ry="0"

var renderPlayer = function(data){
  var player = svg.selectAll("rect").data(data);
  player.enter().append("rect").attr("class", "player");
  player.attr("width", 20).attr("height", 20).attr("x", function(d){return d.x;})
    .attr("y", function(d){return d.y;});



  var dragMove = function(){
    playerX += d3.event.dx;
    playerY += d3.event.dy;
    renderPlayer([{"x":playerX, "y":playerY}]);
  };

  player.call(d3.behavior.drag().on('drag', dragMove));
};

var playerX = 300;
var playerY = 300;

renderPlayer([{"x":playerX, "y":playerY}]);


setInterval(function(){
  renderEnemy(randomPosition(30));
}, 1000);


var randomPosition = function(num){
  var array = [];
  for (var i = 0; i < num; i++){
    var posObj ={};
    posObj['id'] = i;
    posObj['x'] = Math.random()*600;
    posObj['y'] = Math.random()*600;
    array.push(posObj);
  }
  console.log(array);
  return array;
};



// var circlesArray = function(num, size){
//   var array = [];
//   for (var i = 0; i < num; i++){
//     array.push(size);
//   }
//   return array;
// };

// var count = 0;
// var circleMaker = function(){
//   console.log(count++);
// var svg = d3.selectAll('.circles').append('svg');
// var w = window.innerWidth, h = window.innerHeight;
// svg.attr({width:w, height:h });
// svg.selectAll('circle').data(circlesArray(30, 10)).enter().append('circle').attr('r', function(d){return d;})
//   .attr('cx', function(d){return Math.random() * w;})
//   .attr('cy', function(d){return Math.random() * h;})
//   .data(['#fcc']).attr('color', function(d){return d;});
//   setTimeout(circleMaker, 500);
// };


// circleMaker();

