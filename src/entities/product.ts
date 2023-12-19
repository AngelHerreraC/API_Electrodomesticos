import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  price!: number;

  @Column()
  category!: string;

  @Column()
  manufacturer!: string;

  @Column()
  stock!: number;

  @Column()
  unitOfMeasurement!: string;

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

  @Column()
  addendum!: string;

  @Column()
  type!: string;

  @Column()
  image!: string;
}
