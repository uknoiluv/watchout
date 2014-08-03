// start slingin' some d3 here.

var width = 1000;
var height = 500;
var radius = 10;

// make function which makes an array of 30 objects containing random x and y property

var makeEnemies = function(x, w, h){
  var result = [];
  for(var i = 0; i < x; i++){
    result.push({x: Math.random() * w, y: Math.random() * h});
  }
  return result;
};
// put it in setInterval Function with transition method from d3

var dragmove = function(d) {
  d3.select(this)
    .attr("cx", d.x = d3.event.x)
    .attr("cy", d.y = d3.event.y);
};

var drag = d3.behavior.drag()
    .origin(function(d) { return d; })
    .on("drag", dragmove);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var player = svg.selectAll(".player").data([{x: width / 2 ,y: height / 2}]).enter().append("circle");

player.attr("class", "player").attr("cx", function(d){return d.x;})
.attr("cy", function(d){return d.y}).attr("r", radius).attr("fill", "blue").call(drag);

var update = function(data){
  var enemy = svg.selectAll(".enemy").data(data);
  enemy.enter().append("circle");

  enemy.transition().duration(1500).attr("class", "enemy").attr("color", "blue").attr("cx", function(d){return d.x;})
  .attr("cy", function(d){return d.y}).attr("r", radius);

  enemy.exit().remove();
};

var detectCollision = function(){
  var enemy = svg.selectAll(".enemy").data();
  var player = svg.selectAll(".player").data();
  // for(var i = 0; i < enemy.length; i++){
  //   var dx = enemy[i].x
  //   var dy = 
  // }
};

setInterval(function(){
  update(makeEnemies(30, width, height))
}, 1500);

setInterval(function(){
  detectCollision();
}, 50);
