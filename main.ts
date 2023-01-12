radio.setFrequencyBand(7);
radio.setTransmitPower(7);

let groupNum = 1;
radio.setGroup(groupNum); //0->255
radio.setTransmitSerialNumber(true);


basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(2);
    }
})

radio.onReceivedNumber(function (receivedNumber: number) {
    if (receivedNumber == 0) {
        music.playTone(Note.C4, music.beat(BeatFraction.Quarter)); 
        radio.sendNumber(7);
    }

    if (receivedNumber == 1) {
        music.playTone(Note.G4, music.beat(BeatFraction.Quarter)); 
        radio.sendNumber(7);
        radio.sendValue("code", 18);
    }

    // } else if (receivedNumber == 1) {
    //     music.playTone(Note.D4, music.beat(BeatFraction.Quarter));
    // } else if (receivedNumber == 2) {
    //     music.playTone(Note.E4, music.beat(BeatFraction.Quarter));
    // } else if (receivedNumber == 3) {
    //         music.playTone(Note.F4, music.beat(BeatFraction.Quarter));
    // } else if (receivedNumber == 4) {
    //     music.playTone(Note.G4, music.beat(BeatFraction.Quarter)); }

    radio.onReceivedValue(function (name: string, value: number) {
        console.logValue(name, value);
        if (name == "grp" && value == 42) {
            radio.sendValue("code", 18);
            // music.playTone(Note.G4, music.beat(BeatFraction.Quarter));
            radio.setGroup(value)
            radio.sendValue("code", 18);
        }

        if (name == "code" && value == value) {
            
        }
    })

    const serialRemote = radio.receivedPacket(RadioPacketProperty.SerialNumber);
    console.logValue(serialRemote + ": ", receivedNumber);


function groupIncr() {
    if (input.buttonIsPressed(Button.A)) {
        groupNum += 1;
    } else if (input.buttonIsPressed(Button.B)) {
        groupNum -= 1;
    }
}
})
