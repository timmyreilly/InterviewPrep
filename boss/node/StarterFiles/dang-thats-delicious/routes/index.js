const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController'); 

const { catchErrors } = require('../handlers/errorHandlers');

// Do work here 
router.get('/', storeController.getStores);
router.get('/stores', catchErrors(storeController.getStores));
router.get('/add', storeController.addStore);

router.post('/add',
    storeController.upload,
    catchErrors(storeController.resize),
    catchErrors(storeController.createStore)
);

router.post('/add/:id',
    storeController.upload,
    catchErrors(storeController.resize),
    catchErrors(storeController.updateStore));

router.get('/stores/:id/edit', catchErrors(storeController.editStore));

router.get('/stores/:slug', catchErrors(storeController.getStore)); 

router.get('/tags', catchErrors(storeController.getStoresByTag));
router.get('/tags/:tag', catchErrors(storeController.getStoresByTag)); 

router.get('/login', userController.loginForm); 
router.post('/login', authController.login); 

router.get('/register', userController.registerForm); 
// 1. validate the registration info
// 2. register the user
// 3. log them in 

router.post('/register', 
    userController.validateRegister,
    userController.register,
    authController.login
);

router.get('/logout', authController.logout); 




module.exports = router;
