import*as actionType from "./item.type"
// import { combineReducers } from 'redux';

const initialState={
           
    items:[
       
    
    ]
}


const checkoutReducer=(state=initialState,action)=>{



    switch (action.type) {
        case actionType.ADD_PRODUCT_ITEM:
      
            const newArticle=  {
                firstname: action.state.firstname,
                lastname: action.state.lastname,
                pincode: action.state.pincode
               

            }
            
         
            return {
                ...state,

                    items:  state.items.concat(newArticle)
                }


                case actionType.REMOVE_PRODUCTS_ITEM:
                   
                    
                      return {
                          ...state,
          
                              items:  []
                          }
           
            default:
                
                return state
            }
        }   
    
    export default checkoutReducer; 