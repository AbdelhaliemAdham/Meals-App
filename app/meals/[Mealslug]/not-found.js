import Link from "next/link";
import classes from "./page.module.css";
export default function NotFound() {
  return (
    <main className={classes.NotFound}>
      <h1>Not Found</h1>
      <p>Could not find this page resource</p>
      <Link href="/meals">Return to Meals Page</Link>
    </main>
  );
}
