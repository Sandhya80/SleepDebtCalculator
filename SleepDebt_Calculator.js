/* Using if/else/if statements:

const getSleepHours = day => {
if (day === 'monday')  {
  return 7;
}  else if (day === 'tuesday')  {
  return 8;
}  else if (day === 'wednesday')  {
  return 6;  
}  else if (day === 'thursday')  {
  return 8;
}  else if (day === 'friday')  {
  return 7;
}  else if (day === 'saturday')  {
  return 8;
}  else (day === 'sunday')  
  return 7;
}; 
*/

//using switch:

const getSleepHours = day => {
switch(day)  {
  case 'monday': 
  return 7
  break;
  case 'tuesday':
  return 8
  break;
  case 'wednesday':
  return 6
  break;  
  case 'thursday':
  return 8
  break;
  case 'friday':
  return 7
  break;
  case'saturday':
  return 8
  break;
  case'sunday':  
  return 7
  break;
default:
  return "Error!"
 }
};

//total sleep hours that you slept
const getActualSleepHours = () => 
   getSleepHours('monday') +
   getSleepHours('tuesday') + 
   getSleepHours('wednesday') +
   getSleepHours('thursday') +
   getSleepHours('friday') +
   getSleepHours('saturday') +
   getSleepHours('sunday')
   getActualSleepHours();

/* Testing my functions
console.log(getSleepHours('saturday'));
console.log(getActualSleepHours()); */

//calculating my preferred total hours
const getIdealSleepHours = () => {
 let idealHours = 8;
  return idealHours * 7;  
};

/*Testing functions:
console.log(getActualSleepHours());
console.log(getidealSleepHours()); */

//calculating sleep debt:
const calculateSleepDebt =() => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours)  {
  console.log('You got the perfect amount of sleep!');
} else if (actualSleepHours > idealSleepHours)  {
  console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours of more sleep than was needed.');
} else if (actualSleepHours < idealSleepHours)  {
  console.log('You should get ' +(idealSleepHours - actualSleepHours) + ' hours of more sleep now. Better go get some rest.');
} else  {
  console.log('Error!');
} 
};
calculateSleepDebt(); 
/*
//Rewriting the above code using literal numbers and operators. 
const getActualSleepHours = () => 7 + 8 + 6 + 8 + 7 + 8 + 7;
const getIdealSleepHours = idealHours => idealHours * 7;

//Calling the updated function:
const calculateSleepDebt = () =>  {
 
}; */