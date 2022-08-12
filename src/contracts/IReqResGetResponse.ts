import { IUser } from './IUser';

export interface IReqResGetResponse {
    page?:        number;
    per_page?:    number;
    total?:       number;
    total_pages?: number;
    data:        IUser[]|IUser;
    support?:     Support;
}

export interface Support {
    url:  string;
    text: string;
}
