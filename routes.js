const path = require('path');
const clients = require('./database').Clients;

const form = async (req, res, next) => {
  res.sendFile(path.join(__dirname + '/vue/form.html'));
}


const validation = async (req, res, next) => {
	const { nom, prenom, datenaissance, email, telephone, adresse } = req.body;
	if ( !nom || !prenom|| datenaissance.length === 0 || !email || !telephone || !adresse)
		res.status(400).sendFile(path.join(__dirname + '/vue/erreur.html'));
    else {
        clients.create({
            nom: clients.nom,
            prenom: clients.prenom,
            datenaissance: clients.datenaissance,
            email: clients.email,
            telephone: clients.telephone,
            adresse: clients.adresse,
        }).then(() => {
            res.status(201).sendFile(path.join(__dirname + '/vue/succes.html'));
        })
    } 
};


// export route
module.exports = {
    form,
    validation
}