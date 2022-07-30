input.onButtonPressed(Button.A, function () {
    sequence_length += 1
    create_sequences(sequence_length)
    for (let index = 0; index <= sequence_length - 1; index++) {
        pins.digitalWritePin(pin_sequence[index], 1)
music.playTone(note_sequence[index], music.beat(BeatFraction.Whole))
        basic.pause(100)
        pins.digitalWritePin(pin_sequence[index], 0)
basic.pause(100)
        correct = true
        for (let index = 0; index <= sequence_length - 1; index++) {
            if (input.pinIsPressed(TouchPin.P0)) {
            	
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    sequence_length = 0
})
function create_sequences (num: number) {
    pin_sequence = []
    note_sequence = []
    for (let index = 0; index < num; index++) {
        random_number = randint(0, 3)
        my_pin = my_pins[random_number]
        pin_sequence.push(my_pin)
        my_note = my_notes[random_number]
        note_sequence.push(my_note)
    }
}
let my_note = 0
let my_pin = 0
let random_number = 0
let pin_sequence: number[] = []
let correct = false
let note_sequence: number[] = []
let sequence_length = 0
let my_notes: number[] = []
let my_pins: number[] = []
my_pins = [
DigitalPin.P1,
DigitalPin.P2,
DigitalPin.P3,
DigitalPin.P4
]
my_notes = [
262,
294,
330,
349
]
sequence_length = 0
pins.setAudioPinEnabled(false)
