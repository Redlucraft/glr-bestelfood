const { faker } = require('@faker-js/faker');
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");

async function main() {
    const uri = "mongodb://redlucraft:pOxDDGNdFHXwpbcD@ac-meih7y1-shard-00-00.wfm6bgp.mongodb.net:27017,ac-meih7y1-shard-00-01.wfm6bgp.mongodb.net:27017,ac-meih7y1-shard-00-02.wfm6bgp.mongodb.net:27017/?ssl=true&replicaSet=atlas-itg238-shard-0&authSource=admin&retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const productsCollection = client.db("food-ordering").collection("products");
        const categoriesCollection = client.db("food-ordering").collection("categories");

        let categories = ["soep", "salades", "voorgerechten", "mezes", "panini", "turkse-pizza", "kapsalon", "broodjes", "doner", "hoofd-gerechten-vlees", "vis", "kindermenu", "pizza", "pasta", "bijgerecht", "nagerecht", "dranken"].map((category) => {return{name: category}});        await categoriesCollection.insertMany(categories);

        let imageUrls = [
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png',
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/2_afbbos.png',
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/3_iawvqb.png',
        ]

        let products = [];
        for (let i = 0; i < 10; i+=1) {
            let newProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                desciption: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category: _.sample(categories),
                imageUrl: _.sample(imageUrls)
            };
            products.push(newProduct);
        }
        await productsCollection.insertMany(products);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();