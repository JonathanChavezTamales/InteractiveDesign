var base = require('airtable').base('appWzk1gP2uHbIvV3');

base('Table 1').replace('recu5WQRDYQ9sXKxt', {
    "Asistencia": true,
    "Nombre": "Jonathan de Jesús Chávez Tabares",
    "Matricula": "A01636160"
  }, function(err, record) {
    if (err) { console.error(err); return; }
    console.log(record.get('id'));
  });
  