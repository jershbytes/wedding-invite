const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');  // Set EJS as the view engine
app.use(express.static('public'));  // Serve static files

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: "Wedding Invitation" });
});

app.get('/registry', (req, res) => {
    res.render('registry', { title: "Wedding Registry" });
});

app.get('/details', (req, res) => {
    res.render('details', { title: "Wedding Details" });
});

app.get('/rsvp', (req, res) => {
    res.render('rsvp', { title: "RSVP" });
});

app.get('/couple', (req, res) => {
    const couple = {
        bride: {
            name: "Jane Smith",
            bio: "Jane is an artist and writer who loves the outdoors, exploring new cultures, and sharing her creativity. She's excited to begin this next chapter with John and celebrate with family and friends.",
            hobbies: ["Painting", "Hiking", "Photography"]
        },
        groom: {
            name: "John Doe",
            bio: "John is a software engineer who enjoys coding, gaming, and spending time with his family. He's thrilled to embark on this lifelong adventure with Jane and can’t wait for their wedding day.",
            hobbies: ["Coding", "Gaming", "Cooking"]
        },
        story: "Jane and John met on a rainy day in the city park. John was sheltering under a tree with a broken umbrella, and Jane, always prepared, offered to share her umbrella. From that moment, they connected, shared laughter, and found a deep understanding that continues to grow every day."
    };
    res.render('couple', { title: "Meet the Couple", couple });
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
