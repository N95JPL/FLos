const { entertainmentBus } = require("../VariableMaps/EntertainmentBusVar");
const HEX2DEC = hex => parseInt(hex, 16);
var messageBuilder = []

// This looks dangerously similar to 692 - I'm going to assume it's the same principle, lets try it
// BT Media Information
// Whomever came up with this mess at JLR must have been high as a kite
// This is a mess to parse

function eb693(msg) {
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
  // 5 = Error... But what on earth could it mean? - Possibly to reset the packets? Test on CAN bus
  // ? = Song Title (Duplicate exactly as Block F)
  // B - Artist
  // C - ??
  // D - ?? - I have a feeling these would populate playing an "Album" rather than Amazon Music Streaming
  // E - ??
  // F - Song Title
  // J - ?? - Appears to show connected phone name... but why?
  // K - Connected Phone Name
  // U - ?? - This shows up A LOT.. got to mean something useful
  // [ - ?? - Seems to always be the same - Likely unnecessary
  // > - ?? - This shows up A LOT.. got to mean something useful

  // Snippet
  // 2B5	693	Rx	1	8	10	12	55	1	1	1	0D	1		_x005F_x0010_	_x005F_x0012_	U	_x005F_x0001_	_x005F_x0001_	_x005F_x0001_	_x005F_x000D_	_x005F_x0001_	_x005F_x0010__x005F_x0012_U_x005F_x0001__x005F_x0001__x005F_x0001__x005F_x000D__x005F_x0001_
  // 2B5	693	Rx	1	8	21	2	3	6	7	8	0B	0C!	_x005F_x0002_	_x005F_x0003_	_x005F_x0006_	_x005F_x0007_	_x005F_x0008_	_x005F_x000B_	_x005F_x000C_!_x005F_x0002__x005F_x0003__x005F_x0006__x005F_x0007__x005F_x0008__x005F_x000B__x005F_x000C_
  // 2B5	693	Rx	1	8	22	0D	0E	0F	11	13	0	0		"	_x005F_x000D_	_x005F_x000E_	_x005F_x000F_	_x005F_x0011_	_x005F_x0013_	_x0000_	_x0000_	"_x005F_x000D__x005F_x000E__x005F_x000F__x005F_x0011__x005F_x0013_
  // 2B5	693	Rx	1	8	10	0A	3E	12	1	1	0	1		_x005F_x0010_ > _x005F_x0012_	_x005F_x0001_	_x005F_x0001_	_x0000_	_x005F_x0001_	_x005F_x0010_ > _x005F_x0012__x005F_x0001__x005F_x0001__x005F_x0001_
  // 2B5	693	Rx	1	8	21	0	0	0	0	0	0	0!	_x0000_	_x0000_	_x0000_	_x0000_	_x0000_	_x0000_	_x0000_!
  // 2B5	693	Rx	1	8	10	18	3F	12	1	1	48	6F		_x005F_x0010_	_x005F_x0018_ ? _x005F_x0012_	_x005F_x0001_	_x005F_x0001_	H	o	_x005F_x0010__x005F_x0018_ ? _x005F_x0012__x005F_x0001__x005F_x0001_Ho
  // 2B5	693	Rx	1	8	21	6F	6B	65	64	20	4F	6E!	o	k	e	d	 	O	n!oked On
  // 2B5	693	Rx	1	8	22	20	41	20	46	65	65	6C		"	 	A	 	F	e	e	l	" A Feel
  // 2B5	693	Rx	1	8	23	69	6E	67	0	0	0	0		#	i	n	g	_x0000_	_x0000_	_x0000_	_x0000_	#ing
  // 2B5	693	Rx	1	8	10	0F	42	12	1	1	42	6C		_x005F_x0010_	_x005F_x000F_	B	_x005F_x0012_	_x005F_x0001_	_x005F_x0001_	B	l	_x005F_x0010__x005F_x000F_B_x005F_x0012__x005F_x0001__x005F_x0001_Bl
  // 2B5	693	Rx	1	8	21	75	65	20	53	77	65	64!	u	e	 	S	w	e	d!ue Swed
  // 2B5	693	Rx	1	8	22	65	0	0	0	0	0	0		"	e	_x0000_	_x0000_	_x0000_	_x0000_	_x0000_	_x0000_	"e
  // 2B5	693	Rx	1	8	5	43	12	1	1	0	0	0		_x005F_x0005_	C	_x005F_x0012_	_x005F_x0001_	_x005F_x0001_	_x0000_	_x0000_	_x0000_	_x005F_x0005_C_x005F_x0012__x005F_x0001__x005F_x0001_
  // 2B5	693	Rx	1	8	5	44	12	1	1	0	0	0		_x005F_x0005_	D	_x005F_x0012_	_x005F_x0001_	_x005F_x0001_	_x0000_	_x0000_	_x0000_	_x005F_x0005_D_x005F_x0012__x005F_x0001__x005F_x0001_
  // 2B5	693	Rx	1	8	5	45	12	1	1	0	0	0		_x005F_x0005_	E	_x005F_x0012_	_x005F_x0001_	_x005F_x0001_	_x0000_	_x0000_	_x0000_	_x005F_x0005_E_x005F_x0012__x005F_x0001__x005F_x0001_
  // 2B5	693	Rx	1	8	10	18	46	12	1	1	48	6F		_x005F_x0010_	_x005F_x0018_	F	_x005F_x0012_	_x005F_x0001_	_x005F_x0001_	H	o	_x005F_x0010__x005F_x0018_F_x005F_x0012__x005F_x0001__x005F_x0001_Ho
  // 2B5	693	Rx	1	8	21	6F	6B	65	64	20	4F	6E!	o	k	e	d	 	O	n!oked On
  // 2B5	693	Rx	1	8	22	20	41	20	46	65	65	6C		"	 	A	 	F	e	e	l	" A Feel
  // 2B5	693	Rx	1	8	23	69	6E	67	0	0	0	0		#	i	n	g	_x0000_	_x0000_	_x0000_	_x0000_	#ing
  // 2B5	693	Rx	1	8	10	12	55	1	1	1	0D	1		_x005F_x0010_	_x005F_x0012_	U	_x005F_x0001_	_x005F_x0001_	_x005F_x0001_	_x005F_x000D_	_x005F_x0001_	_x005F_x0010__x005F_x0012_U_x005F_x0001__x005F_x0001__x005F_x0001__x005F_x000D__x005F_x0001_
  // 2B5	693	Rx	1	8	2	55	26	0	0	0	0	0		_x005F_x0002_	U & _x0000_	_x0000_	_x0000_	_x0000_	_x0000_	_x005F_x0002_U &
  // 2B5	693	Rx	1	8	10	0E	5B	1	1	1	9	1		_x005F_x0010_	_x005F_x000E_[_x005F_x0001_	_x005F_x0001_	_x005F_x0001_	 	_x005F_x0001_	_x005F_x0010__x005F_x000E_[_x005F_x0001__x005F_x0001__x005F_x0001_ _x005F_x0001_
  // 2B5	693	Rx	1	8	21	2	3	6	7	8	0B	0C!	_x005F_x0002_	_x005F_x0003_	_x005F_x0006_	_x005F_x0007_	_x005F_x0008_	_x005F_x000B_	_x005F_x000C_!_x005F_x0002__x005F_x0003__x005F_x0006__x005F_x0007__x005F_x0008__x005F_x000B__x005F_x000C_
  // 2B5	693	Rx	1	8	22	13	0	0	0	0	0	0		"	_x005F_x0013_	_x0000_	_x0000_	_x0000_	_x0000_	_x0000_	_x0000_	"_x005F_x0013_
  // 2B5	693	Rx	1	8	10	0E	5B	1	1	1	9	1		_x005F_x0010_	_x005F_x000E_[_x005F_x0001_	_x005F_x0001_	_x005F_x0001_	 	_x005F_x0001_	_x005F_x0010__x005F_x000E_[_x005F_x0001__x005F_x0001__x005F_x0001_ _x005F_x0001_
  // 2B5	693	Rx	1	8	21	2	3	6	7	8	0B	0C!	_x005F_x0002_	_x005F_x0003_	_x005F_x0006_	_x005F_x0007_	_x005F_x0008_	_x005F_x000B_	_x005F_x000C_!_x005F_x0002__x005F_x0003__x005F_x0006__x005F_x0007__x005F_x0008__x005F_x000B__x005F_x000C_
  // 2B5	693	Rx	1	8	22	13	0	0	0	0	0	0		"	_x005F_x0013_	_x0000_	_x0000_	_x0000_	_x0000_	_x0000_	_x0000_	"_x005F_x0013_
  // 2B5	693	Rx	1	8	10	9	4B	1	1	1	4D	49		_x005F_x0010_	 	K	_x005F_x0001_	_x005F_x0001_	_x005F_x0001_	M	I	_x005F_x0010_ K_x005F_x0001__x005F_x0001__x005F_x0001_MI
  // 2B5	693	Rx	1	8	21	20	39	0	0	0	0	0!	 	9	_x0000_	_x0000_	_x0000_	_x0000_	_x0000_! 9
  // 2B5	693	Rx	1	8	2	55	26	0	0	0	0	0		_x005F_x0002_	U & _x0000_	_x0000_	_x0000_	_x0000_	_x0000_	_x005F_x0002_U &
  // 2B5	693	Rx	1	8	10	0C	55	1	1	1	7	1		_x005F_x0010_	_x005F_x000C_	U	_x005F_x0001_	_x005F_x0001_	_x005F_x0001_	_x005F_x0007_	_x005F_x0001_	_x005F_x0010__x005F_x000C_U_x005F_x0001__x005F_x0001__x005F_x0001__x005F_x0007__x005F_x0001_
  // 2B5	693	Rx	1	8	21	2	3	6	7	8	13	0!	_x005F_x0002_	_x005F_x0003_	_x005F_x0006_	_x005F_x0007_	_x005F_x0008_	_x005F_x0013_	_x0000_!_x005F_x0002__x005F_x0003__x005F_x0006__x005F_x0007__x005F_x0008__x005F_x0013_
  // 2B5	693	Rx	1	8	10	0C	55	1	1	1	7	1		_x005F_x0010_	_x005F_x000C_	U	_x005F_x0001_	_x005F_x0001_	_x005F_x0001_	_x005F_x0007_	_x005F_x0001_	_x005F_x0010__x005F_x000C_U_x005F_x0001__x005F_x0001__x005F_x0001__x005F_x0007__x005F_x0001_
  // 2B5	693	Rx	1	8	21	2	3	6	7	8	13	0!	_x005F_x0002_	_x005F_x0003_	_x005F_x0006_	_x005F_x0007_	_x005F_x0008_	_x005F_x0013_	_x0000_!_x005F_x0002__x005F_x0003__x005F_x0006__x005F_x0007__x005F_x0008__x005F_x0013_

  // So 5 C/D/E - Need to figure out what this is
}

function parseMessage(input) {
  var mediaPhoneName = "";
  var trackName = "";
  var artistName = "";
  //5join("").toString(16)
  if (input[0] == 5) { // Do nothing... because I have no idea what it does or what it is for...It seems to mean reset packet... It works...
    if (input[0] == 75) { //K - Phone Name
      entertainmentBus.mediaPhoneName = mediaPhoneName;
    } else if (input[0] == 70) { //F - Track Name
      entertainmentBus.block = trackName;
    } else if (input[0] == 66) { //B - Artist
      entertainmentBus.text = artistName;
    }
  } else {
    for (var i = 1; i < input.length; i++) {
      if (input[1] == 75) { //K - Phone Name
        mediaPhoneName += String.fromCharCode(input[i]);
      } else if (input[1] == 70) { //F - Track Name
        trackName += String.fromCharCode(input[i]);
      } else if (input[1] == 66) { //B - Artist
        artistName += String.fromCharCode(input[i]);
      }
    }

    if (input[1] == 75) { //K - Phone Name
      mediaPhoneName = mediaPhoneName.substring(4, mediaPhoneName.length)
      mediaPhoneName = mediaPhoneName.trim();
      entertainmentBus.mediaPhoneName = mediaPhoneName;
    } else if (input[1] == 70) { //F - Track Name
      trackName = trackName.substring(4, trackName.length)
      trackName = trackName.trim();
      entertainmentBus.block = trackName;
    } else if (input[1] == 66) { //B - Artist
      artistName = artistName.substring(4, artistName.length)
      artistName = artistName.trim();
      entertainmentBus.text = artistName;
    }
  }
}
module.exports = eb693;
