import { helper } from "@ember/component/helper"
var adderHelper = ([array]) => {
    let sum = 0;

    for (var i = 0; i < array.length; i++){
        if(isNaN(array[i])) return "ERROR: NOT ALL VALUES ARE NUMBERS"

        sum = sum + array[i]
    }

    //debugger
    return sum
}

export default helper(adderHelper)