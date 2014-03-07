// start slingin' some d3 here.

var circlesArray = function(num, size){
  var array = [];
  for (var i = 0; i < num; i++){
    array.push(size);
  }
  return array;
};



var svg = d3.selectAll('.circles').append('svg');
var w = window.innerWidth, h = window.innerHeight;
svg.attr({width:w, height:h });
svg.selectAll('circle').data(circlesArray(30, 10)).enter().append('circle').attr('r', function(d){return d;})
  .attr('cx', function(d){return Math.random() * w})
  .attr('cy', function(d){return Math.random() * h})
  .data(['#fcc']).attr('color', function(d){return d});




// svg.selectAll('circle').data(['blue', 'yellow', 'green']).enter().append('circle').attr('color', function(d){return d;});


// d3.selectAll('div').data([18, 4, 7]);
// d3.selectAll('div').data(['red', 'green', 'blue']).style('color', function(d){ return d; });


// d3.selectAll('div').data([18, 4, 7]).style('width', function(d){return d + '%'});
// d3.selectAll('div').data(['yellow', 'purple', 'pink']).style('color', function(d){ return d; });
