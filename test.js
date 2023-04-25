// simple tests for the api routes
const api = require('./index');

const config = {
    publicKey: "a16cffe703679ac431b8f0ebd79e52885ff7f658",
    secret: "a16cffe703679ac431b8f0ebd79e52885ff7f658",
    baseUrl: "https://app.abillionclients.com/api/index.php"
};

const clients = new api.SaaSClients(config);

const options = {
    'firstName': 'testDePrimuNume',
    'lastName': 'testDeUltimuNume',
    'email': 'gpsopenshift@gmail.com',
    'password': 'nutierusineobrazului',
    'timezone' : 'Pacific/Honolulu',
    'birthDate': 'da',

    // this are the company details
    'companyName': 'companiaCurului',
    'companyCountry': 'United States',
    // maybe this is a PIECE OF SHIT
    'companyZone': 'Pacific/Honolulu',
    'companyCity': 'BuCHHUResti',
    'companyZipCode': 0777364,
    'companyAddress1': 'bag muie des in gura CETATENILOR',
    'companyAddress2': 'bag cacat cald in gura DREPTILOR'
};

(async () => {
    console.log('baga tati muie');
    console.log(JSON.stringify(options));
    let result = await clients.create(options);
})();
