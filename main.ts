input.onButtonPressed(Button.A, function () {
    sequence_length += 1
    sequences = create_sequences(sequence_length)
    for (let index = 0; index <= note_sequence.length - 1; index++) {
    	
    }
})
function create_sequences (num: number) {
    pin_sequence = []
    note_sequence = []
    sequences = []
    for (let index = 0; index < num; index++) {
        random_number = randint(0, 3)
        my_pin = my_pins[random_number]
        pin_sequence.push(my_pin)
        my_note = my_notes[random_number]
        note_sequence.push(my_note)
    }
    sequences.push(pin_sequence)
    sequences.push(note_sequence)
    return sequences
}
let my_note = 0
let my_pin = 0
let random_number = 0
let pin_sequence: number[] = []
let note_sequence: number[] = []
let sequences: Array[] = []
let sequence_length = 0
let my_notes: number[] = []
let my_pins: number[] = []
my_pins = [
DigitalPin.P0,
DigitalPin.P1,
DigitalPin.P2,
DigitalPin.P3
]
my_notes = [
262,
294,
330,
349
]
sequence_length = 0
