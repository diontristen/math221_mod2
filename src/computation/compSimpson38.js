import {
    round
} from 'mathjs'
import Polynomial from 'polynomial'


export const computeSimpson38 = (equation, x1, x2, segment, roundOff) => {

    x1 = parseFloat(x1)
    x2 = parseFloat(x2)
    segment = parseFloat(segment)
    roundOff = parseInt(roundOff)

    let x = x1
    let k = 0
    let result = []
    let summation = 0


    let stepper = computeStep(x1, x2, segment,roundOff)
    
    let iterate = true

    while (iterate === true) {
        
        let fx = computeFx(equation, x, roundOff)
        let pattern = checkPattern(k, segment)
        let computed = computePattern(fx, pattern, roundOff)
        summation = round(summation + computed, roundOff)
        let data = {
            k: k,
            x: x,
            fx: fx,
            pattern: pattern,
            computed: computed
        }

        result.push(data)
    
        if (x >= x2) {
            iterate = false
        }
        x = round(x + stepper, roundOff)
        k++
    }
 
    let answer = computeSimpson(stepper, summation, roundOff)


    return {
        result,
        stepper,
        summation,
        answer
    }
}


const checkPattern = (k, segment) => {
   if (k === 0 || k === segment) {
       return 1
   } else if (k % 3 === 0) {
       return 2
   } else if (k % 3 !== 0) {
       return 3
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
    return round(((3*h)/8)*summation, roundOff)
}