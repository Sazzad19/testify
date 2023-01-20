module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    'Question',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      AssessmentId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Assessments',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      question: {
        allowNull: false,
        type: DataTypes.STRING
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING
      },
      options: {
        type: DataTypes.JSON
      },
      rightAnswer: {
        type: DataTypes.STRING
      },
      mark: {
        type: DataTypes.INTEGER
      },
      negativeMark: {
        type: DataTypes.INTEGER
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

  Question.associate = models => {
    Question.belongsTo(models.Assessment, { onDelete: 'cascade', onUpdate: 'cascade' })
  }

  return Question;
}
