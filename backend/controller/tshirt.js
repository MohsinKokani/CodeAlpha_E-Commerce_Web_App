import { tshirtModel } from "../models/collectionStruct.js"

class TshirtCollection {
    static getAll = async (req, res) => {
        const result = await tshirtModel.find({});
        res.send(result)
    }

    static create = async (req, res) => {
        res.send("creation yet to implement")
    }
    
    static edit = async (req, res) => {
        res.send("editing yet to implement")
    }
    
    static update = async (req, res) => {
        res.send("updation yet to implement")
    }
    
    static delete = async (req, res) => {
        res.send("deletion yet to implement")
    }
}

export default TshirtCollection;