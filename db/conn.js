let mongoose = require("mongoose")

// connection creation and new db formation(ttchannel)

mongoose.connect("mongodb://localhost:27017/students-api", {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection successfull")
}).catch((error) => {
    console.log("no connection b/w mongodb and express")
})