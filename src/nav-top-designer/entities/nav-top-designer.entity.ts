import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
    UpdateDateColumn
} from "typeorm";
import {Image} from '../../image/entities/image.entity';

@Entity()
export class NavTopDesigner {

    @PrimaryColumn({length: 32})
    sellerId: string;

    @ManyToOne(() => Image, {eager: true})
    @JoinColumn([{name: "imageId", referencedColumnName: "id"}])
    image: Image ;

    @CreateDateColumn()
    dateCreated: Date;

    @UpdateDateColumn()
    dateUpdated: Date;

    @DeleteDateColumn()
    dateDeleted: Date;
    
}
