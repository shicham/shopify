import express, { Router } from 'express';
import { productController } from '../../modules/product'
import { auth } from '../../modules/auth';

const router: Router = express.Router();
router
  .route('/')
  .get(auth('manageUsers'),productController.getProduct);

/** 
router
  .route('/')
  .post(auth('manageUsers'), validate(userValidation.createUser), userController.createUser)
  .get(auth('getUsers'), validate(userValidation.getUsers), userController.getUsers);

router
  .route('/:userId')
  .get(auth('getUsers'), validate(userValidation.getUser), userController.getUser)
  .patch(auth('manageUsers'), validate(userValidation.updateUser), userController.updateUser)
  .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);
*/
export default router;