import { instance } from ".";
import { IMedia } from "./treatments";

export interface IDoctor {
    id: number
    attributes: {
        name: string
        description: string
        speciality: string
        image: IMedia
    }
}


export interface IDoctors {
    data: Array<IDoctor>
}

export const fetchDoctors = async (locale: string): Promise<IDoctors> => instance.get(`doctors?populate=*&locale[0]=${locale}&pagination[limit]=-1`).then(response => response.data)