input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    Start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    Elapsed = input.runningTime() - Start
    basic.showNumber(Math.abs(Seconds - Elapsed / 1000))
    basic.clearScreen()
    if (Math.abs(Seconds - Elapsed / 1000) <= 1) {
        basic.showString("WELL DONE!")
        basic.showIcon(IconNames.Happy)
        soundExpression.happy.play()
    } else {
        basic.showString("TRY AGAIN")
        basic.showIcon(IconNames.Sad)
        soundExpression.sad.play()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("HELLO!")
    soundExpression.hello.play()
})
let Elapsed = 0
let Start = 0
let Seconds = 0
Seconds = randint(3, 8)
basic.showNumber(Seconds)
