function elo_tilos_jelzes_utasitasok() {
    pins.digitalWritePin(DigitalPin.P0, 0)
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (szabad) {
        szabad = false
        elo_tilos_jelzes_utasitasok()
    } else {
        szabad = true
        elo_szabad_jelzes_utasitasok()
    }
    
})
function elo_szabad_jelzes_utasitasok() {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}

function szabad_jelzes_utasitasok() {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(villog_sebesseg)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(villog_sebesseg)
}

function tilos_jelzes_utasitasok() {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(villog_sebesseg)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(villog_sebesseg)
}

let villog_sebesseg = 0
let szabad = false
//  A fénysorompó szabad jelzést jelez.
szabad = true
villog_sebesseg = 500
basic.forever(function on_forever() {
    if (szabad) {
        szabad_jelzes_utasitasok()
    } else {
        tilos_jelzes_utasitasok()
    }
    
})
