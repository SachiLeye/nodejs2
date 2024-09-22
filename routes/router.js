const express = require('express');
const router = express.Router();

const hp = require('../controller/HpCon');

router.get('/', hp.index);
router.get('/about', hp.about); 
router.get('/blog1', hp.blog1); 
router.get('/blog2', hp.blog2); 
router.get('/catp', hp.catp); 
router.get('/cprivate', hp.cprivate);
router.get('/crewcourse', hp.crewcourse); 
router.get('/ctraffic', hp.ctraffic); 
router.get('/home1', hp.home1); 
router.get('/home2', hp.home2); 
router.get('/contact', hp.contact); 

router.get('/pPrivacy', hp.pPrivacy); 
router.get('/pService', hp.pService); 
router.get('/pRegister', hp.pRegister); 
router.get('/pFaq', hp.pFaq); 
router.get('/pLogin', hp.pLogin); 


module.exports = router;

