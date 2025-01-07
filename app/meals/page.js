import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "./meals-components/meals-grid";
import { getMeals } from "../lib/meals";
// import MealItem from "../meals-components/meal-item";

export function Meals() {
  const meals = getMeals();

  return <MealsGrid meals={meals} />;
}
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          {" "}
          Delicious Meals, created{" "}
          <span className={classes.highlight}>By me</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>loading...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
