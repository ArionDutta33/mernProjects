const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

//mongodb

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@yoga-master.ehc5m7j.mongodb.net/?retryWrites=true&w=majority&appName=yoga-master`;



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        //creating db

        const database = client.db("yoga-master")
        const usersCollection = database.collection("users")
        const classesCollection = database.collection("classes")
        const cartCollection = database.collection("cart")
        const paymentCollection = database.collection("payments")
        const enrolledCollection = database.collection("enrolled")
        const appliedCollection = database.collection("applied")

        //classes routes
        app.post("/new-class", async (req, res) => {
            const newClass = req.body;
            // newClass.availableSeats
            const result = await classesCollection.insertOne(newClass)
            res.send(result)
        })

        app.get("/classes", async (req, res) => {
            const query = { status: 'approved' }
            const results = await classesCollection.find().toArray()
            res.send(results)
        })
        //get classes by instructor email address
        app.get("/classes/:email", async (req, res) => {
            const email = req.params.email;
            const query = { instructorEmail: email }
            const result = await classesCollection.find(query).toArray();
            res.send(result)
        })
        //manage classes
        app.get("/classes-manage", async (req, res) => {
            const result = await classesCollection.find().toArray()
            res.send(result)
        })

        //update classes status and reason
        app.patch("/change-status/:id", async (req, res) => {
            const id = req.params.id;
            const status = req.body.status;
            const reason = req.body.reason;
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    status: status,
                    reason: reason
                }
            }
            const results = await classesCollection.updateOne(filter, updateDoc, options)
            res.send(results)
        })
        //get approved class
        app.get("/approved-classes", async (req, res) => {
            const query = { status: "approved" }
            const result = await classesCollection.find(query).toArray()
            res.send(result)
        })
        //get single class details
        app.get("/class/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await classesCollection.findOne(query)
            res.send(result)
        })
        //update class details

        app.put("/update-class/:id", async (req, res) => {
            const id = req.params;
            const updateClass = req.body;
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true }
            const updateDoc = {
                $set: {
                    name: updateClass.name,
                    description: updateClass.description,
                    price: updateClass.price,
                    availableSeats: updateClass.availableSeats,
                    videoLink: updateClass.videoLink,
                    status: "pending"

                }
            }
            const result = await classesCollection.updateOne(filter, updateDoc, options)
            res.send(result)
        })

        //cart routes
        app.post("/add-to-cart", async (req, res) => {
            const newCartItem = req.body;
            const result = await cartCollection.insertOne(newCartItem)
            res.send(result)
        })

        //get cart item by id
        app.get("/cart-item/:id", async (req, res) => {
            const id = req.params.id;
            const email = req.body.email;
            const query = {
                classId: id,
                userMail: email
            }
            const projection = { classId: 1 }
            const result = await cartCollection.findOne(query, { projection: projection });
            res.send(result)
        })
        //cart-info by user email
        app.get("/cart/:email", async (req, res) => {
            const email = req.params.email
            const query = { userMail: email }
            const projection = { classId: 1 }
            const carts = await cartCollection.find(query, { projection: projection })
            const classIds = carts.map((cart) => new ObjectId(cart.classId))
            const query2 = { _id: { $in: classIds } }
            const result = await cartCollection.find(query2).toArray();
            res.send(result)
        })
        //delete cart item
        app.delete("/delete-cart-item/:id", async (req, res) => {
            const id = req.params.id;
            const query = { classId: id }
            const result = await cartCollection.deleteOne(query)
            res.send(result)

        })

        //payments routes
        app.post("/create-payment-intent", async (req, res) => {
            const { price } = req.body;
            const amount = parseInt(price) * 100;
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount,
                currency: "usd",
                payment_method_types: ["card"]
            })
            res.send({
                clientSecret: paymentIntent.client_secret,
            })
        })

        //post payment info to db
        app.post("/payment-info", async (req, res) => {
            const paymentInfo = req.body;
            const classesId = paymentInfo.classId;
            const userEmail = paymentInfo.userEmail;
            const singleClassId = req.query.classId;//!single or signle
            let query;
            if (singleClassId) {
                query = { classesId: singleClassId, userEmail: userEmail }
            } else {
                query = { classId: { $in: classesId } }
            }
            const classesQuery = { _id: { $in: classesId.map(id => new ObjectId(id)) } }
            const classes = await classesCollection.find(classesQuery.toArray())
            const newEnrolledData = {
                userEmail: userEmail,
                classesId: singleClassId.map(id => new ObjectId(id)),
                transactionId: paymentInfo.transactionId
            }
            const updatedDoc = {
                $set: {
                    totalEnrolled: classes.reduce((total, current) => total + current.totalEnrolled, 0) + 1 || 0,
                    availableSeats: classes.reduce((total, current) => total + currnt.availableSeats, 0) - 1 || 0
                }
            }
            const updatedResult = await classesCollection.updateMany
        })
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();//!check this is closed
    }
}
run().catch(console.dir);






app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(port, () => {
    console.log("server up")
}) 