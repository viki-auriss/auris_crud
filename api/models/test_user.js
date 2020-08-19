
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
    },
    add: async function(input){
      let result = await test_user.create(input);
      return result;
    },
    // edit: async function(params){
    //     let where = {
    //       id: params.id,
    //      };
    //     let criteria = {
    //         name: params.name
    //     };
    //     let result = await test_user.update(where,criteria);
    //     return result;
    // },  
    edit: async function(input){
      let where = {id:input.id};
      let criteria = {name:input.name};
      let retRes = await test_user.update(where,criteria).fetch();
      return retRes;
  },

    delete : async function(params){
    let result =  await test_user.destroy({name: params.name})
    return result;
  },
  list: async function (input) {

        return await test_user.find({name: input.name});
        
},

    
  };