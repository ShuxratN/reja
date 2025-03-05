console.log('train task ishga tushdi');

/*C-TASK: 

Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;*/














/*
D-TASK: 

Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot 
pass bolsin, hamda classning 3ta methodi bolsin, 
biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non,
 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul
 ('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!*/

 class Shop {
    constructor(non, lagmon, cola) {
      this.non = non;
      this.lagmon = lagmon;
      this.cola = cola;
    }
  
   
    qoldiq() {
      console.log(`Hozirda ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`);
    }
  
    sotish(product, soni) {
      if (product === 'non') this.non -= soni;
      if (product === 'lagmon') this.lagmon -= soni;
      if (product === 'cola') this.cola -= soni;
      console.log(` ${soni} ta, ${product} sotildi.`);
    }
  
    qabul(product, soni) {
      if (product === 'non') this.non += soni;
      if (product === 'lagmon') this.lagmon += soni;
      if (product === 'cola') this.cola += soni;
      console.log(` ${soni} ta, ${product} qabul qilindi.`);
    }
  }
  const shop = new Shop(4, 5, 2);
  shop.qoldiq();  
  shop.sotish('non', 3);  
  shop.qabul('cola', 4);   
    
  










































/*
class StringChecker {
    constructor(str1, str2) {
      this.str1 = str1;
      this.str2 = str2;
    }
  
    // Method to check if both strings consist of the same letters
    hasSameLetters() {
      // If lengths are different, return false
      if (this.str1.length !== this.str2.length) return false;
    }
  }
  
  // Function to check and return result
  function checkContent(str1, str2) {
    const checker = new StringChecker(str1, str2);
    return checker.hasSameLetters();
  }
  
  // Test Cases
  console.log(checkContent("mitgroup", "gmtiprou")); // true
  */

  
















































/*console.log ('Jack Ma maslahtlari');
const list = [
    "yahshi talaba boling", // 0-20
    "togri boshliq tanlang va koproq hato qiling", // 20-30
    "uzingizga ishlashingizni boshlang", // 30-40
    "siz kuchli bolgan narsalarni qiling", // 40-50
    "yoshlarga investitsiya qiling", // 50-60
    "endi dam oling, foydasi yoq endi", // 60
    ];

    /*function maslahatBering(a, callback) {
        if(typeof a !== 'number') callback("insert a number", null) ;
        else if (a <= 20) callback (null, list[0]);
        else if (a > 20 && a <= 30) callback(null, list[1]);
        else if (a > 30 && a <= 40) callback(null, list[2]);
        else if (a > 40 && a <= 50) callback(null, list[3]);
        else if (a > 50 && a <= 60) callback(null, list[4]);
        else{
            setTimeout(function() {
            callback(null, list[5]);
            },5000);
        }
    }
    maslahatBering(10, (err, data) => {
        if(err) console.log('ERROR:', err);

        console.log('javob:', data);  
    } ); 
    console.log("passed here1");*/

    /*async function maslahatBering(a, callback) {
        if(typeof a !== 'number') throw new Error("insert a number") ;
        else if (a <= 20) return (null, list[0]);
        else if (a > 20 && a <= 30) return(null, list[1]);
        else if (a > 30 && a <= 40) return(null, list[2]);
        else if (a > 40 && a <= 50) return(null, list[3]);
        else if (a > 50 && a <= 60) return(null, list[4]);
        else{
            return new Promise((resolve, reject)  => {
                setTimeout(() =>{
                    resolve(list[5]);
                }, 1000);

            });
           // setTimeout(function() {
           // return list[5];
           // },5000);
        }
    }
    //then & catch
    /*console.log("passed here 0");
    maslahatBering(25)
        .then(data => {
        console.log('javob:', data);
        })
        .catch((err) => {
            console.log("ERROR:", err);
        });
        console.log("passed here 1");
    */

    /*async function run() {
        let javob = await maslahatBering(20);
        console.log(javob);
        javob = await maslahatBering(30);
        console.log(javob);
        javob = await maslahatBering (41);
        console.log( javob);
    }
    run();*/ 