import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class SellerProduct {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({length: 32})
    sellerId: string;

    @Column({length: 32})
    productId: string;

    @CreateDateColumn()
    dateCreated: Date;

    @UpdateDateColumn()
    dateUpdated: Date;

    @DeleteDateColumn()
    dateDeleted: Date;
    
}
