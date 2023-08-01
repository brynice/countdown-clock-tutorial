input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 12; index++) {
        basic.showNumber(countdown)
        // 1000 milliseconds = 1 second
        basic.pause(1000)
        // Play a beep sound (frequency 262Hz) for half a beat
        music.playTone(262, music.beat(BeatFraction.Half))
        countdown += -1
        if (countdown < 0) {
            // Reset the countdown to 10 after reaching 0
            countdown = 10
            basic.clearScreen()
        }
    }
})
let countdown = 0
countdown = 10
