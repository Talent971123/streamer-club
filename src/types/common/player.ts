import { Teams } from "./team";

export interface Players {
    id: number
    first_name: string
    last_name: string
    image: string
    slug: string
    is_professional: boolean
    team: Teams

}