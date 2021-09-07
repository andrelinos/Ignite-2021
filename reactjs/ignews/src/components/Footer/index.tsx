import styles from './styles.module.scss';

export function Footer() {
  return (
    <div className={styles.container}>
      <span>
        Ignews - Todos os direitos reservados. |{' '}
        <a href="">POLÍTICA DE PRIVACIDADE</a>
      </span>
      <span>
        Desenvolvido por{' '}
        <a
          href="http://andrelino.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Andrelino Silva
        </a>
      </span>
    </div>
  );
}
