// middlewares/logger.js

export default function logger(req, res, next) {
    console.log(`Logged ${req.url}`)
    next()
}
