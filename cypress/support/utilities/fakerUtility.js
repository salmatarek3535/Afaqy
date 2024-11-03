import { faker } from '@faker-js/faker';

class FakerUtility
{
    name= faker.person.firstName();
    generateSignUpDetails(){
        let signUpDetails={
            name: this.name,
            email: faker.internet.email(),
            password: faker.internet.password({length:20}),
            firstName: this.name,
            lastName: faker.person.lastName(),
            company: faker.company.name(),
            address: faker.location.secondaryAddress(),
            country: "United States",
            state: faker.location.state(),
            city: faker.location.city(),
            zipCode: faker.location.zipCode(),
            mobileNumber: faker.phone.number(),
        }
        return signUpDetails;
    }
}
export default FakerUtility