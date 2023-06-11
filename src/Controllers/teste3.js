const data = require("../../fakeData");

module.exports = function(req, res) {
  
    const { name } = req.query;

    const users = data.filter(val => val.name === name)

    if(users.length === 0) {
        res.status(400).send("Usuário não encontrado!")
    }

    data.map((val, index) => {
        if(val.name === name){
            data.splice(index, 1)
        }
    })

    res.status(204).send("success")
};