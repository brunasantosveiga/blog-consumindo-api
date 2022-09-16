import React from "react";
import { useState, ChangeEvent } from "react";

type Props = {
  onAdd: (title: string, body: string) => void;
};

export const PostForm = ({ onAdd }: Props) => {
  const [addTitle, setAddTitle] = useState("");
  const [addBody, setAddBody] = useState("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddTitle(event.target.value);
  };
  const handleBodyChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBody(event.target.value);
  };
  const handleClick = async () => {
    if (addTitle && addBody) {
      onAdd(addTitle, addBody);
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <fieldset className="border-2 mb-3 p-3">
      <legend className="text-lg">Adicionar novo Post</legend>
      <input
        value={addTitle}
        onChange={handleTitleChange}
        className="block border mb-2"
        type="text"
        placeholder="Digite um título"
      />
      <textarea
        value={addBody}
        onChange={handleBodyChange}
        className="block border mb-2"
      ></textarea>
      <button className="block border px-1" onClick={handleClick}>
        Adicionar
      </button>
    </fieldset>
  );
};
