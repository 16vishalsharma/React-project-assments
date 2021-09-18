import*as  ActionType from './item.type'


export function addProductItem(state){
 
    return {
            type:ActionType.ADD_PRODUCT_ITEM,
            state,
        }    
}
export function removeProductItem(){
        
         return {
                 type:ActionType.REMOVE_PRODUCTS_ITEM,
                 
             }    
     }

     export function allRemoveItem(){
        
        return {
                type:ActionType.ALL_REMOVE_PRODUCTS_ITEM,
                
            }    
    }