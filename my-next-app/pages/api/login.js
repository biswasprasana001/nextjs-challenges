// pages/api/login.js

export default function handler(req, res) {
    const { username, password } = req.body

    if (username === 'admin' && password === 'password') {
        res.status(200).json({ status: 'Logged in' })
    } else {
        res.status(401).json({ status: 'Invalid credentials' })
    }
}  