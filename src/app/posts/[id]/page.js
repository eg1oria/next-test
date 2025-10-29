import Post from "@/components/Post";

export async function generateMetadata(props) {
  const { id } = await props.params;
  const post = await fetchData(id);
  return {
    title: post.title,
    description: post.body,
  };
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts.map((p) => ({ id: p.id.toString() }));
}

export async function fetchData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Ошибка при загрузке поста");

  return res.json();
}

export default async function PostPage(props) {
  const { id } = await props.params;
  const post = await fetchData(id);
  return <Post post={post} />;
}
