radio.setFrequencyBand(7);
radio.setTransmitPower(7);

let groupNum = 1;
radio.setGroup(groupNum); //0->255
radio.setTransmitSerialNumber(true);

const mySerialNumber = control.deviceSerialNumber();
const myEncodedSerialNumber = Utility.encodeSerial();

function groupIncr() {
    if (input.buttonIsPressed(Button.A)) {
        groupNum += 1;
        whaleysans.showNumber(groupNum);
        radio.setGroup(groupNum);
    } else if (input.buttonIsPressed(Button.B)) {
        groupNum -= 1;
        whaleysans.showNumber(groupNum);
        radio.setGroup(groupNum);
    }
}

basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(2);
    }

    groupIncr();
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
        const decodedSerialNumber = Utility.decodeSerial(name); // prijme a dekoduje seriove cislo, pouzito v if() statementu nize
        console.logValue(name, value);

        if (decodedSerialNumber == mySerialNumber) {
            /*
            * new code is in value
            *
            */
        }

        if (name == "grp") {
            // new groupId recieved


            radio.sendValue("code", 18);
            // music.playTone(Note.G4, music.beat(BeatFraction.Quarter));
            // radio.setGroup(value)
            radio.sendValue("code", 18);
        }

        if (name == "code" && value == value) {

        }
    })

    const serialRemote = radio.receivedPacket(RadioPacketProperty.SerialNumber);
    console.logValue(serialRemote + ": ", receivedNumber);

})


/* kazda:
* syntakticke chyby predevsim -> tutorialy na yt
* logika - problemy s generatorem nahodnych cisel - <0;1)
* 
* let nahodaCeil = Math.ceil(1000 * Math.random()); -- <0; 1000>
* let nahodaRound = Math.round(1000 * Math.random()); -- <0; 1000>
* let nahodaFloor = Math.floor(1000 * Math.random()); -- <0; 999> | <0; 1000)
*
*/

function myRandom(minimum: number, maximum: number): number {
    return Math.random();
}