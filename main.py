def elo_tilos_jelzes_utasitasok():
    pins.digital_write_pin(DigitalPin.P0, 0)

def on_button_pressed_a():
    global szabad
    if szabad:
        szabad = False
        elo_tilos_jelzes_utasitasok()
    else:
        szabad = True
        elo_szabad_jelzes_utasitasok()
input.on_button_pressed(Button.A, on_button_pressed_a)

def elo_szabad_jelzes_utasitasok():
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 0)
def szabad_jelzes_utasitasok():
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(villog_sebesseg)
    pins.digital_write_pin(DigitalPin.P0, 0)
    basic.pause(villog_sebesseg)
def tilos_jelzes_utasitasok():
    pins.digital_write_pin(DigitalPin.P1, 1)
    pins.digital_write_pin(DigitalPin.P2, 0)
    basic.pause(villog_sebesseg)
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 1)
    basic.pause(villog_sebesseg)
villog_sebesseg = 0
szabad = False
# A fénysorompó szabad jelzést jelez.
szabad = True
villog_sebesseg = 500

def on_forever():
    if szabad:
        szabad_jelzes_utasitasok()
    else:
        tilos_jelzes_utasitasok()
basic.forever(on_forever)
