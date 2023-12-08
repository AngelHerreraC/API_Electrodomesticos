
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  //@Column("boolean", {default: false})
  @Column()
  password!: string;

  @CreateDateColumn()
  createDate!: Date;

  @UpdateDateColumn()
  updateDate!: Date;

  @Column()
  updateUserID!: number;

  @Column("boolean", {default: false})
  active!: boolean;

  @Column()
  alias!: string;

  @Column()
  phoneNumber!: string;

  
}