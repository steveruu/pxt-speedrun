let codeValue = 12;
let myEncodedSerial = Utility.encodeSerial();

let groupValue = 5;
let nextGroup = 0;
let nextCode = 0;

let codeBool = false;
let grpBool = false;

radio.setTransmitPower(7);
radio.setFrequencyBand(7);
radio.setTransmitSerialNumber(true);
radio.setGroup(groupValue);

input.onButtonPressed(Button.A, function () {
    radio.sendNumber(codeValue);
    basic.showNumber(codeValue);
    basic.showString("A");
    basic.clearScreen();
})

input.onButtonPressed(Button.B, function () {
    radio.sendNumber(codeValue);
    basic.showNumber(groupValue);
    basic.clearScreen();
})

radio.onReceivedValue(function (key: string, value: number) {
    console.logValue(key, value);

    if (myEncodedSerial === key) {
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
        groupValue = nextGroup;
        basic.showString("D");
        basic.clearScreen();
        codeBool = false;
        grpBool = false;
    }

})

input.onButtonPressed(Button.AB, function () {
    codeValue = 12;
    myEncodedSerial = Utility.encodeSerial();
    groupValue = 5;
    nextGroup = 0;
    nextCode = 0;
    codeBool = false;
    grpBool = false;
    basic.showString("AB");
    basic.clearScreen();
})

basic.forever(function() {
    
})