let codeValue = 12;
let encodedSerial = Utility.encodeSerial();
let actualGroup = 5;
let nextGroup = 0;
let nextCode = 0;

let codeBool = false;
let grpBool = false;

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
        codeBool = true;
        basic.showString("C");
        basic.clearScreen();
    }
    
    if (key === "grp" || "grp:") {
        nextGroup = value;
        grpBool = true;
        basic.showString("G");
        basic.clearScreen();

    }
    if (codeBool && grpBool) {
        codeValue = nextCode;
        actualGroup = nextGroup;
        basic.showString("D");
        basic.clearScreen();
        codeBool = false;
        grpBool = false;
    }

})

input.onButtonPressed(Button.AB, function () {
    codeValue = 12;
    encodedSerial = Utility.encodeSerial();
    actualGroup = 5;
    nextGroup = 0;
    nextCode = 0;
    codeBool = false;
    grpBool = false;
    basic.showString("AB");
    basic.clearScreen();
})