import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  description!: string;

  @Column()
  clientName!: string;

  @Column()
  totalPrice!: number;

  @Column()
  totalProducts!: number;

  @CreateDateColumn()
  createDate!: Date;

  @Column()
  createdByUserID!: number;

  @UpdateDateColumn()
  updateDate!: Date;

  @Column()
  updatedByUserID!: number;

  @Column("boolean", { default: false })
  active!: boolean;
}
