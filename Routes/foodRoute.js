import { createFood, deleteFood, FoodDetails, getAllFoods, updateFood } from "../Controller/foodController.js";
import express from 'express'
const foodRouter = express.Router();

foodRouter.post("/create-Food" , createFood)
foodRouter.get("/get-all-food" , getAllFoods)
foodRouter.get("/food-detail/:id" , FoodDetails)
foodRouter.put("/update-food/:id" , updateFood)
foodRouter.delete("/delete-food/:id" , deleteFood)

export default foodRouter