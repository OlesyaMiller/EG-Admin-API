import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Image {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    filename: string;

    @Column()
    filenameOriginal: string;

    @Column()
    size: number;

    @Column()
    mimeType: string;

    @Column()
    encoding: string;

    @Column()
    width: number;

    @Column()
    height: number;

    @CreateDateColumn()
    dateCreated: Date;

    @UpdateDateColumn()
    dateUpdated: Date;

    @DeleteDateColumn()
    dateDeleted: Date;

}
