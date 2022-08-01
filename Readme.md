
# Swym  Node Sample Project

This project contains some guidelines for node services.

## Setup
 - To clone use git clone https://github.com/swym-corp/node_reference_project.git
 - Node 12 + installed
 - npm installed
### Local Setup
 - cd node_reference_project
 - npm i
 - node server.js
 - Setup Mongo Instance locally using https://www.mongodb.com/products/compass
 - run db.createCollection('CustomerExample', { capped: false });
 - Access the app on localhost 
 - Check default.json if not node_env provided for credentials

### Spin Docker Compose
 - run docker-compose up
 - Make sure the mongo db credentials match in the node_env setup by you
 - Access the app on localhost

### Spin As a Azure App service
 - Push the node docker image to an existing acr or newly created acr
 - While creating the docker image if using a macos with m1 chip make sure to specify the platform dependency.
 Azure app service only works with arm images 
 Command - docker buildx build --platform linux/amd64 -t samplenodeappv1 .
 - Push to registry docs https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli?tabs=azure-cli
 - After pushing the acr create a app service using the Azure portal.
 Screenshot 2022-06-07 at 1.59.22 PM
 - Add the acr image to the app service and create the config

### AKS Setup



