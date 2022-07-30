let current_note = 0
let random_number = 0
let sequence: number[] = []
let current_pin = 0
led.enable(false)
let my_pins = [
DigitalPin.P0,
DigitalPin.P1,
DigitalPin.P2,
DigitalPin.P3
]
let my_notes = [
262,
294,
330,
349
]
basic.forever(function () {
    random_number = randint(0, 3)
    current_pin = my_pins[random_number]
    current_note = my_notes[random_number]
    pins.digitalWritePin(current_pin, 1)
music.ringTone(current_note)
    basic.pause(500)
    pins.digitalWritePin(current_pin, 0)
})
