function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective (string="*") {
  return function (text = "special"){
      return `You are ${string}${text}${string}!`;
  }
}

wrapAdjective("%")("a dedicated programmer");