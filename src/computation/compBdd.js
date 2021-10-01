import {
    round
} from 'mathjs'
import Polynomial from 'polynomial'

export const computeBdd = (equation, xi, step, roundOff) => {
    let x1 = computeXiDecrease(xi, step, 1, roundOff)
    let x2 = computeXiDecrease(xi, step, 2, roundOff)
    let fxi = computeFx(equation, xi, roundOff)
    let fx1 = computeFx(equation, x1, roundOff)
    let fx2 = computeFx(equation, x2, roundOff)
    let truncated = computeTruncated(fx1, fxi, step ,roundOff)
    let accurate = computeAccurate(fx2, fx1, fxi, step, roundOff)
    let data = {
        xi: xi,
        h: step,
        x1: x1,
        x2: x2,
        fxi, fxi,
        fx1: fx1,
        fx2: fx2,
        truncated: truncated,
        accurate: accurate
    }

    console.log(data)
}


const computeXiDecrease = (xi, step, multiplier, roundOff) => {
    return round(xi - (multiplier * step), roundOff)
}

const computeFx = (equation, x, roundOff) => {
    let answer = Polynomial(equation).eval(x)
    return round(answer, roundOff)
}

const computeTruncated = (fx2, fx1, step, roundOff) => {
    let answer = (fx2-fx1)/step
    return round(answer, roundOff)
}

const computeAccurate = (fx2, fx1, fxi, step, roundOff) => {
    let answer = ((3*fxi)-(4*fx1)+fx2)/(2*step)
    return round(answer, roundOff)

}