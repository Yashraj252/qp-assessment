import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class GroceryItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column('float')
  price!: number;

  @Column()
  quantity!: number;
}
