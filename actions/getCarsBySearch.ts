import { Car } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"
import getCars from "./getCars";
import getCarsByFilters from "./getCarsByFilters";

const getCarsBySearch = async (model: string, make: string): Promise<Car[]> => {

    const supabase = createServerComponentClient({
        cookies: cookies
    })


  

   

    const { data, error } = await supabase
    .from('cars')
    .select('*')
    .ilike('model', `%${model}%`)
    .ilike('make', `%${make}%`)

    if(error){
        console.log("error=========>",error)
    }
    return (data as any) || [];

}

export default getCarsBySearch;