import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Equipment extends Model<Equipment> {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @Column
  name!: string;

  @Column({ allowNull: true })
  description?: string;

  @Column({ allowNull: true })
  photo?: string;
}
