import Food from "../Model/foodModel.js";


export const createFood = async (req, res) => {
  try {
    const { title, price, category, description, image } = req.body;

    
    if (!title || !price || !category || !description || !image) {
      return res.status(400).json({ message: 'All fields are required' });
    }

 
    const food = new Food({title, price, category, description, image});

 
    const savedFood = await food.save();

    res.status(201).json({
      message: 'Food item created successfully',
      data: savedFood
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating food item', error });
  }
};



export const getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();

    res.status(200).json({
      message: 'All food items retrieved successfully',
      data: foods,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving food items',
      error,
    });
  }
};



export const FoodDetails = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the food item by its ID
    const food = await Food.findById(id);

    // If no food is found, return a 404 response
    if (!food) {
      return res.status(404).json({ message: 'Food item not found' });
    }

    // Return the found food item
    res.status(200).json({
      message: 'Food item retrieved successfully',
      data: food,
    });
  } catch (error) {
    // Handle any errors during the process
    res.status(500).json({
      message: 'Error retrieving food item',
      error,
    });
  }
};




export const updateFood = async (req, res) => {
  try {
    const { id } = req.params; // Extract the food ID from the route params
    const { title, price, category, description, image } = req.body; // Get updated data from the request body

    // Find the food item by ID and update it with the new data
    const updatedFood = await Food.findByIdAndUpdate(
      id,{ title, price, category, description, image },
      { new: true, runValidators: true } // Return the updated food item and ensure validation
    );

    if (!updatedFood) {
      return res.status(404).json({ message: 'Food item not found' });
    }

    res.status(200).json({
      message: 'Food item updated successfully',
      data: updatedFood
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating food item', error });
  }
};
 



export const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the food item by ID and remove it
    const deletedFood = await Food.findByIdAndDelete(id);

    if (!deletedFood) {
      return res.status(404).json({ message: 'Food item not found' });
    }

    res.status(200).json({
      message: 'Food item deleted successfully',
      data: deletedFood
    });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting food item', error });
  }
};
