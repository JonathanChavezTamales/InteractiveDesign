function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var Airtable = require('airtable');
const base = Airtable.base('appWzk1gP2uHbIvV3');

async function update(){
    for(var i=0; i<500; i++){
        base('Table 1').update('recu5WQRDYQ9sXKxt', {
            "Asistencia": true,
            "Notes": "Jonathan de Jesús Chávez Tabares",
            "Matricula": "A0163616"+i
            }, function(err, record) {
            if (err) { console.error(err); return; }
            console.log(record.get('id'));
            });
            await sleep(200);
    }
    
}

update();

console.log("Succeed");