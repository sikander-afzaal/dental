import { instance } from ".";

export interface ITreatment {
    id: number
    attributes: {
        name: string
        Questions: Array<IQuestion>
        cta: string
        cta_description: string
        cta_images: {
            data: Array<{
                attributes: {
                    url: string

                }
            }>
        }
        cta_title: string
        description: string
        main_image: IMedia
        phone: string
        title: string
        localizations: {
            data: Array<ITreatment>
        }
        locale: string
    }
}

export interface IQuestion {
    id: number
    title: string
    answer: string
}

export interface IMedia {

    data: {
        attributes: {
            url: string

        }
    }

}

export interface ITreatments {
    data: Array<ITreatment>
}


export const fetchTreatments = async (locale: string): Promise<ITreatments> => await instance.get(`treatments?locale[0]=${locale}&pagination[limit]=-1&populate=*`).then(response => response.data)
export const fetchTreatment = async (id: number, locale: string): Promise<{ data: ITreatment }> => await instance.get(`treatments/${id}?populate=*&locale[0]=${locale}`).then(response => response.data)
