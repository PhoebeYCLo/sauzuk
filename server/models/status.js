const bookshelf = require("../bookshelf");

const Status = bookshelf.model("Status", {
    tableName: "status",
    status: () => this.belongsTo("Map")
});

module.exports = Status;