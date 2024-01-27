
let { lists } = require('../data')

const getAllItems = (req,res)=>{
    res.status(200).json({success:true,data:lists})
} 
const getSingleItem = (req,res)=>{
    const { specItem } = req.params

    const reqItem = lists.filter((item)=> item.type === specItem)
    res.status(200).json({success:true, data:reqItem})
}
const createItem = (req,res)=>{
    const {name, price} = req.body
    
    lists.find((list)=>{
        if (list.type === name && list.price === Number(price)){
           return res.status(404).send('soory can not add an item that alredy exists!!')
        }
        else{
        const appendOne = {
            type:name,
            price:Number(price) 
        }
        lists.unshift(appendOne)
        return res.status(200).send('added successfully!!')
        }
    })   
}
const updateItem = (req,res)=>{
    const {updateItem} = req.params
    const { newName, newPrice } = req.body

    let change = 0

    newList = lists.map((list)=>{
        if(list.type === updateItem){
            list.type = newName
            list.price = Number(newPrice)
            change = 1
            // if(newName && newPrice){
            //     list.type = newName
            //     list.price = Number(newPrice)
            //     change = 1
            // }
            // else if(newName && !newPrice){
            //     list.type = newName
            //     change = 1
            // }
            // else if(!newName && newPrice){
            //     list.price = Number(newPrice)
            //     change = 1
            // }
            // else{
            //     change = -1
            // }
            
        }
        else{
            return list
        }
    })
    if(change === 1){
        lists = newList
        res.status(200).send(`${updateItem} updated successfully!!`)
    }
    if(change === -1){
        res.status(404).send(`plese provide the new data to update.`)
    }
    else{
        res.status(404).send(`can not find: ${updateItem} in the lists`)
    }

}
const deletItem =  (req,res)=>{
    const { deletItem } = req.params

    lists = lists.filter((list)=> list.type !== deletItem)
    
    res.status(200).send('deleted successfully!!')
}

module.exports = {getAllItems, getSingleItem, createItem, updateItem, deletItem}