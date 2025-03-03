import express, { Router } from 'express';
import { userController } from '../../modules/user';
import { validate } from '../../validate';
import { userValidation } from '../../modules/user'
import { auth } from '../../modules/auth';

const router: Router = express.Router();
router
  .route('/')
  .post(auth('createUser'),validate(userValidation.createUser), userController.createUser)
  .get(auth('getUsers'),userController.getUsers)

  router
  .route('/:userId')
  .get(auth('getUser'),userController.getUser)
  .patch(auth('updateUser'),userController.updateUser)
  .delete(auth('deleteUser'),userController.deleteUser);

export default router;
