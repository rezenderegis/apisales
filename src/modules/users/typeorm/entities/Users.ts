import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Exclude,Expose } from 'class-transformer';

@Entity('users')
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    @Exclude()
    password: string;

    
   @Column()
   avatar: string;
   
   
   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;

    //name: Just chose the name
   @Expose({name: 'avatar_url'})
   /* reate a method to execute transform
    The name getAvatarUrl is a pattern of method. 
    Just included get (avatar_url) upper case A and remove _ with upper 
    case U.
   */
   getAvatarUrl(): string | null {
       if (!this.avatar) {
        //Check if exist avatar
        return null;
       }
       //Return the url
       return `${process.env.APP_API_URL}/files/${this.avatar}`;
   }

}

export default User;