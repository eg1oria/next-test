import HomeClient from "@/components/HomeClient";
import ProgressBar from "./progress/ProgressBar";

export async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 0 } })
  const result = await res.json()
  return result
}
export default async function Home() {
  return (
   <div className="">
    <HomeClient />
    <ProgressBar />
   </div>
  );
}
