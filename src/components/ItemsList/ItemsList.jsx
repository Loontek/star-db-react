import styles from './ItemsList.module.scss';

const ItemsList = () => {
    return (
    <ul className={styles.ItemsList}>
      <li className={styles.item}>Luke Skywaker</li>
      <li className={styles.item}>R2-D2</li>
      <li className={styles.item}>C3-PO</li>
      <li className={styles.item}>Darth Vaider</li>
    </ul>
  )
}

export default ItemsList;