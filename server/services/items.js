const Items = require("../models/item");

class ItemsServices {
  static async getAllItems() {
    try {
      return await Items.find();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getItemById(id) {
    try {
      const item = await Items.findById(id);
      if (!item) {
        throw new Error("no items");
      }
      return item;
    } catch (error) {}
  }

  static async createItem(itemData){
    const {title,category,price,thumbnail,images,brand,description} = itemData
    const item = new Items({
        title,
        category,
        price,
        thumbnail,
        images,
        brand,
        description
    })

    try {
        return await item.save()
    } catch (error) {
        throw new Error(error.message)
    }
  }


  static async updateItem(id,updateData){
    try {
        const item = await Items.findById(id)
        if(!item){
            throw new Error('no item')
        }
        const updates = ['title', 'category', 'price', 'thumbnail', 'images', 'brand', 'description','rating'];
        updates.forEach(elem => {
            if(updateData[elem] != null){
                item[elem] = updateData[elem]
            }
        })
        const updatedItem = await item.save();
        return updatedItem

    } catch (error) {
        throw new Error(error.message)
    }
  }

  static async deleteItem(id){
    try {
        const item = await Items.findById(id)
        if(!item){
            throw new Error('no item')
        }
        await item.deleteOne()
        return item;
    } catch (error) {
        throw new Error(error.message)

    }
  }
}


module.exports = ItemsServices;