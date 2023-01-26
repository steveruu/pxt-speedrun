let codeValue = 12;
let encodedSerial = Utility.encodeSerial();
let actualGroup = 5;
let nextGroup = 0;
let nextCode = 0;

let blok1 = false;
let blok2 = false;

radio.setTransmitPower(7);
radio.setFrequencyBand(7);
radio.setTransmitSerialNumber(true);
radio.setGroup(actualGroup);

input.onButtonPressed(Button.A, function () {
    radio.sendNumber(codeValue);
    basic.showString("A");
    basic.clearScreen();
})

radio.onReceivedValue(function (key: string, value: number) {
    if (encodedSerial === key) {
        nextCode = value;
        blok1 = true;
        basic.showString("C");
        basic.clearScreen();

    }
    if (key === "grp" || "grp:") {
        nextGroup = value;
        blok2 = true;
        basic.showString("G");
        basic.clearScreen();

    }
    if (blok1 && blok2) {
        codeValue = nextCode;
        actualGroup = nextGroup;
        basic.showString("D");
        basic.clearScreen();
        blok1 = false;
        blok2 = false;
    }

})



input.onButtonPressed(Button.AB, function () {
    codeValue = 12;
    encodedSerial = Utility.encodeSerial();
    actualGroup = 5;
    nextGroup = 0;
    nextCode = 0;
    blok1 = false;
    blok2 = false;
    basic.showString("AB");
    basic.clearScreen();
})