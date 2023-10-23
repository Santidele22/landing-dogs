const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("Dog", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.JSONB,
      allowNull: false,
    },

    weight: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    yearsOfLife: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
  },
  {
    timestamps: true
}
  );
};
