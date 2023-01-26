let mySerial = Utility.encodeSerial()
let actualGroup = 5
let actualCode = 12

let nextCode = 0
let nextGroup = 0
let confirm1 = false
let confirm2 = false

radio.setFrequencyBand(7); //0-83
radio.setTransmitPower(7); //0-7
radio.setTransmitSerialNumber(true);
radio.setGroup(actualGroup);

input.onButtonPressed(Button.A, function () {
    radio.sendNumber(actualCode);
    basic.showString("A");
    basic.clearScreen();
})

radio.onReceivedValue(function (key: string, value: number) {
    if (mySerial === key) {
        nextCode = value;
        confirm1 = true;
        basic.showString("C")
        control.inBackground(function () {
            music.playTone(Note.C, music.beat(BeatFraction.Whole))
        })
        console.log(value);
        basic.clearScreen();

    }
    if (key === "grp") {
        nextGroup = value;
        confirm2 = true;
        //basic.showString("G")
        control.inBackground(function () {
            music.playTone(Note.G, music.beat(BeatFraction.Whole));
        })
        console.log(value);
        basic.clearScreen();

    }
    if (confirm1 && confirm2) {
        actualCode = nextCode;
        actualGroup = nextGroup;
        basic.showString("D");
        basic.clearScreen();
        radio.setGroup(actualGroup);
        confirm1 = false;
        confirm2 = false;
    }

})

input.onButtonPressed(Button.B, function () {
    basic.showNumber(actualCode);
    basic.clearScreen();
    basic.showNumber(actualGroup);
    basic.clearScreen();
})

input.onButtonPressed(Button.AB, function () {
    actualCode = 12;
    mySerial = Utility.encodeSerial()
    actualGroup = 5;
    nextGroup = 0;
    nextCode = 0;
    confirm1 = false;
    confirm2 = false;
    basic.showString("AB");
    basic.clearScreen();
})

control.inBackground(function () {

})

