import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ExploreProduct {

    @PrimaryColumn({length: 255})
    productId: string;

    @Column({length: 255})
    name: string;

    @CreateDateColumn()
    dateCreated: Date;

    @UpdateDateColumn()
    dateUpdated: Date;

    @DeleteDateColumn()
    dateDeleted: Date;

}
