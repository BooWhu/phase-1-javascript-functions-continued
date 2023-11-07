function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  function mondayWork(activity = "to the office") {
    return `This Monday, I will go ${activity}.`;
  }
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`; // Use "I will" before the activity
  }
  
  const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer"));
