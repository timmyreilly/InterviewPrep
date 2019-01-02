const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const userController = require('../controllers/userController')

const { catchErrors } = require('../handlers/errorHandlers');

// Do work here 
router.get('/', storeController.homePage);
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

// 1. validate the registration info
// 2. register the user
// 3. log them in 

router.get('/register', userController.registerForm); 
router.post('/register', userController.validateRegister ); 



module.exports = router;
