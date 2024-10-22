const express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.send("Hello world!");
})

const port = 3000;
app.listen(port, (error) => { //naredba listen kaže da naša app sluša naredbe sa unešenog porta
    if (error) {
        console.error("Greška!");
    } else {
        console.log("Server je pokrenut na portu " + port);
    }
}); 