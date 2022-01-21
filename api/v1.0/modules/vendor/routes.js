const router = require('express').Router();
const api = require('./controller');
const auth=require('../../../../common/authentication');


// Middle layer for Auth API
router.get('/',auth.validateToken,api.vendorList)
router.get('/vendorDetails',auth,api.getVendorDetails)

module.exports = router;