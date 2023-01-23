module.exports = (sequelize, DataTypes) => {
  const Assessment = sequelize.define(
    'Assessment',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      UserId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      totalMarks: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      class: {
        allowNull: false,
        type: DataTypes.STRING
      },
      subject: {
        allowNull: false,
        type: DataTypes.STRING
      },
      timeLimit: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {}
  )

  Assessment.associate = models => {
    Assessment.hasMany(models.Submission, { onDelete: 'cascade', onUpdate: 'cascade' })
    Assessment.belongsTo(models.User, { onDelete: 'cascade', onUpdate: 'cascade' })
    Assessment.hasMany(models.Question, { onDelete: 'cascade', onUpdate: 'cascade' })
  }

  return Assessment;
}
