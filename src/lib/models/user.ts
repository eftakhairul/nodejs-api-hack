import * as Sequelize from 'sequelize';

/**
 * class containing all roles to facilitate accessing them
 */
export enum Role {
  SUPER = "super",
  OWNER = "owner",
  ADMIN = "admin",
  DEVELOPER = "developer",
  TEAM_MEMBER = "team-member",
  READ_ONLY = "read-only",
  IFRAME = "iframe",
  PUBLIC = "public",
}

export interface UserAttributes {
  id: number;
  email: string;
  password: string;
  role: Role;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserInstance extends Sequelize.Instance<Partial<UserAttributes>>, UserAttributes {
  validPassword(password: string): boolean;
}
export interface UserModel extends Sequelize.Model<UserInstance, Partial<UserAttributes>> { }

// tslint:disable:no-invalid-this
// tslint:disable-next-line:max-func-body-length
export default (sequelize: Sequelize.Sequelize): UserModel => sequelize.define<UserInstance, UserAttributes>('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: Sequelize.STRING,
    validate: { notEmpty: true },
  },
  password: {
    type: Sequelize.STRING,
    validate: { min: 6 },
  },
  role: {
    type: Sequelize.STRING,
    validate: { isIn: [[
      Role.SUPER,
      Role.OWNER,
      Role.ADMIN,
      Role.DEVELOPER,
      Role.TEAM_MEMBER,
      Role.READ_ONLY,
    ]] },
  },
  name: {
    type: Sequelize.STRING,
  },
}, {
  instanceMethods: {
    validPassword(password: string) {
      return password === this.password;
    },
  },
  paranoid: true,
});
