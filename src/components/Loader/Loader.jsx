import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Loader.module.scss';

const Loader = ({ isLoading }) => {
  const [showLoader, setShowLoader] = useState(false);
  
  useEffect(()=> {
    if(isLoading) {
      setShowLoader(true);
      return;
    }
    setShowLoader(false);
  },[isLoading])

  return (
    <>
    <CSSTransition
      in={showLoader}
      timeout={300}
      classNames={{
        appear: styles.LoaderAppear,
        appearActive: styles.LoaderAppearActive,
        enter: styles.LoaderEnter,
        enterActive: styles.LoaderEnterActive,
        enterDone: styles.LoaderEnterDone,
        exit: styles.LoaderExit,
        exitActive: styles.LoaderExitActive,
        exitDone: styles.LoaderExitDone
      }}
      appear={true}
      mountOnEnter
      unmountOnExit
    >
      <div className={styles.Loader}></div>
    </CSSTransition>
    </>
  )
}

export default Loader;