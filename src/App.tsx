import { useEffect, useState } from "react";
import { Post } from "./types/Posts";
import { PostItem } from "./components/PostItem";
import { PostForm } from "./components/PostForm";
import { api } from "./api";

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    let requisitionOne = await api.getAllPosts();
    setLoading(false);
    setPosts(requisitionOne);
  };

  const handleAddPost = async (title: string, body: string) => {
    let requisitionTwo = await api.addNewPost(title, body, 1);
    if (requisitionTwo.id) {
      alert("Post adicionado");
    } else {
      alert("Erro!!!");
    }
  };

  return (
    <div className="p-5">
      {loading && <div>Carregando...</div>}

      <PostForm onAdd={handleAddPost} />

      {!loading && posts.length > 0 && (
        <>
          <div className="mb-3">Total de Posts: {posts.length}</div>
          <div>
            {posts.map((item) => (
              <PostItem data={item} />
            ))}
          </div>
        </>
      )}

      {!loading && posts.length === 0 && <div>Tente novamente mais tarde.</div>}
    </div>
  );
  /*O componente PostForm recebe uma prop que é resultado de uma função, já o componente PostItem recebe um
  parâmetro do map como prop, ou seja, em ambos estou usando código JS como prop. Quando quero passar só uma
  string como prop basta usar "" ao invés de {}*/
};

export default App;
