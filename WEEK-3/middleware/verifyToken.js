import jwt from 'jsonwebtoken';
export function verifyToken(req, res, next) {
    // token verification logic here

    // 1. get token form req(using cookie parser)
    let signedToken = req.cookies.token; // {token : 'xxxxxx'}
    if (!signedToken) {
        return res.status(401).json({ message: 'please login first' });
    }
    // 2. verify token(decode)
    jwt.verify(signedToken, 'secret')
    console.log("decode token", decodeToken);
    next();

}
