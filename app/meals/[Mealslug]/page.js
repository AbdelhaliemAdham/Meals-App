import Image from "next/image";
import React from "react";
import classes from "./page.module.css";
import { getMeal } from "@/app/lib/meals";
import { notFound } from "next/navigation";

export function generateMetadata({ params }) {
  const meal = getMeal(params.Mealslug);
  if (!meal) {
    notFound();
  }
  return {
    title: meal.title,
  };
}

export default function MealDetails({ params }) {
  const meal = getMeal(params.Mealslug);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}