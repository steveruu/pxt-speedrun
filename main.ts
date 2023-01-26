let myEncodedSerial = Utility.encodeSerial();
let groupValue = 5;
let codeValue = 12;

let nextCode = 0;
let nextGroup = 0;

let groupIsTrue = false;
let codeIsTrue = false;

radio.setFrequencyBand(7);
radio.setTransmitPower(7);
radio.setTransmitSerialNumber(true);
radio.setGroup(groupValue);

input.onButtonPressed(Button.A, function () 
{
    radio.sendNumber(codeValue);
    basic.showString("A");
    basic.clearScreen();
})

radio.onReceivedValue(function (name: string, value: number) {
    if (myEncodedSerial === name) 
    {
        nextCode = value;
        groupIsTrue = true;
        basic.showString("C")
        
        basic.clearScreen();

    }
    if (name === "grp") 
    {
        nextGroup = value;
        codeIsTrue = true;

        control.inBackground(function () 
        {
            music.playTone(Note.G, music.beat(BeatFraction.Whole));
        })
    }
    if (groupIsTrue && codeIsTrue) 
    {
        codeValue = nextCode;
        groupValue = nextGroup;
        basic.showString("D");
        basic.clearScreen();
        radio.setGroup(groupValue);

        groupIsTrue = false;
        codeIsTrue = false;
    }

})

input.onButtonPressed(Button.B, function () 
{
    basic.showNumber(groupValue)
    basic.showNumber(codeValue);
})

input.onButtonPressed(Button.AB, function () 
{
    codeValue = 12;
    myEncodedSerial = Utility.encodeSerial()
    groupValue = 5;

    nextGroup = 0;
    nextCode = 0;

    groupIsTrue = false;
    codeIsTrue = false;

    basic.showString("Reset");
    basic.clearScreen();
})

