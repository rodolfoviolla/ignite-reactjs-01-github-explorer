export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? 'default'}</strong>
      <p>{repository?.description ?? 'default'}</p>

      <a href={repository?.url ?? '#'}>
        Acessar repositório
      </a>
    </li>
  );
}