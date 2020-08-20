/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 * @module			:: controllers/Product
 */

const Product = require("../models/test_user.js");

module.exports = {


  create : async function(req,res){
    try {       
        let input = req.body;    
        let result = await test_user.add(input);
        res.json(result);
    } catch (err) {
        res.badRequest(err);
    }
},

delete : async function(req, res){
  try{
    let params = req.params;
    let result = await test_user.delete(params);
    res.json(result);
    }catch(err){
    res.badRequest(err);
  }

},

  edit : async function(req,res){
   // console.log(req.body);
  try{
    let params = req.body;
    let result = await test_user.edit(params);
     res.json(result);
    }catch(err){
    res.badRequest(err);
  }

},

list : async function (req, res) {
  //sails.log.info("@Controller CourseController @Method get(req,res)", req.user['custom:postgres_UserID']);

  try{
    let params = req.params;
    let result = await test_user.list(params);
      res.json(result);
}catch(err){
    //sails.log.error("@Contrlioller CourseController @Method get @Message Error:", err);
    res.badRequest(err);
  }
},

getProductType : async function (req, res) {
  //sails.log.info("@Controller CourseController @Method get(req,res)", req.user['custom:postgres_UserID']);
   console.log(req.params);
   let obj = {}
  try{
    let params = req.params;
    let result = await test_user.getProductType(params);
      res.json(result);
}catch(err){
    //sails.log.error("@Contrlioller CourseController @Method get @Message Error:", err);
    res.badRequest(err);
  }
},









  // create : async function(req,res){
  //   //sails.log.info("@Controller ProductController @Method create(req,res)", req.body);
    
  //   Product.create({
  //     name : req.input('name'),
  //     qty : req.input('qty')
  //   })

  //   .then(product => {           //Return the parameters

  //    return res.ok(product);

  //   })
  //   .catch(err => req.serverError(err));
  // }

  
   
    //   find(req,res){
    //    products.find()
    //    .then(Product => res.ok())
    //    .catch(err => res.notFound(err));
    //   },
   
    //   delete(req,res){
    //    products.destroy({
    //      id: req.params.id
    //    })
    //    .then(product => res.ok(product))
    //    .catch(err => res.serverError(err));
    //  },
   
    //  update(req,res){
   
    //  }
     

};

