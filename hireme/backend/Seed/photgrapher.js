const mongoose = require("mongoose");
const Photographer = require("../Models/photgrapher");

mongoose.connect("mongodb://127.0.0.1:27017/hiremeDB", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

const photographers = [
    {
        firstname: "John",
        lastname: "Doe",
        email: "t35603590@gmail.com",
        password: "password123",
        phone: 1234567890,
        address: "123 Main St, Anytown, USA",
        bio: "Experienced photographer specializing in portraits.",
        profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
        bgpic: "https://via.placeholder.com/800x200",
        portfolioImages: ["https://via.placeholder.com/300x200", "https://via.placeholder.com/300x200"],
        pricing: 100
    },
    {
        firstname: "Jane",
        lastname: "Smith",
        email: "ditysaikia530@gmail.com",
        password: "password456",
        phone: 2345678901,
        address: "456 Elm St, Othertown, USA",
        bio: "Creative photographer with a passion for nature.",
        profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
        bgpic: "https://via.placeholder.com/800x200",
        portfolioImages: ["https://via.placeholder.com/300x200", "https://via.placeholder.com/300x200"],
        pricing: 150
    },
    {
        firstname: "Alice",
        lastname: "Johnson",
        email: "alice.johnson@example.com",
        password: "password789",
        phone: 3456789012,
        address: "789 Oak St, Anytown, USA",
        bio: "Professional photographer with a focus on weddings.",
        profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
        bgpic: "https://via.placeholder.com/800x200",
        portfolioImages: ["https://via.placeholder.com/300x200", "https://via.placeholder.com/300x200"],
        pricing: 200
    },
    {
        firstname: "Bob",
        lastname: "Williams",
        email: "bob.williams@example.com",
        password: "password321",
        phone: 4567890123,
        address: "101 Pine St, Sometown, USA",
        bio: "Freelance photographer with a knack for street photography.",
        profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
        bgpic: "https://via.placeholder.com/800x200",
        portfolioImages: ["https://via.placeholder.com/300x200", "https://via.placeholder.com/300x200"],
        pricing: 120
    },
    {
        firstname: "Charlie",
        lastname: "Brown",
        email: "charlie.brown@example.com",
        password: "password654",
        phone: 5678901234,
        address: "202 Maple St, Anothertown, USA",
        bio: "Event photographer with over 10 years of experience.",
        profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
        bgpic: "https://via.placeholder.com/800x200",
        portfolioImages: ["https://via.placeholder.com/300x200", "https://via.placeholder.com/300x200"],
        pricing: 180
    },
    {
        firstname: "Daisy",
        lastname: "Miller",
        email: "daisy.miller@example.com",
        password: "password987",
        phone: 6789012345,
        address: "303 Birch St, Yetanothertown, USA",
        bio: "Portrait photographer with a unique style.",
        profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
        bgpic: "https://via.placeholder.com/800x200",
        portfolioImages: ["https://via.placeholder.com/300x200", "https://via.placeholder.com/300x200"],
        pricing: 140
    },
    {
        firstname: "Ethan",
        lastname: "Davis",
        email: "ethan.davis@example.com",
        password: "password1234",
        phone: 7890123456,
        address: "404 Cedar St, Anytown, USA",
        bio: "Travel photographer with a love for adventure.",
        profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
        bgpic: "https://via.placeholder.com/800x200",
        portfolioImages: ["https://via.placeholder.com/300x200", "https://via.placeholder.com/300x200"],
        pricing: 160
    },
    {
        firstname: "Fiona",
        lastname: "Evans",
        email: "fiona.evans@example.com",
        password: "password5678",
        phone: 8901234567,
        address: "505 Spruce St, Sometown, USA",
        bio: "Photographer specializing in food photography.",
        profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
        bgpic: "https://via.placeholder.com/800x200",
        portfolioImages: ["https://via.placeholder.com/300x200", "https://via.placeholder.com/300x200"],
        pricing: 170
    },
    {
        firstname: "George",
        lastname: "Anderson",
        email: "george.anderson@example.com",
        password: "password4321",
        phone: 9012345678,
        address: "606 Pine St, Othertown, USA",
        bio: "Lifestyle photographer capturing moments.",
        profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
        bgpic: "https://via.placeholder.com/800x200",
        portfolioImages: ["https://via.placeholder.com/300x200", "https://via.placeholder.com/300x200"],
        pricing: 130
    },
    {
        firstname: "Hannah",
        lastname: "Scott",
        email: "hannah.scott@example.com",
        password: "password8765",
        phone: 123456789,
        address: "707 Fir St, Yetanothertown, USA",
        bio: "Photographer with a focus on newborn photography.",
        profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
        bgpic: "https://via.placeholder.com/800x200",
        portfolioImages: ["https://via.placeholder.com/300x200", "https://via.placeholder.com/300x200"],
        pricing: 150
    }
];

async function seedDB() {
    try {
        await Photographer.deleteMany({});
        await Photographer.insertMany(photographers);
        console.log("Database seeded successfully");
        mongoose.connection.close();
    } catch (err) {
        console.error("Error seeding database:", err);
    }
}

seedDB();
