import {createContext,useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [items,setItems] = useState([]);
    const addItem = (item) =>{
        let newItem = [];
        const exist = items.map(itm => {
            return  itm.title === item.title;
        })
        if(exist){
            newItem = items;
            newItem.push({title:item.title,price:item.price,Qty:items.Qty+1})
            setItems(newItem);
        }else{
            newItem.push({title:item.title,price:item.price,Qty:item.Qty})
            setItems(newItem);
        }
        console.log(exist,items)
    }

    const removeItem = (index,item) =>{
        console.log(item, index);
        let newItem = items;
        // const exist = items.filter(itm => {
        //     return  itm.title === item;
        // })
        // console.log(exist)
        if(items.length > -1){
            newItem = [... items];
            newItem.splice(index,1);
            console.log("after",newItem)
        }
        console.log(newItem)
        setItems(newItem);
    }
    
    return(
        <CartContext.Provider value={{items,addItem,removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext,CartProvider}