const fs = require('fs');
const backstopTemplate = require('./backstop_template.json');
const scenarioTemplate = require('./scenario_template.json');


async function ejecutarScript() {
  

  let listaEscenarios = [];
  let escenarios = 2
  let pasos = 2

  for (let escenario = 0; escenario < escenarios; escenario++){
    for (let paso = 0; paso < pasos; paso++) {
      let nombreEscenario = `escenario_${escenario + 1}_step_${paso + 1}`;
      let pathReferencia = `./backstop_data/capturas/v3.42/v3.42_${nombreEscenario}.png`;
      let pathTest = `./backstop_data/capturas/v5.19.0/v5.19.0_${nombreEscenario}.png`;
      listaEscenarios.push(
          {
            ...scenarioTemplate,
            "label": `Step:${paso + 1} de Escenario:${escenario + 1} `,
            "url": pathTest,
            "referenceUrl": pathReferencia
          }
      );
  }
  }
  

  let backstopJson = {
    ...backstopTemplate,
    listaEscenarios
  }

  fs.writeFileSync('backstop.json', JSON.stringify(backstopJson));

  return null;
}

(async () => console.log(await ejecutarScript()))();
