import { EntityRepository, Repository } from "typeorm";
import User from "../entities/Users";
import UserToken from "../entities/UserToken";

@EntityRepository(UserToken)
class UserTokensRepository extends Repository<UserToken> {
    public async findByToken(token: string): Promise<UserToken | undefined> {

        const userToken = await this.findOne({
                where: {
                    token,
                }
            });

            return userToken;

        }

        //Create token
        public async generate (user_id: string): Promise<UserToken | undefined> {
          const userToken = await this.create({
            user_id,
          }) ; 

          await this.save(userToken);

            return userToken;
        }

}



export default UserTokensRepository;
