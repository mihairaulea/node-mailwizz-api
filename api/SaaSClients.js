const Request = require('./Request');

const path = '/customers';

// for this to work - adding new customers via api
// https://app.abillionclients.com/backend/index.php/settings/customers/subaccounts
// go to enabled and switch it on to yes

// i think this is the setting i need to turn on:
// https://app.abillionclients.com/backend/index.php/settings/customers/registration
// customer registration enabled yes

class SaaSClients extends Request {
    constructor(config) {
        super(config);
    }

    create(info) {
        let postData = {
        };
        postData.customer = {};
        postData.customer.first_name =  info.firstName;
        postData.customer.last_name = info.lastName;
        postData.customer.email = info.email;
        postData.customer.confirm_email = info.email;
        postData.customer.fake_password = info.password;
        postData.customer.confirm_password = info.password;
        postData.customer.timezone = info.timezone;
        postData.customer.birthDate = info.birthDate;

        postData.company = {};
        postData.company.name = info.companyName;
        postData.company.country = info.companyCountry;
        postData.company.zone = info.companyZone;
        postData.company.city = info.companyCity;
        postData.company.zip_code = info.companyZipCode;
        postData.company.address_1 = info.companyAddress1;
        postData.company.address_2 = info.companyAddress2;

        console.log('------');
        console.log((postData));
        console.log('------');

        this.method = Request.Type.POST;
        this.url = path;
        this.data = {
            campaign: postData
        };

        return this.send();
    }
}

module.exports = SaaSClients;
