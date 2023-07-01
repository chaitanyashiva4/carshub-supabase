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
        console.log("hi hi hi")
        const allCars = await getCarsBySearch(model, make); 
        return allCars; 
        
    } 
    if(fuel || year){ 
        console.log("Fuel:",fuel,year)
        const allCars = await getCarsByFilters(fuel, year); 
        return allCars; 
    } 
 
    const { data, error } = await supabase 
    .from('cars') 
    .select('*') 
 
    if(error){ 
        console.log("error=========>",error) 
    } 
console.log("data======>",data) 
    return (data as any) || []; 
 
} 
 
export default getCars;