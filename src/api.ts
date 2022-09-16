import axios from "axios";

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const api = {
  getAllPosts: async () => {
    let response = await http.get(`/posts`);
    return response.data;
  },
  addNewPost: async (title: string, body: string, userId: number) => {
    let response = await http.post(`/posts`, { title, body, userId });
    return response.data;
  },
};

// Sem usar o axios:
// const BASE = "https://jsonplaceholder.typicode.com";
// export const api = {
//   getAllPosts: async () => {
//     let response = await fetch(`${BASE}/posts`);
//     return response.json();
//   },
//   addNewPost: async (title: string, body: string, userId: number) => {
//     let response = await fetch(`${BASE}/posts`, {
//       method: "POST",
//       body: JSON.stringify({ title, body, userId }), //No body coloco os dados que serão enviados e JSON.stringify vai transformar esse objeto em JSON para enviar
//       headers: {
//         "Content-Type": "application/json", //passa para a requisição que o tipo de conteúdo que estou enviando é um json
//       },
//     });
//     return response.json(); //.json() traduz json em objeto que o JS entende
//   },
// };
