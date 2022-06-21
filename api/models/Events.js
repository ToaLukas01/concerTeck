const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Producer = require("./Producer");

const Events = sequelize.define(
  "events",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    genre: {
      type: DataTypes.ENUM(
        "Rock",
        "Reggae",
        "Hip Hop",
        "Rap",
        "Clasica",
        "Metal",
        "Reggaeton",
        "Pop",
        "Electronica",
        "Jazz",
        "Trap",
        "Otros"
      ),
      allowNull: false,
    },
    schedule: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    map: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    performerImage: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    placeImage:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);

Producer.hasMany(Events);
Events.belongsTo(Producer);

module.exports = Events;
