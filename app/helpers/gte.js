import { helper } from "@ember/component/helper"

var gte = ([num1, num2]) => {
    if (num1 >= num2) return true
    else false

}

export default helper(gte)