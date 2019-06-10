module.exports = function(sequelize, DataTypes) {
    let Burger = sequelize.define("burger", {
        burger_name: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
    return Burger;
}