let riktning = 1

input.onPinPressed(TouchPin.P1, function () {
    if (riktning == 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(2000)  // kör motor 2 sekunder framåt
        pins.digitalWritePin(DigitalPin.P2, 0)
        riktning = -1
    } else {
        // backa motorn genom att använda annan signal
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(2000)  // "bakåt" effekt – justera vid behov
        pins.digitalWritePin(DigitalPin.P2, 1)
        riktning = 1
    }
})

