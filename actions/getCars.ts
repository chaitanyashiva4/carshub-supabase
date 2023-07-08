import { Car } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"
import getCarsBySearch from "./getCarsBySearch";
import getCarsByFilters from "./getCarsByFilters";

const getCars = async (model: string, make: string, fuel: string, year: number): Promise<Car[]> => {

    const supabase = createServerComponentClient({
        cookies: cookies
    })

    if (model || make) {
        const allCars = await getCarsBySearch(model, make);
        return allCars;
    }
    if(fuel || year){
        if(fuel || !year){
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
        if(year || !fuel)
        {
            const { data, error } = await supabase
            .from('cars')
            .select('*')
            .ilike('year', `%${year}%`)
            if(error){
                console.log("error=========>",error)
            }
        console.log("data======>",data)
            return (data as any) || [];
        }
        const allCars = await getCarsByFilters(fuel, year);
        return allCars;
    }

    const { data, error } = await supabase
    .from('cars')
    .select('*')

    if(error){
        console.log("error=========>",error)
    }

    return (data as any) || [];

}

export default getCars;