import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  IsEmail,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @IsEmail
  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  password: string;
  @Column({ defaultValue: true })
  isActive: boolean;
}
