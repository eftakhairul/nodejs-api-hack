import * as Sequelize from 'sequelize';


export interface ProfileAttributes {
  id: number;
  fullName: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProfileInstance extends Sequelize.Instance<Partial<ProfileAttributes>>, ProfileAttributes {
  
}
export interface ProfileModel extends Sequelize.Model<ProfileInstance, Partial<ProfileAttributes>> { }

// tslint:disable:no-invalid-this
// tslint:disable-next-line:max-func-body-length
export default (sequelize: Sequelize.Sequelize): ProfileModel => sequelize.define<ProfileInstance, ProfileAttributes>('profile', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fullName: {
    type: Sequelize.STRING,
    validate: { notEmpty: false },
  },
  userId: {
    type: Sequelize.INTEGER,
  },
}, {
  classMethods: {
    associate(models: any) {
      models.profile.belongsTo(models.user, { foreignKey: 'userId' });
    },
  },
  paranoid: true,
});
