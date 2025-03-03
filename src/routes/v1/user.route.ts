import express, { Router } from 'express';
import { userController } from '../../modules/user';
import { validate } from '../../validate';
import { userValidation } from '../../modules/user'
import { auth } from '../../modules/auth';

const router: Router = express.Router();
router
  .route('/')
  .post(auth('getUsers'),validate(userValidation.createUser), userController.createUser)
  .get(userController.getUsers)

  router
  .route('/:userId')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export default router;
