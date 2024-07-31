
// seed.js
const mongoose = require('mongoose');
const Photographer = require('../Models/photgrapher'); // Adjust the path as needed

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/hiremeDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Sample data
const photographers = [
    {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        phone: 1234567890,
        address: '123 Main St, Anytown, USA',
        bio: 'Experienced photographer specializing in portraits and landscapes.',
        portfolioImages: [
            'https://example.com/image1.jpg',
            'https://example.com/image2.jpg'
        ],
        pricing: 500,
        reviews: []
    },
    {
        firstname: 'Jane',
        lastname: 'Smith',
        email: 'jane.smith@example.com',
        password: 'password456',
        phone: 9876543210,
        address: '456 Elm St, Othertown, USA',
        bio: 'Freelance photographer with a passion for wedding and event photography.',
        portfolioImages: [
            'https://example.com/image3.jpg',
            'https://example.com/image4.jpg'
        ],
        pricing: 800,
        reviews: []
    }
];

// Seed database
const seedDatabase = async () => {
    try {
        await Photographer.deleteMany(); // Clear the collection before seeding
        await Photographer.insertMany(photographers); // Insert sample data
        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close(); // Close the connection
    }
};

seedDatabase();
