import { faker } from '@faker-js/faker';

const createRandomProduct = () => {
    return {
        description: faker.commerce.product(),
        drawingNumber: faker.datatype.number({min: 100000, max: 99999999, precision: 1}).toString(),
        revision: faker.datatype.number({min: 0, max: 99, precision: 1}).toString(),
        itemNumber: faker.datatype.number({min: 100000, max: 99999999, precision: 1}).toString(),
        moq: faker.datatype.number({min: 1, max: 1000, precision: 1}).toString(),
        price: {
            $numberDecimal: faker.finance.amount(0.01, 1000, 2),
        },
        offerNumber: faker.datatype.number({min: 100000, max: 799999, precision: 1}).toString(),
        __v: 0
    };
}
export const createFakeData =  (req, res) => {
    const products = [];

    Array.from({length: 1000}).forEach(() => {
        products.push(createRandomProduct());
    });

    res.send(products);
}