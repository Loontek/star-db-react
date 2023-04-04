import styles from './Navigation.module.scss';

const Navigation = () => {
    const links = ['characters', 'planets', 'starships']

    return (
    <nav className={styles.Navigation}>
      <ul className={styles.list}>
        {links.map((link,i) => (
          <li key={i} className={styles.item}>
            <a className={styles.link} href='#'>{link[0].toUpperCase()+link.slice(1)}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation;