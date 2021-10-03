import {
    round
} from 'mathjs'
import Polynomial from 'polynomial'


export const computeSimpson13 = (equation, x1, x2, segment, roundOff) => {
    let stepper = computeStep(x1, x2, segment,roundOff)
    
    let iterate = true
    

    let x = x1
    let k = 0
    let result = []
    let summation = 0
    while (iterate === true) {
        
        let fx = computeFx(equation, x, roundOff)
        let pattern = checkPattern(k, segment)
        let computed = computePattern(fx, pattern, roundOff)
        summation = summation + computed
        let data = {
            k: k,
            x: x,
            fx: fx,
            pattern: pattern,
            computed: computed
        }

        result.push(data)
    
        if (x === x2) {
            iterate = false
        }
        x = round(x + stepper, roundOff)
        k++
    }
 
    let simpson1_3 = computeSimpson(stepper, summation, roundOff)

    return {
        result,
        summation,
        simpson1_3
    }
}


const checkPattern = (k, segment) => {
   if (k === 0 || k === segment) {
       return 1
   } else if (k % 2 === 0) {
       return 2
   } else if (k % 2 === 1) {
       return 4
   } else {
       return 1
   }
}

const computeFx = (equation, x, roundOff) => {
    let answer = Polynomial(equation).eval(x)
    return round(answer, roundOff)
}

const computePattern = (fx , pattern, roundOff) => {
    return round(fx * pattern, roundOff)
}

const computeStep = (x1, x2, segment, roundOff) => {
    return round((x2-x1)/segment, roundOff)
}

const computeSimpson = (h, summation,  roundOff) => {
    return round((h/3)*summation, roundOff)
}