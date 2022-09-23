import React from "react";

export default function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Default'}</strong>
      <p>Forms in ReactJS</p>

      <a href={props.repository?.link}>Acessar Repositorio</a>
    </li>
  );
}
