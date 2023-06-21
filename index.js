// code your solution here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  function mondayWork(events="go to the office."){
    return `This Monday, I will ${events}`
     }
     mondayWork('This Monday, I will work from home.')
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  const encouragingPromptFunction = wrapAdjective("yaass!");
  
