db.createUser(
    {
        user: "devUser1",
        pwd: "swymDev",
        roles: [
            {
                role: "readWrite",
                db: "Swym"
            }
        ]
    }
);
db.createCollection('CustomerExample', { capped: false });