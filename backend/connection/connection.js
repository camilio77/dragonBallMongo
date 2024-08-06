import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();
const uri = process.env.MONGO_URI;
const database = process.env.DB_NAME;

export class connect {
    constructor(){
        this.client = new MongoClient(uri);
        this.db = null;
    }
    async connect() {
        if (!this.db){
            try {
                await this.client.connect();
                this.db = this.client.db(database); // Get the default database
                console.log("Connected to MongoDB");
            }
            catch (error) {
                console.error("Error connecting to MongoDB:", error);
                throw error;
            }
        }
        return this.db;
    }
    getDb() {
        if (!this.db) {
            throw new Error("MongoDB connection not established");
        }
        return this.db;
    }
    async close() {
        if (this.client) {
            await this.client.close();
            console.log("MongoDB connection closed");
        }
    }
}