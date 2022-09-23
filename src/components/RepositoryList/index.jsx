import React from "react";
import RepositoryItem from "../RepositoryItem";

export default function RepositoryList() {
  const repository = {
    name: "Unform",
    description: "Form in ReactJS",
    link: "https://github.com" 
  }

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>
    
      <ul>
        <RepositoryItem repository={repository} />
        
        <RepositoryItem repository={repository} />
        
        <RepositoryItem repository={repository} />
        
        <RepositoryItem repository={repository} />
        
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}