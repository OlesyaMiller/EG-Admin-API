import { Column, Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity()
export class NavRecommendedDesigner {

    @PrimaryColumn({length: 32})
    sellerId: string;

    @Column({length: 32})
    name: string;

    @CreateDateColumn() 
    dateCreated: Date;

    @UpdateDateColumn()
    dateUpdated: Date;

    @DeleteDateColumn()
    dateDeleted: Date;
    
}
