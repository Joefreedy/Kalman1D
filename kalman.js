var kalmanFilter = require('kalmanjs');

var kalmanFilter = new kalmanFilter ({R: 0.01, Q: 20});

// Hard Coded Value.
var data = {
    avg: 0,
    qualcomm: {
        uui: "",
        txPower: -80,
    iletisim: {
        uui: "",
        txPower: -59,
    }
*
}

if (uui == data.iletisim.uui) {
    var d = calculateDistance(peripheral.rssi, data.iletisim.txPower);
    console.log('RSSI + Filter: ' + kalmanFilter.filter(peripheral.rssi) + 'RSSI: ' + peripheral.rssi);

}





}


function calculate(rssi, txPower) {
    if (rssi == 0) {
        return -1.0;
    }

var ratio = rssi * 1.0/txPower;
    if (ratio < 1.0) {
        return Math.pow (ratio, 10);
    } else {
        var distance = (0.595). Math.pow (ratio, 7.4454) + 0.111;
        return distance;


    }



    };





var trilation = require('trilateration');

var pos =  [
    {x: 2, y: 3, distance: 5},
    {x: 5, y: 4, distance: 75},
    {x: 6, y: 3, distance: 8}

];

var pos = tritilation.calculate (beacon);