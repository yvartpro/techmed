import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column
  fullname!: string;

  @Column({ allowNull: true })
  phone?: string;
}
