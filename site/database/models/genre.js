"use strict";
module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define(
        "Genre",
        {
            name: DataTypes.STRING,
        },
        { tableName: "genres" }
    );
    Genre.associate = function (models) {
        Genre.hasMany(models.Movie, { as: "movies" });
    };
    return Genre;
};
