const express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
})

app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Antonio", last_name: "Pavlović" },
        { id: 2, name: "Marko", last_name: "Marković" },
        { id: 3, name: "Petar", last_name: "Perić" }
    ])
})

const port = 3000;
app.listen(port, (error) => { //naredba listen kaže da naša app sluša naredbe sa unešenog porta
    if (error) {
        console.error("Greška!");
    } else {
        console.log("Server je pokrenut na portu " + port);
    }
}); 