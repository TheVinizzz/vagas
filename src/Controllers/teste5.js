const data = require("../../fakeData");

module.exports = function(req, res){

    const name =  req.query.name;
    const reg = data.find(d => d.name === name);

    res.send(`"Usuário ${name} foi lido ${reg.read ?? 0} vezes."`);
};