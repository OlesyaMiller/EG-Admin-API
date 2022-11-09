import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity, JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Image} from '../../image/entities/image.entity';

@Entity()
export class ExploreCategory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 32})
    category: string;

    @ManyToOne(() => Image, {eager: true})
    @JoinColumn([{name: "imageId", referencedColumnName: "id"}])
    image: Image;

    @CreateDateColumn()
    dateCreated: Date;

    @UpdateDateColumn()
    dateUpdated: Date;

    @DeleteDateColumn()
    dateDeleted: Date;

}
