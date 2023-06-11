const { v4: uuidv4 } = require('uuid');
const data =  require("../../fakeData");

module.exports = function(req, res){
  
    const { name, job } =  req.body;

    if(!job) {
        return res.status(201).send(newUser)
    }
    
    const newUser = {
        id: uuidv4(),
        creatorToken: uuidv4(),
        name,
        job,
    }

    data.push(newUser)
    
    res.status(201).send(newUser);
};