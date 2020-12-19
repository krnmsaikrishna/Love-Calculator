function lovecalc()
{
//getting name strings from input control
var  first=document.getElementById("first").value;
var second=document.getElementById("second").value;
var third="iloveyou";

//checking input values
if (first.length==0 && second.length==0)
{
}
else
{
countdown();
}
var I=0, J=0, K=0;
var ans1=0, ans2=0, ans3=0;

//conversation of names to uppercase
first=first.toUpperCase();
second=second.toUpperCase();
third=third.toUpperCase();

//getting ascii value for every character
for (I=0;I<first.length;I++)
{
ans1+=first.charCodeAt(I);
}
for (J=0;J<second.length;J++)
{
ans2+=second.charCodeAt(J);
}
for (K=0;K<third.length;K++)
{
ans3+=third.charCodeAt(K);
}

//adding ascii values
ans4=(ans1+ans2+ans3);

//loop for percentage upto below 100
while (ans4 >100)
{
ans4-=100;
}

//displaying result as a alert
document.saxna.express.value=ans4;

//countdown for display percentage
function countdown()
{
var startfrom=0;
var counter=document.saxna.bokaro.value=startfrom;
function countadd()
   {
var stopfrom=document.saxna.express.value;
       if (counter!=stopfrom)
   {
           counter+=1;
document.saxna.bokaro.value=counter+"%";
    }
        else
    {
     document.saxna.bokaro.value=counter+"%";
     return;
     }
         var t=setTimeout(countadd,100);
      }
countadd();
}
};
function clr(form)
{
document.getElementById("bokaro").value="0%";
document.getElementById("first").value="";
document.getElementById("second").value="";
document.getElementById("alert").innerHTML="Please enter he and his names and click the check button. if you want to check another names click reset button.";
};