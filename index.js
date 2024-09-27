// code your solution here
function saturdayFun(coolThing = "roller-skate"){
    return (`This Saturday, I want to ${coolThing}!`)
}
saturdayFun();

const mondayWork = function (dailyActivity = "go to the office"){
    return (`This Monday, I will ${dailyActivity}.`)
}
mondayWork();

function wrapAdjective(visualFlare = '*'){
    return function (encouragingAdjective = 'special') {
        return `You are ${visualFlare}${encouragingAdjective}${visualFlare}!`
    }
}