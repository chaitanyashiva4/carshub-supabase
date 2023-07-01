import { Car } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"
import getCars from "./getCars";

const getCarsByFilters = async (fuel: string, year: number): Promise<Car[]> => {

    const supabase = createServerComponentClient({
        cookies: cookies
    })

    
    const { data, error } = await supabase
    .from('cars')
    .select('*')
    .ilike('fuel', `%${fuel}%`)
    .ilike('year', `%${year}%`)

    if(error){
        console.log("error=========>",error)
    }
console.log("data======>",data)
    return (data as any) || [];

}

export default getCarsByFilters;