const dal = require('../dal/dal');

const addCustomer = async function(customerData){
  // Add all business logic here 
  // enrich data to be stored in db
  await dal.insertCustomerData(customerData);
  return customerData;
}

const getCustomers = async function(id){
    let result = await dal.getCustomerData(id);
    return result;
}

const deleteCustomerById = async function(id){
    let result = await dal.deleteCustomerById(id);
    return result;
}

module.exports = {
    addCustomer,
    getCustomers,
    deleteCustomerById
}