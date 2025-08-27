import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Activity extends Model<Activity> {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @Column
  title!: string;

  @Column({ allowNull: true })
  description?: string;

  @Column({ defaultValue: new Date() })
  date!: Date;
}
