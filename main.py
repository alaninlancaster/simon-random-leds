current_pin = 0
random_number = 0
sequence: List[number] = []
led.enable(False)
my_pins = [DigitalPin.P0, DigitalPin.P1, DigitalPin.P2, DigitalPin.P3]
my_notes = [Note.C, Note.D, Note.E, Note.F]

def on_forever():
    global random_number, current_pin
    random_number = randint(0, 3)
    current_pin = my_pins[random_number]
    current_note = my_notes[random_number]
    pins.digital_write_pin(current_pin, 1)
    music.ring_tone(current_note)
    basic.pause(500)
    pins.digital_write_pin(current_pin, 0)
basic.forever(on_forever)
