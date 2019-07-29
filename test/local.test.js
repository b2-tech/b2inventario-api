const assert = require('assert');
const models = require('../models');



describe('Testando Query', function () {
  this.timeout(5000);

  it('Testando query', async () => {
    const resultado = await models.Empresa.findByPk(3,{include: ['locais']});
    assert.notEqual(resultado, null);
  })
})
