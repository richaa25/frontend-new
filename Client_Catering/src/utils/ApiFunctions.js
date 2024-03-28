import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:8080"
})

//save customer data to database
export async function createCustomer(customerData){
    try {
        const response = await api.post('/customer/saveCustomer', customerData);
        return response.data;
        
    } catch (error) {
        throw error;
    }
}

//get all breakfast data from database
export async function getAllBreakfasts(){
    try {
        const response = await api.get("/breakfast/getAll")
        return response.data
        
    } catch (error) {
        throw new Error("Error fetching customers")
    }
}

//get all Cart Breakfast Data from the database