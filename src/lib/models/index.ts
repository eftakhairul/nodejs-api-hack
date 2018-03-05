import {sequelize} from 'lib/core/sequelize';


// All of the models
import user, { UserModel } from 'lib/models/user';
import profile, { ProfileModel } from 'lib/models/profile';

export interface Database {

  user: UserModel;
  profile: ProfileModel;
  sequelize: any;

  dbTransaction(cb: any): any;
}

export const db: Database = {
  sequelize,
  user: user(sequelize),
  profile: profile(sequelize),

  dbTransaction: (cb: any) => sequelize.transaction(t => cb({ t })),
};

// tslint:disable-next-line:no-unused-expression
Object.keys(db).forEach((modelName: string) => {
  const model: any = (<any>db)[modelName];
  if ((<any>db)[modelName].associate) {
    model.associate(db);
  }
});
