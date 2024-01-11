import { Notice } from "../models/notice.model.js";

export const getNotices = async (req, res) => {
    try {
        const notices = await Notice.find();
        res.json(notices);
    } catch (error) {
        console.log(error);
    }
}

export const createNotice = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newNotice = new Notice({ title, description });
        const noticeSaved = await newNotice.save();
        res.json(noticeSaved);
    } catch (error) {
        console.log(error);
    }
}

