import { userAPI } from './adapter/petitions';
import { IUser } from './contracts/IUser';
import { IUserFormValues } from './contracts/IUserFormValues';

(async () => {


    const {data:getAll} = await userAPI.getAll();

    console.log("++++++++++++ GET ALL +++++++++++++")
    console.log(getAll);
    
    
    const userId = 1;
    const {data:getOne} = await userAPI.get(userId);

    console.log("++++++++++++ GET +++++++++++++")
    console.log(getOne);

    const newUser:IUserFormValues = {
        name: "Mapache",
        job: "Fullstack"
    };
    const createdUser:IUser = await userAPI.post(newUser);
    console.log("++++++++++++ CREATE +++++++++++++")
    console.log(createdUser);

    // New User Id
    const createdUserId:number = createdUser.id!!;

    const updateUser:IUserFormValues = {
        name: "Mapache",
        job: "Android Fullstack GOD"
    };

    const updatedUser:IUser = await userAPI.put(createdUserId, updateUser);
    console.log("++++++++++++ UPDATE +++++++++++++")
    console.log(updatedUser);


    const response:any = await userAPI.delete(createdUserId);
    console.log("++++++++++++ DELETE +++++++++++++")
    console.log({response});

})();