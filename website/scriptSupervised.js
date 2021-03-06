var index = 0, find = 0, flag=0, movement=false, test, test_status, question,
choice, choices, chA, chB, chC,chCor, correct = 0, first15Correct = 0,
red = 0, green = 0, first_time = true, resultText1,resultText2,resultText3, wrong;

var size = 24;
var wrongAnswers = new Array(size) ;

function start(){
document.getElementById("warning").setAttribute("style", "visibility:hidden;")
quiz_status.innerHTML = "<h2>Test a patient</h2>";
buttons_container.innerHTML = "<button  class='button button1 centerize' onclick='play()'>Run Test</button>";
}

function getCV(){
if(first15Correct >= 13){
       resultText1=" <h3>His/Her colour vision is considered as adequate.</h3>";
   }else if(first15Correct >= 10){
       resultText1=" <h3>His/Her colour vision is considered as normal.</h3>";
   }else{
       resultText1=" <h3>His/Her colour vision is considered as deficient.</h3>";
   }
}

function printRG(){
if(red>=2){
     resultText2=" <h3>Patient might have protanopia or strong protanomalia.</h3>";
     quiz_status.innerHTML += resultText2;
 }
if(green>=2){
     resultText2=" <h3>Patient might have deuteranopia or strong deuteranomalia.</h3>";
     quiz_status.innerHTML += resultText2;
 }
}

function getPatientWrongQuestions(){
if(correct!=size){
quiz_status.innerHTML += "<h3>Patient answered wrong to questions: </h3>";
       for(var i = 0; i < size; i++){
           if(wrongAnswers[i] !=-1){
               wrong= wrongAnswers[i]+1 ;
               quiz_status.innerHTML += wrong+" ";
           }
       }
}
}

function printResults(){



quiz_question.innerHTML = "";
quiz_answers.innerHTML = "";
quiz_status.innerHTML = "<h2>Test Completed</h2>";
quiz_status.innerHTML += "<h3>Patient got "+correct+" of "+size+" questions correct</h3>";
getCV();
quiz_status.innerHTML += resultText1;
printRG();
getPatientWrongQuestions();
quiz_status.innerHTML += " <h3>If there any doubts whether patient has deficient, <br /> other colour vision tests, including anomaloscope can be done.</h3>";
buttons_container.innerHTML= "<button class='button button1 ' onclick='play()'>Test Again</button>";
index = 0;
correct = 0;
first15Correct = 0;
green = 0;
red = 0;
}

function play(){
if(index<size){
loadDoc();
}else{
printResults();
return false;
}
}


function loadDoc() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
 showQuestion(this);
}
};
xhttp.open("GET", "quizData.xml", true);
xhttp.send();
}

function showQuestion(xml){

var xmlDoc = xml.responseXML;
var x = xmlDoc.getElementsByTagName("QUESTION");
question = x[index].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
chA = x[index].getElementsByTagName("CHOICE_ONE")[0].childNodes[0].nodeValue;
chB = x[index].getElementsByTagName("CHOICE_TWO")[0].childNodes[0].nodeValue;
chC = x[index].getElementsByTagName("CHOICE_THREE")[0].childNodes[0].nodeValue;
chCor = x[index].getElementsByTagName("ANSWER")[0].childNodes[0].nodeValue;

quiz_status.innerHTML = "Question "+(index+1)+" of "+size;
if(index==0){
quiz_question.innerHTML  = "<img id ='img'>";
}
$("#img").attr("src",question);
warning.innerHTML = "nothing";
quiz_answers.innerHTML = "<input type='radio' name='option ' value='A' id='A' onclick='markQuestion(id)'>"+chA;
quiz_answers.innerHTML += "<input type='radio' name='option ' value='B' id='B' onclick='markQuestion(id)' >"+chB;
quiz_answers.innerHTML += "<input type='radio' name='option ' value='C' id='C' onclick='markQuestion(id)' >"+chC;
buttons_container.innerHTML = "<button class='button button1' onclick='move()'>Next Answer</button>";

}

function markQuestion(element){
choice = element;
find=1;
movement=true;
   if(choice == chCor){
     correct++;
     wrongAnswers[index]=-1;
     if(index<15){
     first15Correct++;
    }

 }else{
     if (index>=15 && index<=17) {
          if(choice == 'B'){
            red++;
          }
           if(choice == 'C'){
             green++;
           }
         }
         wrongAnswers[index]=index;
   }
}

function move(){
if(movement)
{ index++;
find=0;
movement=false;
first_time = true;
document.getElementById("warning").setAttribute("style", "visibility:hidden;")
play();
}else{
warning.innerHTML = "Please choose an answer!";
document.getElementById("warning").setAttribute("style", "visibility:visible;");
}
}

window.addEventListener("load", start, false);
