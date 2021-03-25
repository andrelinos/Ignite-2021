interface RepositoryItemProps {
  repository: {
    name: string;
    owner: {
      login: string;
      avatar_url: string;
    };
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <div className="avatar">
       <img src={props.repository.owner.avatar_url} alt="Avatar usuário" />
       <p><strong>Autor: </strong>{props.repository.owner.login}</p>
      </div>

      <strong>{props.repository.name}</strong>

      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>
        Acessar repositório
          </a>
    </li>

  );
}
