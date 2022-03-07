const config = {
    server: {
        port: process.env.PORT,
    },
    db:{
        uri:process.env.DB_URI
    }
}

module.exports = config