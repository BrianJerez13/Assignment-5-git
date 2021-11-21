//Practice a
const cel = 40; //initial Celsius variable
function converCtoF(Celsius) { //converstion from c to f
    const celsueInF = (Celsius * 9) / 5 + 32;
    return celsueInF;
}

function converFtoC(Far) { //converstion from c to f
    const farToC = ((Far-32)*5)/9;
    return farToC;
}
var f = converCtoF(cel); //set variable f to the converstion to fahrenheit
console.log(`${cel}\xB0c is ${f}\xB0f`); //display
var c = converFtoC(f); //set variable f to the conversion to celsius
console.log(`${f}\xB0f is ${c}\xB0c`); //display

//Practice b 
var LucasM = 77; //Lucas' weight in kgs
var LucasH = 1.72; //Lucas' height in meters
var JohnM = 85; //John's weight in kgs
var JohnH = 1.9; //John's height in meters
function bmiCalc(mass, height){ //bmi calculator
  const bmi = mass/(height*height);
  return bmi;
}
var JohnBmi = bmiCalc(JohnM,JohnH).toFixed(2); //calculating John's bmi
var LucasBmi = bmiCalc(LucasM,LucasH).toFixed(2); //calculating Lucas' bmi

if(JohnBmi > LucasBmi){
  console.log(`John's BMI (${JohnBmi}) is bigger than Lucas' BMI(${LucasBmi})`); //msg when John's bmi is larger than Lucas'
}else if(JohnBmi < LucasBmi){
  console.log(`John's BMI (${JohnBmi}) is smaller than Lucas' BMI(${LucasBmi})`); //msg when John's bmi is smaller than Lucas'
}else if(JohnBmi == LucasBmi){
  console.log(`John's BMI (${JohnBmi}) is equal to Lucas' BMI(${LucasBmi})`); //msg when John's bmi is equal than Lucas'
}

//Practice c
var scoreNets1 = [96, 108, 89]; //dataset for part 1
var scoreKnicks1 = [88, 91, 110]; //dataset for part 1

var scoreNets2 = [97, 112, 101]; //dataset for part 2
var scoreKnicks2 = [109, 95, 123]; //dataset for part 2

var scoreNets3 = [97, 112, 101]; //dataset for part 3
var scoreKnicks3 = [109, 95, 106]; //dataset for part 3

function calcAvg(arrayTeam){ //function to determine average of array
  var avg = 0;
  for(var x = 0; x<arrayTeam.length; x++){
    avg += arrayTeam[x];
  }
  avg = avg/arrayTeam.length;
  return avg;
}

var avgNets = calcAvg(scoreNets1); //average score of Nets into a variable
var avgKnicks = calcAvg(scoreKnicks1); //average score of Knicks into a variable

if (avgNets > avgKnicks){ //part 2, determine which team wins using comparisons
  console.log(`Winner are the Nets!`);
}else if(avgNets < avgKnicks){
  console.log(`Winner are the Knicks!`);
}else if(avgNets == avgKnicks){
  console.log(`It is a draw!`);
}
var avgNets = calcAvg(scoreNets2); //average score of Nets into a variable
var avgKnicks = calcAvg(scoreKnicks2); //average score of Knicks into a variable

if(avgNets < 100 && avgKnicks <100){ //part 3 and part 4, determine which team wins and has over 100 points
  console.log(`No winner`);
}else if(avgNets < 100 || avgKnicks < 100){
  if(avgNets<100){
    console.log(`Winner are the Knicks!`);
  }else{
    console.log(`Winner are the Nets!`);
  }
}else if(avgNets > avgKnicks){ 
  console.log(`Winner are the Nets!`);
}else if(avgNets < avgKnicks){
  console.log(`Winner are the Knicks!`);
}else if(avgNets == avgKnicks){
  console.log(`It is a draw!`);
}

//practice d
var x = prompt("Enter a number");
while(isNaN(x)){
  x = prompt("Please enter a number");
}
if(x == 10){
  console.log(`The number is matched`);
}else if (x==8){
  console.log(`The number 8 is also a match`);
}else{
  console.log(`NOT MATCHED`);
}
//document.write("Number matched");