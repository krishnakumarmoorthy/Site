function myNavigator() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function openFormContacts() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("openFormbut").style.display = "none";
    document.getElementById("address").style.opacity = "0.5";
    document.getElementById("myTopnav").style.opacity = "0.5";
    document.getElementById("foot").style.opacity="0.5";
}
function openFormSprayer()
{
document.getElementById("myTopnav").style.opacity = "0.5";
document.getElementById("sprayerSection").style.opacity = "0.5";
document.getElementById("foot").style.opacity="0.5";
document.getElementById("myForm").style.display = "block";
document.getElementById("openFormbut").style.display = "none";
}
function closeFormSprayer()
{
document.getElementById("myTopnav").style.opacity = "1";
document.getElementById("sprayerSection").style.opacity = "1";
document.getElementById("foot").style.opacity="1";
document.getElementById("myForm").style.display = "none";
document.getElementById("openFormbut").style.display = "block";
}
function closeFormContacts() {
  document.getElementById("openFormbut").style.display = "block";
  document.getElementById("myForm").style.display = "none";
  document.getElementById("address").style.opacity = "1";
  document.getElementById("myTopnav").style.opacity = "1";
  document.getElementById("foot").style.opacity="1";
  }
function sprayerSpecs(a) {
   if(a===1)
   {
   document.getElementById("content").innerHTML="<div><li>High Expenditure</li><li>very injurious to health for the human who sprays</li><li>takes a lot of human energy.</li></div>";
   }
   else if(a===2)
   {
   document.getElementById("content").innerHTML="<div><li>A machine that can be operated with less human energy and less cost.</li></div>";
   }
   else if(a===3)
   {
   document.getElementById("content").innerHTML="<div>Nozzle positions, motor speed and nozzle pressure are Presetted by operator Guided for path by operator.<br><a href='https://drive.google.com/file/d/1QT9_3zMkqhIgcerI3oe1K2DNDDVNrrX_/view' target='_blank'><strong><u><font color='black'>Download Brochure</font></u></strong></a></div><br><iframe width='560' height='315' src='https://www.youtube.com/embed/NKa-OhtSLaI' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
   }
   else if(a===4)
   {
   document.getElementById("content").innerHTML="<div><li>Intelligent spraying i.e it sprays only on plantations and not in the gap.</li><li>It is battery operated hence no pollution.</li><li>It is attached in a vehicle which is powered no need for pushing it.</li><li>It has multiple nozzles which can be adjusted based on the height of the plantations.</li><li>20-30 tanks can be sprayed on one full charged.</li></div>";
   }
   else if(a===5)
   {
   document.getElementById("content").innerHTML="<li>Reduces the  cost.</li><li>Less manpower as machine is semi automated.</li><li>Uses battery power,causes no pollution.</li>";
   }
   };
function pickerSpecs(a) {
      if(a===1)
      {
      document.getElementById("content").innerHTML="<div><li>High Demand of labour</li><li>takes a lot of human energy.</li><li>Efficiency of picking is not very much.</div>";
      }
      else if(a===2)
      {
      document.getElementById("content").innerHTML="<div><li>A Automated Multi-arm robotic machine that can be operated with less human energy and which picks the cotton using Artificial Intelligence and image processing.</li></div>";
      }
      else if(a===3)
      {
      document.getElementById("content").innerHTML="<div><li>The Machine is navigated with the help of human and stops in front of cotton plant.</li><li>Then ,it starts scanning the plant and detects cotton.</li><li>Using the AI logics, the robotic arm move upto the cotton and picks it.</li><li>It has multiple arms that runs independently.</li></div>";
      }
      else if(a===4)
      {
      document.getElementById("content").innerHTML="<li>Solves the labour problem.</li><li>Less manpower as machine is automated.</li><li>Increase the efficiency of cotton picked.</li>";
      }
  };
