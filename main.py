def on_button_pressed_a():
    global sequence_length
    sequence_length += 1
    create_sequences(sequence_length)
    index = 0
    while index <= sequence_length - 1:
        pins.digital_write_pin(pin_sequence[index], 1)
        music.play_tone(note_sequence[index], music.beat(BeatFraction.WHOLE))
        basic.pause(200)
        pins.digital_write_pin(pin_sequence[index], 0)
        index += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def create_sequences(num: number):
    global pin_sequence, note_sequence, random_number, my_pin, my_note
    pin_sequence = []
    note_sequence = []
    for index2 in range(num):
        random_number = randint(0, 3)
        my_pin = my_pins[random_number]
        pin_sequence.append(my_pin)
        my_note = my_notes[random_number]
        note_sequence.append(my_note)
my_note = 0
my_pin = 0
random_number = 0
note_sequence: List[number] = []
sequence_length = 0
my_notes: List[number] = []
my_pins: List[number] = []
index3 = 0
pin_sequence: List[number] = []
my_pins = [DigitalPin.P1, DigitalPin.P2, DigitalPin.P3, DigitalPin.P4]
my_notes = [262, 294, 330, 349]
sequence_length = 0