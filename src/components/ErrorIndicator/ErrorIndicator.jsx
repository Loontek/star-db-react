import styles from './ErrorIndicator.module.scss';
import img from '../../assets/img/error.svg';

const ErrorIndicator = () => {
  return (
    <div className={styles.ErrorIndicator}>
      <img className={styles.img} src={img} alt='Death Star'/>
      <span className={styles.description}>Oops... Death Star destroyed your planet</span>
    </div>
  )
}

export default ErrorIndicator;