const fs = require('fs');

/* Create Configuration File
 *
 * The administrator would want to have the vet info stored. */
exports.CreateConfigFile = (req, res) => {
	if(CheckConfigFile())
		res.sendStatus(201);
};

/* Helper function to check whether or not the configuration
 * file exists in the file system. Return false if there is any
 * error. */
function CheckConfigFile(){
	const CONFIG_FILE = 'config.json';
	const INITIAL_SETUP = {
		"vetName": "",
		"vetAddres": {
			"street": "",
			"number": 0,
			"zipCode": 0,
			"stateOrProvince": "",
			"country": ""
		},
		"vetLogo": "",
		"vetHeadOfMedics": {
			"name": "",
			"code": ""
		}
	};

	try{
		if(!fs.existsSync(CONFIG_FILE))
			fs.writeSync(CONFIG_FILE, INITIAL_SETUP);

		return true;
	}catch(err){
		console.error(err);
		return false;
	}
};
