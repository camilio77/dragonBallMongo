import { connect } from "../connection/connection.js";

export class Personajes extends connect {
    static instance;
    constructor() {
        super();
        if (typeof Personajes.instance === 'object') {
            return Personajes.instance;
        }
        Personajes.instance = this;
        return this;
    }

    async init() {
        await this.connect();
        this.db = this.getDb();
    }

    async getAlienAll() {
        if (!this.db) {
            await this.init();
        }
        const data = await this.db.collection('personajes').find().toArray();
        return data;
    }

    async buscarAliens() {
        try {
            if (!this.db) {
                await this.init();
            }
            const result = await this.db.collection('personajes').find().toArray();
            return result;
        } catch (error) {
            console.error('Error in buscarAliens:', error);
            throw error;
        }
    }
}