const { entertainmentBus } = require("../VariableMaps/EntertainmentBusVar");
const HEX2DEC = hex => parseInt(hex, 16);
var messageBuilder = []


// Whomever came up with this mess at JLR must have been high as a kite
// This is a mess to parse

function eb692(msg) {
  const strId = msg.id;
  var arrData = [...msg.data];

  // for (var i = 0; i < arrData.length; i++) {
  //   arrData[i] = HEX2DEC(arrData[i]);
  // }

  if (arrData[0] == 16 || arrData[0] == 5) { // 16 & 5 mean start of new message
    messageBuilder = []
  }

  if (arrData[0] == 5) {
    // Probbaly a better way to do this but it works - Merge the 8 bytes into one array to parse the string
    // Actually... wouldn't messageBuilder = arrData work? I'm dumb.. yep that would do it - Win some, lose some!
    // messageBuilder.push(arrData[0])
    // messageBuilder.push(arrData[1])
    // messageBuilder.push(arrData[2])
    // messageBuilder.push(arrData[3])
    // messageBuilder.push(arrData[4])
    // messageBuilder.push(arrData[5])
    // messageBuilder.push(arrData[6])
    // messageBuilder.push(arrData[7])
    parseMessage(arrData)
    messageBuilder = []
  } else {
    for (var i = 1; i < arrData.length; i++) { // Start at 1 to skip the 16 or 5
      if (arrData[i] == 0) { // 0 means end of message so parse it
        parseMessage(messageBuilder)
        //console.log(messageBuilder)
        messageBuilder = []
        break;
      }
      messageBuilder.push(arrData[i]) // Add the byte to the message
    }
  }
  // 16 = Start of new Block
  // 00 = End of Block
  // 5 = Error... ;*11000 = Searching ... k*11000 = No Reception
  // k - Station Name
  // j - DAB Block
  // E; - Text
  // *111 = FM
  // *311 = DAB
  // *1211 = BT Info
  //2B4	692	Rx	1	8	29	20	20	20	20	20	20	0		)	 	 	 	 	 	 	_x0000_	)
  //2B4	692	Rx	1	8	10	0D	6B	1	1	1	53	69		_x005F_x0010_	_x005F_x000D_	k	_x005F_x0001_	_x005F_x0001_	_x005F_x0001_	S	i	_x005F_x0010__x005F_x000D_k_x005F_x0001__x005F_x0001__x005F_x0001_Si
  //2B4	692	Rx	1	8	21	67	6E	61	6C	20	31	0!	g	n	a	l	 	1	_x0000_!gnal 1
  //2B4	692	Rx	1	8	5	3B	1	1	1	0	0	0		_x005F_x0005_;	_x005F_x0001_	_x005F_x0001_	_x005F_x0001_	_x0000_	_x0000_	_x0000_	_x005F_x0005_;_x005F_x0001__x005F_x0001__x005F_x0001_	Searching
  //2B4	692	Rx	1	8	5	6B	1	1	1	0	0	0		_x005F_x0005_	k	_x005F_x0001_	_x005F_x0001_	_x005F_x0001_	_x0000_	_x0000_	_x0000_	_x005F_x0005_k_x005F_x0001__x005F_x0001__x005F_x0001_	No Reception
  //2B4	692	Rx	1	8	5	3B	1	1	1	0	0	0		_x005F_x0005_;	_x005F_x0001_	_x005F_x0001_	_x005F_x0001_	_x0000_	_x0000_	_x0000_	_x005F_x0005_;_x005F_x0001__x005F_x0001__x005F_x0001_	Searching
  //2B4	692	Rx	1	8	10	0D	6B	1	1	1	43	61		_x005F_x0010_	_x005F_x000D_	k	_x005F_x0001_	_x005F_x0001_	_x005F_x0001_	C	a	_x005F_x0010__x005F_x000D_k_x005F_x0001__x005F_x0001__x005F_x0001_Ca
  //2B4	692	Rx	1	8	21	6E	6C	73	69	64	65	0!	n	l	s	i	d	e	_x0000_!nlside
  //2B4	692	Rx	1	8	5	3B	1	1	1	0	0	0		_x005F_x0005_;	_x005F_x0001_	_x005F_x0001_	_x005F_x0001_	_x0000_	_x0000_	_x0000_	_x005F_x0005_; _x005F_x0001__x005F_x0001__x005F_x0001_
  //2B4	692	Rx	1	8	5	6B	1	1	1	0	0	0		_x005F_x0005_	k	_x005F_x0001_	_x005F_x0001_	_x005F_x0001_	_x0000_	_x0000_	_x0000_	_x005F_x0005_k_x005F_x0001__x005F_x0001__x005F_x0001_
  //2B4	692	Rx	1	8	10	0D	6B	1	1	1	48	49		_x005F_x0010_	_x005F_x000D_	k	_x005F_x0001_	_x005F_x0001_	_x005F_x0001_	H	I	_x005F_x0010__x005F_x000D_k_x005F_x0001__x005F_x0001__x005F_x0001_HI
  //2B4	692	Rx	1	8	21	54	53	20	4D	43	52	0		!	T	S	 	M	C	R	_x0000_	!TS MCR

  // This shows FM going between Signal 1 > Searching > No Reception > Searching > Canlside > Searching > HITS MCR
  // Note: Hex values are converted to Decimal for processing in the code, so 0x010 in the above snippet == 16
}

function parseMessage(input) {
  var stationName = "";
  var stationText = "";
  var stationBlock = "";
  //5join("").toString(16)
  if (input[0] == 5) {
    if (input[1] == 107) { //k
      stationName = "No Reception"
      if (input[2] == 1) {
        entertainmentBus.fmStation = stationName;
      } else if (input[2] == 3) {
        entertainmentBus.dabStation = stationName;
      }
    } else if (input[1] == 59) { //;
      stationName = "Searching..."
      if (input[2] == 1) {
        entertainmentBus.fmStation = stationName;
      } else if (input[2] == 3) {
        entertainmentBus.dabStation = stationName;
      }
    }
    entertainmentBus.block = "";
    entertainmentBus.text = "";
  } else {
    for (var i = 1; i < input.length; i++) {
      if (input[0] == 69) { //E
        stationText += String.fromCharCode(input[i]);
      } else if (input[1] == 107) { //k - Station Name
        stationName += String.fromCharCode(input[i]);
      } else if (input[1] == 106) { //j - DAB Block
        stationBlock += String.fromCharCode(input[i]);
      }
    }

    if (input[1] == 107) { //Station
      stationName = stationName.substring(4, stationName.length)
      stationName = stationName.trim();
      entertainmentBus.text = "";
      entertainmentBus.block = "";
      if (input[2] == 1) {
        entertainmentBus.fmStation = stationName;
      } else if (input[2] == 3) {
        entertainmentBus.dabStation = stationName;
      }
    } else if (input[1] == 106) { //DAB Block
      stationBlock = stationBlock.substring(4, stationBlock.length)
      stationBlock = stationBlock.trim();
      entertainmentBus.block = stationBlock;
    } else if (input[0] == 69) { //Text
      stationText = stationText.substring(4, stationText.length)
      stationText = stationText.trim();
      entertainmentBus.text = stationText;
    }
  }
  //console.log("Station: " + entertainmentBus.fmStation + ":" + entertainmentBus.dabStation + " Block: " + entertainmentBus.block + " Text: " + entertainmentBus.text)
}
module.exports = eb692;
