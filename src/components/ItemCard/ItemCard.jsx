import styles from './ItemCard.module.scss';
import img from '../../assets/img/31.jpg';

const ItemCard = () => {
    return (
    <article className={styles.ItemCard}>
      <img className={styles.img} src={img}/>
      <div className={styles.content}>
        <h2 className={styles.title}>
          R2-D2
        </h2>
        <ul className={styles.featuresList}>
          <li className={styles.feature}>Gender: </li>
          <li className={styles.feature}>Birth year: </li>
          <li className={styles.feature}>Eye color: </li>
        </ul>
      </div>
    </article>
  )
}

export default ItemCard;