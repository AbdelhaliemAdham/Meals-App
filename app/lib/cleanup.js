import sql from "better-sqlite3";
import fs from "node:fs";

const db = sql("meals.db");

// Function to validate meal data
function isValidMeal(meal) {
  return (
    meal.title &&
    meal.slug &&
    meal.instructions &&
    meal.image &&
    fs.existsSync(`public/${meal.image}`)
  );
}

// Get all meals
const meals = db.prepare("SELECT * FROM meals").all();

// Iterate through meals and clean up invalid data
meals.forEach((meal) => {
  if (!isValidMeal(meal)) {
    console.log(`Invalid meal found: ${meal.id}, deleting...`);
    // Delete the image file associated with the meal if it exists
    const imagePath = `public/${meal.image}`;
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
    // Delete the meal from the database
    db.prepare("DELETE FROM meals WHERE id = ?").run(meal.id);
  }
});

console.log("Cleanup completed.");
