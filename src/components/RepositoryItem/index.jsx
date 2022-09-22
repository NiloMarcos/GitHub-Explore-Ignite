import React from "react";

export default function RepositoryItem({ title }) {
  return (
    <li>
      <strong>{title}</strong>
      <p>Forms in ReactJS</p>

      <a href="#">Acessar Repositorio</a>
    </li>
  );
}
