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
   document.getElementById("prodButton1").style.border="solid green";
   document.getElementById("prodButton2").style.border="solid black";
   document.getElementById("prodButton3").style.border="solid black";
   document.getElementById("prodButton4").style.border="solid black";
   document.getElementById("prodButton5").style.border="solid";
   document.getElementById("content").style.border="solid green";
   document.getElementById("content").innerHTML="<div><br><li>High expenditure</li><li>Very injurious to health for the human who sprays</li><li>Takes a lot of human energy.</li><br></div>";
   document.getElementById("prodButton1").style.background="#4CAF50";
   document.getElementById("prodButton1").style.color="#fff";
   document.getElementById("prodButton2").style.background="white";
   document.getElementById("prodButton2").style.color="black";
   document.getElementById("prodButton3").style.background="white";
   document.getElementById("prodButton3").style.color="black";
   document.getElementById("prodButton4").style.background="white";
   document.getElementById("prodButton4").style.color="black";
   document.getElementById("prodButton5").style.background="white";
   document.getElementById("prodButton5").style.color="black";
   }
   else if(a===2)
   {
   document.getElementById("prodButton2").style.border="solid green";
   document.getElementById("prodButton1").style.border="solid black";
   document.getElementById("prodButton3").style.border="solid black";
   document.getElementById("prodButton4").style.border="solid black";
   document.getElementById("prodButton5").style.border="solid black";
   document.getElementById("content").style.border="solid green";
   document.getElementById("content").innerHTML="<div><br><li>A machine that can be operated with less human energy and less cost.</li><br></div>";
   document.getElementById("prodButton2").style.background="#4CAF50";
   document.getElementById("prodButton2").style.color="#fff";
   document.getElementById("prodButton1").style.background="white";
   document.getElementById("prodButton1").style.color="black";
   document.getElementById("prodButton3").style.background="white";
   document.getElementById("prodButton3").style.color="black";
   document.getElementById("prodButton4").style.background="white";
   document.getElementById("prodButton4").style.color="black";
   document.getElementById("prodButton5").style.background="white";
   document.getElementById("prodButton5").style.color="black";
   }
   else if(a===3)
   {
   document.getElementById("prodButton3").style.border="solid green";
   document.getElementById("prodButton2").style.border="solid black";
   document.getElementById("prodButton1").style.border="solid black";
   document.getElementById("prodButton4").style.border="solid black";
   document.getElementById("prodButton5").style.border="solid black";
   document.getElementById("content").style.border="solid green";
   document.getElementById("content").innerHTML="<div>Nozzle positions, motor speed and nozzle pressure are presetted by operator guided for path by operator.<br><a href='https://drive.google.com/file/d/1QT9_3zMkqhIgcerI3oe1K2DNDDVNrrX_/view?usp=sharing' target='_blank'><strong><u><font color='black'>Download brochure</font></u></strong></a></div><br><iframe width='560' height='315' src='https://www.youtube.com/embed/NKa-OhtSLaI' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
   document.getElementById("prodButton3").style.background="#4CAF50";
   document.getElementById("prodButton3").style.color="#fff";
   document.getElementById("prodButton2").style.background="white";
   document.getElementById("prodButton2").style.color="black";
   document.getElementById("prodButton1").style.background="white";
   document.getElementById("prodButton1").style.color="black";
   document.getElementById("prodButton4").style.background="white";
   document.getElementById("prodButton4").style.color="black";
   document.getElementById("prodButton5").style.background="white";
   document.getElementById("prodButton5").style.color="black";
   }
   else if(a===4)
   {
   document.getElementById("prodButton4").style.border="solid green";
   document.getElementById("prodButton2").style.border="solid black";
   document.getElementById("prodButton3").style.border="solid black";
   document.getElementById("prodButton1").style.border="solid black";
   document.getElementById("prodButton5").style.border="solid black";
   document.getElementById("content").style.border="solid green";
   document.getElementById("content").innerHTML="<div><br><li>Intelligent spraying i.e it sprays only on plantations and not in the gap.</li><li>It is battery operated hence no pollution.</li><li>It is attached in a vehicle which is powered and no need for pushing it.</li><li>It has multiple nozzles which can be adjusted based on the height of the plantations.</li><li>20-30 tanks can be sprayed once the battery is fully charged.</li><br></div>";
   document.getElementById("prodButton4").style.background="#4CAF50";
   document.getElementById("prodButton4").style.color="#fff";
   document.getElementById("prodButton2").style.background="white";
   document.getElementById("prodButton2").style.color="black";
   document.getElementById("prodButton3").style.background="white";
   document.getElementById("prodButton3").style.color="black";
   document.getElementById("prodButton1").style.background="white";
   document.getElementById("prodButton1").style.color="black";
   document.getElementById("prodButton5").style.background="white";
   document.getElementById("prodButton5").style.color="black";
   }
   else if(a===5)
   {
   document.getElementById("prodButton5").style.border="solid green";
   document.getElementById("prodButton2").style.border="solid black";
   document.getElementById("prodButton3").style.border="solid black";
   document.getElementById("prodButton4").style.border="solid black";
   document.getElementById("prodButton1").style.border="solid black";
   document.getElementById("content").style.border="solid green";
   document.getElementById("content").innerHTML="<div><br><li>Reduces the  cost.</li><li>Less manpower as machine is semi automated.</li><li>Uses battery power,causes no pollution.</li><br></div>";
   document.getElementById("prodButton5").style.background="#4CAF50";
   document.getElementById("prodButton5").style.color="#fff";
   document.getElementById("prodButton2").style.background="white";
   document.getElementById("prodButton2").style.color="black";
   document.getElementById("prodButton3").style.background="white";
   document.getElementById("prodButton3").style.color="black";
   document.getElementById("prodButton4").style.background="white";
   document.getElementById("prodButton4").style.color="black";
   document.getElementById("prodButton1").style.background="white";
   document.getElementById("prodButton1").style.color="black";
   }
   };
   function weederSpecs(a) {
      if(a===1)
      {
      document.getElementById("prodButton7").style.border="solid";
      document.getElementById("prodButton6").style.border="solid green";
      document.getElementById("prodButton8").style.border="solid black";
      document.getElementById("prodButton9").style.border="solid black";
      document.getElementById("prodButton10").style.border="solid black";
      document.getElementById("content").style.border="solid green";
      document.getElementById("content").innerHTML="<div><br><li>High expenditure.</li><li>Labour scarcity.</li><li>Takes a lot of human energy.</li><br></div>";
      document.getElementById("prodButton6").style.background="#4CAF50";
      document.getElementById("prodButton6").style.color="#fff";
      document.getElementById("prodButton7").style.background="white";
      document.getElementById("prodButton7").style.color="black";
      document.getElementById("prodButton8").style.background="white";
      document.getElementById("prodButton8").style.color="black";
      document.getElementById("prodButton9").style.background="white";
      document.getElementById("prodButton9").style.color="black";
      document.getElementById("prodButton10").style.background="white";
      document.getElementById("prodButton10").style.color="black";
      }
      else if(a===2)
      {
      document.getElementById("prodButton7").style.border="solid green";
      document.getElementById("prodButton6").style.border="solid black";
      document.getElementById("prodButton8").style.border="solid black";
      document.getElementById("prodButton9").style.border="solid black";
      document.getElementById("prodButton10").style.border="solid black";
      document.getElementById("content").style.border="solid green";
      document.getElementById("content").innerHTML="<div><br><li>A self propelled battery operated weed remover machine.</li><br></div>";
      document.getElementById("prodButton7").style.background="#4CAF50";
      document.getElementById("prodButton7").style.color="#fff";
      document.getElementById("prodButton6").style.background="white";
      document.getElementById("prodButton6").style.color="black";
      document.getElementById("prodButton8").style.background="white";
      document.getElementById("prodButton8").style.color="black";
      document.getElementById("prodButton9").style.background="white";
      document.getElementById("prodButton9").style.color="black";
      document.getElementById("prodButton10").style.background="white";
      document.getElementById("prodButton10").style.color="black";
      }
      else if(a===3)
      {
      document.getElementById("prodButton8").style.border="solid green";
      document.getElementById("prodButton7").style.border="solid black";
      document.getElementById("prodButton6").style.border="solid black";
      document.getElementById("prodButton9").style.border="solid black";
      document.getElementById("prodButton10").style.border="solid black";
      document.getElementById("content").style.border="solid green";
      document.getElementById("content").innerHTML="<div><br><li>Adjust the weeder tool for needed depth.</li><li>Set the desired speed using regulator.</li><li>Switch on the power button.</li><li>Hold the vehicle and guide its path.</li><br><!---<a href='https://drive.google.com/file/d/1QT9_3zMkqhIgcerI3oe1K2DNDDVNrrX_/view' target='_blank'><strong><u><font color='black'>Download brochure</font></u></strong></a></div><br><iframe width='560' height='315' src='https://www.youtube.com/embed/NKa-OhtSLaI' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>-->";
      document.getElementById("prodButton8").style.background="#4CAF50";
      document.getElementById("prodButton8").style.color="#fff";
      document.getElementById("prodButton7").style.background="white";
      document.getElementById("prodButton7").style.color="black";
      document.getElementById("prodButton6").style.background="white";
      document.getElementById("prodButton6").style.color="black";
      document.getElementById("prodButton9").style.background="white";
      document.getElementById("prodButton9").style.color="black";
      document.getElementById("prodButton10").style.background="white";
      document.getElementById("prodButton10").style.color="black";
      }
      else if(a===4)
      {
      document.getElementById("prodButton9").style.border="solid green";
      document.getElementById("prodButton7").style.border="solid black";
      document.getElementById("prodButton8").style.border="solid black";
      document.getElementById("prodButton6").style.border="solid black";
      document.getElementById("prodButton10").style.border="solid black";
      document.getElementById("content").style.border="solid green";
      document.getElementById("content").innerHTML="<div><br><li>Motor driven vehicle.</li><li>Depth can be adjusted.</li><li>It can weed upto 7.5cm.</li><br></div>";
      document.getElementById("prodButton9").style.background="#4CAF50";
      document.getElementById("prodButton9").style.color="#fff";
      document.getElementById("prodButton7").style.background="white";
      document.getElementById("prodButton7").style.color="black";
      document.getElementById("prodButton8").style.background="white";
      document.getElementById("prodButton8").style.color="black";
      document.getElementById("prodButton6").style.background="white";
      document.getElementById("prodButton6").style.color="black";
      document.getElementById("prodButton10").style.background="white";
      document.getElementById("prodButton10").style.color="black";
      }
      else if(a===5)
      {
      document.getElementById("prodButton10").style.border="solid green";
      document.getElementById("prodButton7").style.border="solid black";
      document.getElementById("prodButton8").style.border="solid black";
      document.getElementById("prodButton9").style.border="solid black";
      document.getElementById("prodButton6").style.border="solid black";
      document.getElementById("content").style.border="solid green";
      document.getElementById("content").innerHTML="<div><br><li>Reduces the  cost.</li><li>Easy to handle.</li><li>Eco-friendly.</li><li>Less manpower as machine is semi automated.</li><li>Less or no fuel cost.</li><br></div>";
      document.getElementById("prodButton10").style.background="#4CAF50";
      document.getElementById("prodButton10").style.color="#fff";
      document.getElementById("prodButton7").style.background="white";
      document.getElementById("prodButton7").style.color="black";
      document.getElementById("prodButton8").style.background="white";
      document.getElementById("prodButton8").style.color="black";
      document.getElementById("prodButton9").style.background="white";
      document.getElementById("prodButton9").style.color="black";
      document.getElementById("prodButton6").style.background="white";
      document.getElementById("prodButton6").style.color="black";
      }
      };
function pickerSpecs(a) {
      if(a===1)
      {
      document.getElementById("prodButton11").style.border="solid green";
      document.getElementById("prodButton12").style.border="solid black";
      document.getElementById("prodButton13").style.border="solid black";
      document.getElementById("prodButton14").style.border="solid black";
      document.getElementById("content").style.border="solid green";
      document.getElementById("content").innerHTML="<div><br><li>High demand of labour</li><li>Takes a lot of human energy.</li><li>Efficiency of picking is not good.</li><br></div>";
      document.getElementById("prodButton11").style.background="#4CAF50";
      document.getElementById("prodButton11").style.color="#fff";
      document.getElementById("prodButton12").style.background="white";
      document.getElementById("prodButton12").style.color="black";
      document.getElementById("prodButton13").style.background="white";
      document.getElementById("prodButton13").style.color="black";
      document.getElementById("prodButton14").style.background="white";
      document.getElementById("prodButton14").style.color="black";
      }
      else if(a===2)
      {
      document.getElementById("prodButton12").style.border="solid green";
      document.getElementById("prodButton11").style.border="solid black";
      document.getElementById("prodButton13").style.border="solid black";
      document.getElementById("prodButton14").style.border="solid black";
      document.getElementById("content").style.border="solid green";
      document.getElementById("content").innerHTML="<div><br><li>A automated multi-arm robot that can be operated with less human energy and which picks the cotton using artificial intelligence and image processing.</li><br></div>";
      document.getElementById("prodButton12").style.background="#4CAF50";
      document.getElementById("prodButton12").style.color="#fff";
      document.getElementById("prodButton11").style.background="white";
      document.getElementById("prodButton11").style.color="black";
      document.getElementById("prodButton13").style.background="white";
      document.getElementById("prodButton13").style.color="black";
      document.getElementById("prodButton14").style.background="white";
      document.getElementById("prodButton14").style.color="black";
      }
      else if(a===3)
      {
      document.getElementById("prodButton13").style.border="solid green";
      document.getElementById("prodButton12").style.border="solid black";
      document.getElementById("prodButton11").style.border="solid black";
      document.getElementById("prodButton14").style.border="solid black";
      document.getElementById("content").style.border="solid green";
      document.getElementById("content").innerHTML="<div><br><li>The machine is navigated with the help of human and stops in front of cotton plant.</li><li>It starts scanning the plant and detects cotton.</li><li>Using AI logics, the robotic arm move upto the cotton and picks it.</li><br></div>";
      document.getElementById("prodButton13").style.background="#4CAF50";
      document.getElementById("prodButton13").style.color="#fff";
      document.getElementById("prodButton12").style.background="white";
      document.getElementById("prodButton12").style.color="black";
      document.getElementById("prodButton11").style.background="white";
      document.getElementById("prodButton11").style.color="black";
      document.getElementById("prodButton14").style.background="white";
      document.getElementById("prodButton14").style.color="black";
      }
      else if(a===4)
      {
      document.getElementById("prodButton14").style.border="solid green";
      document.getElementById("prodButton12").style.border="solid black";
      document.getElementById("prodButton13").style.border="solid black";
      document.getElementById("prodButton11").style.border="solid black";
      document.getElementById("content").style.border="solid green";
      document.getElementById("content").innerHTML="<div><br><li>Solves the labour problem.</li><li>Less manpower as machine is automated.</li><li>Increase the efficiency of picking.</li><br></div>";
      document.getElementById("prodButton14").style.background="#4CAF50";
      document.getElementById("prodButton14").style.color="#fff";
      document.getElementById("prodButton12").style.background="white";
      document.getElementById("prodButton12").style.color="black";
      document.getElementById("prodButton13").style.background="white";
      document.getElementById("prodButton13").style.color="black";
      document.getElementById("prodButton11").style.background="white";
      document.getElementById("prodButton11").style.color="black";
      }
  };
