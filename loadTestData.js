import { MongoClient } from "mongodb";
import assert from "assert";
import config from "./config";

MongoClient.connect(config.mongoURI, (err, client) => {
    var db = client.db("contest_db");
    assert.equal(null, err);

    db.collection("contests").insertMany([
        {
            id: 1,
            categoryName: "Business/Company",
            contestName: "Cognitive Building Bricks",
            description: "Classroom tool that scaffolds higher order thinking.",
            nameIds: [101, 102]
        },
        {
            id: 2,
            categoryName: "Magazine/Newsletter",
            contestName: "Educating People About Sustainable Food Production",
            description: "See title. Exactly what it sounds like.",
            nameIds: []
        },
        {
            id: 3,
            categoryName: "Software Component",
            contestName: "Big Data Analytics for Cash Circulation",
            description: "Combining powerful visualisation components and a data-driven approach to interact with the data.",
            nameIds: [103, 104, 105]
        },
        {
            id: 4,
            categoryName: "Website",
            contestName: "Free Programming Books",
            description: "A list of free online programming books, categorized by languages/topics.",
            nameIds: [103, 104, 105]
        }
    ]).then(response => {
        console.info("Contests:", response.insertedCount);
        db.collection("names").insertMany([
            { id: 101, name: "Mind Assembly", timestamp: new Date() },
            { id: 102, name: "Brain Scaffold", timestamp: new Date() },
            { id: 103, name: "Cash View", timestamp: new Date() },
            { id: 104, name: "Currency Map", timestamp: new Date() },
            { id: 105, name: "Cash Board", timestamp: new Date() },
            { id: 106, name: "RootLib", timestamp: new Date() }
        ]).then(response => {
            console.info("Names", response.insertedCount);
            db.close();
        });
    });
});