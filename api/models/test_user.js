
/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const { update } = require("../controllers/ProductController");

module.exports = {
	tablename: 'test_user',
    attributes: {
      name: {
        type: 'string'
      },
      qty: {
        type: 'integer'
      },
      product_type: {
          type: 'string'
      },
    },
    add: async function(input){
      let result = await test_user.create(input);
      return result;
    },
    
    edit: async function(input){
      let where = {id:input.id};
      let criteria = {name:input.name};
      let retRes = await test_user.update(where,criteria).fetch();
      return retRes;
  },

    delete : async function(params){
        sails.log.info("Product Deleted Sucessfully")
    let result =  await test_user.destroy({name: params.name})
    return result;
  },
  list: async function (input) {

        return await test_user.find({name: input.name});
        
},
getProductType: async function (input) {
  //console.log("input",input)
  //let where = {product_type: input.product_type};
  // let obj ={}
  // obj[input.product_type] = result;
  return await test_user.find({product_type: input.product_type});
  
  
},

    
  };