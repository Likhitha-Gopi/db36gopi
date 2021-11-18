var express = require('express'); 
var router = express.Router(); 

// Require controller modules.
var api_controller = require('../controllers/api'); 
var hotel_controller = require('../controllers/hotels'); 
 
/// API ROUTE /// 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/hotels', hotel_controller.hotel_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/hotels/:id',hotel_controller.hotel_delete); 
 
// PUT request to update Costume. 
router.put('/hotels/:id', 
hotel_controller.hotel_update_put); 
 
// GET request for one Costume. 
router.get('/hotels/:id', hotel_controller.hotel_detail);
 
// GET request for list of all Costume items. 
router.get('/hotels', hotel_controller.hotel_view_all_Page); 

router.get('/detail', hotel_controller.hotel_view_one_Page); 

router.get('/create', hotel_controller.hotel_create_Page); 

router.get('/update',hotel_controller.hotel_update_Page);

router.get('/delete', hotel_controller.hotel_delete_Page);

router.delete('/hotels/:id',hotel_controller.hotel_delete);

module.exports = router;

