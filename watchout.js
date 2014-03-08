// start slingin' some d3 here.


var width = 600;
var height = 600;
var size = 10;

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("background", "#ccc");
  // .append("g");


// svg.append("rect")
//   .attr("width", width)
//   .attr("height", height)
//   .attr("fill", "#ccc");


var update = function(data) {

  svg.selectAll('circle').data(data).enter()


  var enemies = svg.selectAll("circle").data(data);

  enemies.attr("class","update");

  enemies.enter().append("enemies")
    .attr("class", "enter")
    .attr("cx", function(d){return d.x;})
    .attr("cy", function(d){return d.y;})
    .attr("r", size);
  // enemies.enter().append("circle");
  enemies.exit().remove();

};

setInterval(function(){
  update(randomPosition(30));
}, 500);

var randomPosition = function(num){
  var array = [];
  var posObj ={};
  for (var i = 0; i < num; i++){
    posObj['x'] = (Math.random()*600);
    posObj['y'] = (Math.random()*600);
    array.push(posObj)
  }
  console.log(array);
  return array;
  // return posObj;
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

