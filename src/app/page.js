import Map from "@/components/BodyContent/BodyContent";
import HomeClient from "@/components/HomeClient/HomeClient";

export async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });

  const result = await res.json();
  return result;
}

export default async function Home() {
  const data = await fetchData();

  return (
    <div>
      <HomeClient />
      <Map posts={data} />
    </div>
  );
}
