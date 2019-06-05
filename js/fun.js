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
    document.getElementById("foott").style.opacity="0.5";
}
function openFormSprayer()
{

document.getElementById("myTopnav").style.opacity = "0.2";
document.getElementById("sprayerSection").style.opacity = "0.2";
document.getElementById("foott").style.opacity="0.2";
document.getElementById("myForm").style.display = "block";
document.getElementById("openFormbut").style.display = "none";
}
function closeFormSprayer()
{
document.getElementById("myTopnav").style.opacity = "1";
document.getElementById("sprayerSection").style.opacity = "1";
document.getElementById("foott").style.opacity="1";
document.getElementById("myForm").style.display = "none";
document.getElementById("openFormbut").style.display = "block";
}
function closeFormContacts() {
  document.getElementById("openFormbut").style.display = "block";
  document.getElementById("myForm").style.display = "none";
  document.getElementById("address").style.opacity = "1";
  document.getElementById("myTopnav").style.opacity = "1";
  document.getElementById("foott").style.opacity="1";
  }
function sprayerSpecs(a) {
   if(a===1)
   {
   document.getElementById("content").innerHTML="<div class='borderNav'><br><li>High expenditure</li><li>Very injurious to health for the human who sprays</li><li>Takes a lot of human energy.</li><br></div>";
   }
   else if(a===2)
   {
   document.getElementById("content").innerHTML="<div class='borderNav'><br><li>A machine that can be operated with less human energy and less cost.</li><br></div>";
   }
   else if(a===3)
   {
   document.getElementById("content").innerHTML="<div class='borderNav'>Nozzle positions, motor speed and nozzle pressure are presetted by operator guided for path by operator.<br><a href='https://drive.google.com/file/d/1QT9_3zMkqhIgcerI3oe1K2DNDDVNrrX_/view' target='_blank'><strong><u><font color='black'>Download brochure</font></u></strong></a></div><br><iframe width='560' height='315' src='https://www.youtube.com/embed/NKa-OhtSLaI' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
   }
   else if(a===4)
   {
   document.getElementById("content").innerHTML="<div class='borderNav'><br><li>Intelligent spraying i.e it sprays only on plantations and not in the gap.</li><li>It is battery operated hence no pollution.</li><li>It is attached in a vehicle which is powered and no need for pushing it.</li><li>It has multiple nozzles which can be adjusted based on the height of the plantations.</li><li>20-30 tanks can be sprayed once the battery is fully charged.</li><br></div>";
   }
   else if(a===5)
   {
   document.getElementById("content").innerHTML="<div class='borderNav'><br><li>Reduces the  cost.</li><li>Less manpower as machine is semi automated.</li><li>Uses battery power,causes no pollution.</li><br></div>";
   }
   };
function pickerSpecs(a) {
      if(a===1)
      {
      document.getElementById("content").innerHTML="<div class='borderNav'><br><li>High demand of labour</li><li>Takes a lot of human energy.</li><li>Efficiency of picking is not good.<br></div>";
      }
      else if(a===2)
      {
      document.getElementById("content").innerHTML="<div class='borderNav'><br><li>A automated multi-arm robot that can be operated with less human energy and which picks the cotton using artificial intelligence and image processing.</li><br></div>";
      }
      else if(a===3)
      {
      document.getElementById("content").innerHTML="<div class='borderNav'><br><li>The machine is navigated with the help of human and stops in front of cotton plant.</li><li>Then ,it starts scanning the plant and detects cotton.</li><li>Using the AI logics, the robotic arm move upto the cotton and picks it.</li><br></div>";
      }
      else if(a===4)
      {
      document.getElementById("content").innerHTML="<div class='borderNav'><br><li>Solves the labour problem.</li><li>Less manpower as machine is automated.</li><li>Increase the efficiency of picking.</li><br></div>";
      }
  };
