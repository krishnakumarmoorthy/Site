function myNavigator() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function specs(a) {
   if(a===1)
   {
   document.getElementById("content").innerHTML="<div><li>High Expenditure</li><li>very injurious to health for the human who                                  sprays</li><li>takes a lot of human energy.</li></div>";
   }
   else if(a===2)
   {
   document.getElementById("content").innerHTML="<div><li>A machine that can be operated with less human energy and less cost.</li></div>";
   }
   else if(a===3)
   {
   document.getElementById("content").innerHTML="<div>Nozzle positions, motor speed and nozzle pressure are Presetted by operator Guided for path by operator.<br><a href='https://drive.google.com/file/d/1QT9_3zMkqhIgcerI3oe1K2DNDDVNrrX_/view' target='_blank'><strong><u><font color='black'>Download Brochure</font></u></strong></a></div>";
   }
   else if(a===4)
   {
   document.getElementById("content").innerHTML="<li>Reduces the  cost.</li><li>Less manpower as machine is semi automated.</li><li>Uses battery power,causes no pollution.</li>";
   }
   };
