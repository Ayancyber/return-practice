import {ratelimiter} from '../config/upstash.js';
const rater = async (req, res, next) =>{
    try{
        const ip = req.ip;
        const {success} = await ratelimiter.limit(ip);
        if(!success){
            return res.status(429).json({message: `Too many requests, please try again later.ip: ${ip}`});
        }   
        next();
    }catch(error){
        console.error(`Error in rate limiter middleware ${error.message}`);
        next(error);
    }
}
export default rater