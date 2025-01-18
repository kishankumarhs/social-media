import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: true })
  profile_pic: string;

  @Column(() => Date)
  dob: Date;

  @Column()
  password: string;
}
