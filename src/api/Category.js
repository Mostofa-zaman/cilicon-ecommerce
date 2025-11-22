import  instance  from "./axios";


const getCategory = async ()=>{
    try {
     
        const { data , status ,statusText} = await instance.get ('/products/category-list')
     
       return  {data , status ,statusText}
        
    } catch (error) {
        console.error("category network request failed ", error);
        
    }
} 
export { getCategory };