//console.log('train task ishga tushdi');
console.log ('Jack Ma maslahtlari');
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

    async function maslahatBering(a, callback) {
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

    async function run() {
        let javob = await maslahatBering(20);
        console.log(javob);
        javob = await maslahatBering(30);
        console.log(javob);
        javob = await maslahatBering (41);
        console.log( javob);
    }
    run();
