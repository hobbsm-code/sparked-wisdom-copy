import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { quoteRouter } from './quote-routes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/quotes', quoteRouter);

export default router;
