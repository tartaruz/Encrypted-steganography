var Jimp = require('jimp');
let fs = require('fs');
let id = "*#-#*";

codeSetup = (code) => {
  let binaryCode = (id+code+id).split('').map(c => c.charCodeAt().toString(2).padStart(8, '0'));
  let divideArray = [];
  binaryCode.forEach(binary => {
    divideArray.push(binary.substring(0,4));
    divideArray.push(binary.substring(4,binary.length));
  })
  return divideArray;
}

binArray = (number) => {
  let binaryArray = [];
  let numberBinary = number.toString(2);
  for (let index = numberBinary.length-1; index>=0;index--){ binaryArray.push(numberBinary.charAt(index))};
  return binaryArray;
}
// sometthing wong
insertData = (pixelArray, code) => {
  let newPixelArray = pixelArray.reverse();
  let len = pixelArray.length 
  newPixelArray[len-25] = code[0]
  newPixelArray[len-17] = code[1]
  newPixelArray[len-9] = code[2]
  newPixelArray[len-1] = code[3]
  // console.log(newPixelArray.join(''))
  // console.log(newPixelArray.join('').length)
  // console.log(pixelArray.join(""))
  
  return parseInt(newPixelArray.join(""),2);
}

hideCode = () =>{
  let codeArray = codeSetup("ThomasRamirez");
  let pointer = 0;
  Jimp.read('img/swag_dog.png', (err, img) => {
    if (err) throw err;
    for (let x = 0; x<=img.getWidth() ;x++){
      for (let y = 0; y<=img.getHeight() ;y++){ 
        if (pointer<codeArray.length){
          let pixelValue = (img.getPixelColor(x,y));
          //console.log(Jimp.intToRGBA(pixelValue))
          let binaryArray = (binArray(pixelValue));
          let hex = (insertData(binaryArray, codeArray[pointer]))
          console.log(hex, pixelValue)
          img.setPixelColor(hex,x,y)
          pointer++;
        }else{
          break
        }
      }
    } 
    img.write('s.png');
  })
}


hideCode();
