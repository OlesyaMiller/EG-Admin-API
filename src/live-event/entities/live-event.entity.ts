import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class LiveEvent {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 250})
    title: string;

    @Column({length: 250})
    url: string;

    @Column()
    code: string;

    @Column()
    notes: string;

    @Column({unique: false, nullable: false})
    dateEnds: Date;

    @Column({unique: false, nullable: false})
    dateStarts: Date;

    @CreateDateColumn()
    dateCreated: Date;

    @UpdateDateColumn()
    dateUpdated: Date;

    @DeleteDateColumn()
    dateDeleted: Date;
    
}
