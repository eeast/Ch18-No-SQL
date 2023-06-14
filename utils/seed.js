const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomEmail, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Drop existing users
    await User.deleteMany({});

    // Drop existing thoughts
    await Thought.deleteMany({});

    // Create empty array to hold the thoughts
    const users = [];
    const allUsernames = [];
    const thoughts = [];

    // Loop 10 times -- add users to the users array
    for (let u = 0; u < 20; u++) {
        const username = getRandomName();
        allUsernames.push(username);

        // Loop up to 10 times -- add thoughts to the thoughts array
        for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
            // Get some random reaction objects using a helper function that we imported from ./data
            const thoughtText = getRandomThought();
            const reactions = getRandomReactions(20);

            for (let j = 0; j < reactions.length; j++) {
                allUsernames.push(reactions[j].username);
            }

            // Push thought to thoughts array
            thoughts.push({
                username,
                thoughtText,
                reactions
            });
        };

        // Add user data to the users array
        users.push({
            username,
            thoughts
        });
    }

    for (let i = 0; i < users.length; i++) {
        const friends = [];
        for (let j = 0; j < 3; j ++) {
            let id = Math.floor(Math.random() * 10);
            while (id == i && !friends.includes(id)) {
                id = Math.floor(Math.random() * 10);
            }
        }


        // Add users to the collection and await the results
        await User.collection.insertOne({
            username,
            email,
            thoughts: Thought.collection.find({username: username}),
        });
    }

    

      

    // Log out the seed data to indicate what should appear in the database
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});
