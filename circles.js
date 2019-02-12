 // Create a Paper.js Path to draw a line into it:
 var path = new Path();
 // Give the stroke a color
 
 path.strokeColor = 'black';
 var start = new Point(100, 100);
 // Move to start and draw a line from there
 path.moveTo(start);
 // Note the plus operator on Point objects.
 // PaperScript does that for us, and much more!
 path.lineTo(start + [ 100, -50 ]);


 // var circle2 = new Path.Circle(new Point(50,50), 300);
 // circle2.fillColor = "purple";

 function onResize(event) {
     // Whenever the window is resized, recenter the path:
     path.position = view.center;
 }

 var circleArr;

 for(var i=0; i<10; i++){
     for(var j=0; j<10; j++){
         circleArr[i][j] = new Path.Circle(new Point(100*i,100*j), 50);
     }
 }