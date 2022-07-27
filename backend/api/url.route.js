import express from "express"
import rand from "random-key"
import ShortUrl from "../models/ShortUrl.js"
import { MONTH } from "../utils/constants.js"
import { trimResult } from "../utils/helper.js"
const router = express.Router();

// @desc    Process long URL
// @route   POST /api/v1/urls
router.post('/', async (req, res) => {
    try {
        const BASE_URL = req.headers.origin;
        const code = rand.generate(7);
        const shortURL = await ShortUrl.find({ code });

        if (!shortURL.length) {
            const result = await ShortUrl.create({
                code,
                longUrl: req.body.longUrl,
                shortUrl: BASE_URL + `/${code}`,
                expiresAt: (Date.now() + MONTH)
            });
            
            res.send(trimResult(result));
        }
    } catch (err) {
        console.error(err)
        res.send({ error: err });
    }
})

// @desc    Returns record by code
// @route   GET /api/v1/urls/:code
router.get('/:code', async (req, res) => {
    try {
        const result = await ShortUrl.findOne({ code: req.params.code }).lean()
        console.log('\n\nRESULT\n\n', result);

        res.send(trimResult(result));
    } catch (err) {
        console.error(err)
        res.send({ error: err });
    }
})

export default router