const bookshelf = require("../bookshelf");

const Map = bookshelf.model("Map", {
    tableName: "map",
    protest: () => this.belongsTo("Protest"),
    status: () => this.hasMany("Status")
});

module.exports = Map;