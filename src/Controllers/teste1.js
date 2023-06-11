const data =  require("../../fakeData");

const getUser = ( req, res ) => {
    
    const { name } =  req.query;
    
    data.map((val, index) => {
        if(name === val.name) {
            const addReading = val.read ? (val.read + 1) : 1 
            data[index] = {...data[index], read: addReading }
            res.status(200).send(val)
        }
    })

    return res.status(400).send("Nenhum usuário encontrado com esse nome!") 
};

const getUsers = ( req, res ) => {
    data.map((val, index) => {
        const addReading = val.read ? (val.read + 1) : 1 
        data[index] = {...data[index], read: addReading }
    })
    res.status(200).send(data);
};

module.exports = {
    getUser,
    getUsers
};