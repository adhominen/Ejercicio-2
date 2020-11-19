input.onButtonPressed(Button.A, function () {
    Peso += 1
})
input.onGesture(Gesture.Shake, function () {
    Peso = 74
})
input.onButtonPressed(Button.AB, function () {
    IMC = 10000 * Peso / (Altura * Altura)
    if (IMC >= 18.25 && IMC <= 25) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else if (IMC >= 25 && IMC <= 30) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (IMC > 30) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        if (IMC < 25) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        }
    }
    basic.showNumber(IMC)
})
input.onButtonPressed(Button.B, function () {
    Peso += -1
})
let IMC = 0
let Altura = 0
let Peso = 0
Peso = 74
Altura = 180
basic.forever(function () {
    basic.showNumber(Peso)
})
