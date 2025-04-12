import jwt from 'jsonwebtoken';

const authenticateJWT = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ error: "Access Denied. No token provided." });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: "Invalid or expired token." });
        req.user = user;  // Store user info in the request object
        next();
    });
};

export default authenticateJWT;
