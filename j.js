
//defining the object that will be passed to PlotFuncion method with some default vals


var parameters = {
    target: '#myFunction',
    data: [{
      fn: '2*x', 
      color: 'red'
   }],
   
    grid: true,
    
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [-3.14,3.14]}
  };


  
  function plot() {
    try{
    //fetching data 
    var f =document.querySelector("#function").value;
    var xMin = document.querySelector("#xMin").value;
    var xMax = document.querySelector("#xMax").value;

    //checking if x min < x max
    if(parseFloat(xMax)<=parseFloat(xMin)){
      throw 'xMax must be greater than xmin';
    }
    // deducing min and max y for better experience by getting max and min y vals through eval() method
    //initalizing max to f(xMax)    

    //replacing ^ with ** to match power operator for eval 
    var newf = f.replace(/\^/g, "**");
    
    var x=xMax;
    var max=eval(eval('\"'+newf+'\"'));
    
    //initalizing min to f(xMin)
    x=parseFloat(xMin);
    var min=eval(eval('\"'+newf+'\"'))


    while(x<=parseFloat(xMax)){
    min=Math.min(min,eval(eval('\"'+newf+'\"')));
    max=Math.max(max,eval(eval('\"'+newf+'\"')));
    console.log( min +" , "+ max+"  x= "+x+ "   f: "+newf)
    x=parseFloat(x)+0.25;// percsion vs time, the lower value the more accurate x but more computation time and viceversa
    }

    var yMin = min;
    var yMax = max;
    var color = document.querySelector("#color").value;
    parameters.data[0].fn = f;  
    parameters.xAxis.domain = [xMin, xMax];
    parameters.yAxis.domain = [yMin, yMax];
    parameters.data[0].color = color;
    document.querySelector("#error").innerHTML ="";
    functionPlot(parameters);
    }catch(err){
      //showing any syntax error inputs from user
      document.querySelector("#error").innerHTML =err;
    }

  }
  
  
  
  
  