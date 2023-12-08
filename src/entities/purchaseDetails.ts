import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class PurchaseDetail {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  productID!: number;

  @Column()
  purchaseID!: number;

  @Column()
  totalPrice!: number;

  @Column()
  totalProducts!: number;

  @Column()
  createdByUserID!: number;

  @CreateDateColumn()
  createDate!: Date;
}
