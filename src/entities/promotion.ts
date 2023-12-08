import {
  Entity,
  Column
} from "typeorm";

@Entity()
export class Promotion {
  @Column()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  price!: number;

  @Column()
  startDate!: Date;

  @Column()
  endDate!: Date;

  @Column("boolean", { default: false })
  active!: boolean;

  @Column()
  addendum!: string;

  @Column()
  region!: string;
}
