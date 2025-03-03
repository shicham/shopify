import { Request, Response, NextFunction } from "express";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const userApiKey = req.headers["x-api-key"];
  if (!userApiKey || userApiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: "Unauthorized: Invalid API Key" });
  }

  next(); // ✅ Call next() to proceed
};

export default authenticate;
