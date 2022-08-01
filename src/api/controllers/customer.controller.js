const manager = require('../../managers/customer.manager')
const { logger } = require('../../helpers/logger');

let addCustomer = async function (req, res) {
    try {
        let customerDetail = req.body
        logger.info(`Customer Controller Received request to add a customer with data ${JSON.stringify(customerDetail)} `, 'addCustomer');
        let result = await manager.addCustomer(customerDetail);
        res.status(200).send(result);
        logger.info(`Successfully added a customer with data ${JSON.stringify(customerDetail)} `, 'addCustomer');

    } catch (exception) {
        logger.error(`Customer Controller Failed to add a customer with error ${exception} `, 'addCustomer');
        res.status(500).send("Internal Server Error Error = " + exception);
    }

}

let getCustomers = async function (req, res) {
    try {
        logger.info(`Customer Controller Received request to get customer details with data ${req.query.customerId} `, 'getCustomer');
        let result = await manager.getCustomers(req.query.customerId);
        res.status(200).send(result);
    } catch (exception) {
        logger.error(`Customer Controller Failed to get customer with error ${exception} `, 'getCustomer');
        res.status(500).send("Internal Server Error Error = " + exception);
    }
}

let deleteCustomerById = async function (req, res) {
    try {
        logger.info(`Customer Controller Received request to delete a customer with data ${req.query.customerId} `, 'deleteCustomer');
        let result = await manager.deleteCustomerById(req.query.customerId);
        res.status(200).send(result);
    }
    catch (exception) {
        logger.error(`Customer Controller Failed to delete a customer with error ${exception} `, 'deleteCustomer');
        res.status(500).send("Internal Server Error Error = " + exception);
    }
}

module.exports = {
    addCustomer,
    getCustomers,
    deleteCustomerById
}