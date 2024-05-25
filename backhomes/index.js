const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const PORT = process.env.PORT || 3001;

conn.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
        console.log('%s listening at 3001');
        
        const miFuncion = (a) => { 
            return Math.pow(a) > 2 ? Math.pow(a) + 1 : false;
          };
        
          
          let tiempoInicio = performance.now();
          let resultado = miFuncion(3);
          let tiempoFin = performance.now();
        
          let tiempoTranscurrido = tiempoFin - tiempoInicio;
          
          console.log('Resultado: ', resultado);
          console.log('Tiempo transcurrido: ' + tiempoTranscurrido + ' milisegundos');
    });
});


  