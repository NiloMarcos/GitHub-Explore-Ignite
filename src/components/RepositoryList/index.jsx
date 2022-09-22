import React from "react";
import RepositoryItem from "../RepositoryItem";

export default function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>
    
      <ul>
        <RepositoryItem title="Unform-1" />
        <RepositoryItem title="Unform-2" />
        <RepositoryItem title="Unform-3" />
        <RepositoryItem title="Unform-4" />
        <RepositoryItem title="Unform-5" />
      </ul>
    </section>
  )
}