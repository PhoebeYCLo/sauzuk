const bookshelf = require("../bookshelf");

const Protest = bookshelf.model("Protest", {
    tableName: "protest",
});

module.exports = Protest;