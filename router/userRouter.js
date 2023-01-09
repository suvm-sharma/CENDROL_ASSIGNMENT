const express = require('express');
const userController = require('./../controller/userController');
const authController = require('./../controller/authController');

const router = express();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.route('/').get(authController.protect, userController.getAllUser);

router
  .route('/:id')
  .get(userController.getOneUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
