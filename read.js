var Jimp = require('jimp');
let identifier = "*#-#*"

getValues = (p) =>{ return (p[p.length-25]+p[p.length-17]+p[p.length-9]+p[p.length-1])}

cutArray= (arrayLSB) =>{
  return (arrayLSB.substring(arrayLSB.indexOf(identifier)+identifier.length,
              arrayLSB.lastIndexOf(identifier)))
}

readHiddenCode=()=>{
  let data = [];
  Jimp.read('s.png', (err, img) => {
    if (err) throw err;
    for (let x = 0; x<=img.getWidth() ;x++){
      for (let y = 0; y<=img.getHeight() ;y++){ 
        let pix = (img.getPixelColor(x,y)).toString(2)
        data.push(getValues(pix))
      }
    }
    let fick="";
   for (let i =0; i<= data.length;i+=2){
     fick += ((data[i]+data[i+1]).replace(/\d+./g,x=>String.fromCharCode('0b'+x))!==undefined?(data[i]+data[i+1]).replace(/\d+./g,x=>String.fromCharCode('0b'+x)):"")
    }
    console.log(cutArray(fick))
})
}

readHiddenCode()
//console.log(LSBArray);
