var Hotels = require('../models/hotel'); 
 
// List of all hotel

exports.hotel_list = async function(req, res) { 
    try{ 
        theHotels = await Hotels.find(); 
        res.send(theHotels); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// for a specific hotel. 
exports.hotel_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: hotel detail: ' + req.params.id); 
}; 
 
// Handle hotel create on POST. 
exports.hotel_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: hotel create POST'); 
}; 
 
// Handle hotel delete form on DELETE. 
exports.hotel_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: hotel delete DELETE ' + req.params.id); 
}; 
 /*
// Handle hotel update form on PUT. 
exports.hotel_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: hotel update PUT' + req.params.id); 
}; */

exports.hotel_view_all_Page = async function(req, res) { 
    try{ 
        theHotels = await Hotels.find(); 
        res.render('hotel', { title: 'hotel Search Results', results: theHotels }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume create on POST. 
exports.hotel_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Hotels(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.hotelType = req.body.hotelType;
    document.price = req.body.price;
    document.capacity = req.body.capacity; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

exports.hotel_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Hotels.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 


exports.hotel_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Hotels.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.hotelType)  
               toUpdate.hotelType = req.body.hotelType; 
        if(req.body.price) toUpdate.price = req.body.price; 
        if(req.body.capacity) toUpdate.capacity = req.body.capacity; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

exports.hotel_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('hotelcreate', { title: 'Hotel Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle building the view for updating a hotel. 
// query provides the id 
exports.hotel_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Hotels.findById(req.query.id) 
        console.log(result)
        res.render('hotelupdate', { title: 'Hotel Update', toShow: result }); 
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.hotel_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{
        result = await Hotels.findById(req.query.id) 
        res.render('hoteldelete', { title: 'Hotel Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    }
};

exports.hotel_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id);
    try {
        console.log('here');
      result = await Hotels.findById(req.query.id);
      res.render("hoteldetail", { title: "hotel Detail", toShow: result });
    } catch (err) {
      res.status(500);
      res.send(`{'error': '${err}'}`);
    }
  };

  exports.hotel_delete = async function (req, res) {
  console.log("delete " + req.params.id);
  try {
    result = await hotels.findByIdAndDelete(req.params.id);
    console.log("Removed " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": Error deleting ${err}}`);
  }
};


exports.hotel_delete = async function (req, res) {
    console.log("delete " + req.params.id);
    try {
      result = await Hotels.findByIdAndDelete(req.params.id);
      console.log("Removed " + result);
      res.send(result);
    } catch (err) {
      res.status(500);
      res.send(`{"error": Error deleting ${err}}`);
    }
  };