global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

    
describe('filterData', () => {
  const data= {
    "CHL": {
      "indicators": [
        {
          "data": {
            "2015": 21.6800003051758,
            "2016": 23.7399997711182,
            "2017": 23.7600002288818
          },
          "countryName": "Perú",
          "countryCode": "PER",
          "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
          "indicatorCode": "SL.TLF.PART.FE.ZS"
        }
      ]
      }
    }
  
  it('debería ser una function', () => {
    assert.equal(typeof filterData, 'function');
  })

  it('debería retornar objeto data al filtrar por indicador', () => {
    assert.deepEqual(window.filterData(data),[{
      
        "data": {
          "2015": 21.6800003051758,
          "2016": 23.7399997711182,
          "2017": 23.7600002288818
        },
        "countryName": "Perú",
        "countryCode": "PER",
        "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
        "indicatorCode": "SL.TLF.PART.FE.ZS"
      
      
    }]);
  
  })
})
