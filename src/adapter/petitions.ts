
import { IUser } from '../contracts/IUser';
import { IUserFormValues } from '../contracts/IUserFormValues';

import { requestMapAxios, requestMapFetch } from './agent';
import { IReqResGetResponse } from '../contracts/IReqResGetResponse';

export const userAPI = {

    post: ( userData: IUserFormValues ): Promise<IUser> => requestMapFetch.post('/users/', userData),

    get: (userId: number): Promise<IReqResGetResponse> => requestMapFetch.get(`/users/${userId}`),

    getAll: (): Promise<IReqResGetResponse> => requestMapFetch.get('/users/'),

    put: (userId: number, userData: IUserFormValues ):Promise<IUser> => requestMapFetch.put(`/users/${userId}`, userData),
    
    delete: (userId: number ):Promise<void> => requestMapFetch.delete(`/users/${userId}`)
}

