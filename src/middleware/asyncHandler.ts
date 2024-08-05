import { Request, Response, NextFunction } from 'express';

// Define the type for the asynchronous function
type AsyncFunction = (req: Request, res: Response, next: NextFunction) => Promise<any>;

// Create the asyncHandler middleware
const asyncHandler = (fn: AsyncFunction) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;