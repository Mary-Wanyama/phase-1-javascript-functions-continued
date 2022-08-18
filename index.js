// code your solution here
function saturdayFun(fun = 'roller-skate') {
    return `This Saturday, I want to ${fun}!`;
}
saturdayFun('bathe my dog');
function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(special = "*"){

    return function(text = "programmer"){
        return `You are ${special}${text}${special}!`;
    };
};
wrapAdjective("|| an amazing student ||")