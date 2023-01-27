module.exports = (sequelize, DataTypes) => {
  const Submission = sequelize.define(
    'Submission',
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
      obtainedMarks: {
        type: DataTypes.INTEGER
      },
      answers: {
        allowNull: false,
        type: DataTypes.JSON,
        get () {
          return JSON.parse(this.getDataValue('answers'))
        },
        set (value) {
          return this.setDataValue('answers', JSON.stringify(value))
        }
      },
      justified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
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

  Submission.associate = models => {
    Submission.belongsTo(models.Assessment, { onDelete: 'cascade', onUpdate: 'cascade' })
    Submission.belongsTo(models.User, { onDelete: 'cascade', onUpdate: 'cascade' })
  }

  return Submission;
}
