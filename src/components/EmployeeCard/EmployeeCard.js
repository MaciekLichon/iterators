import styles from './EmployeeCard.module.scss';

const EmployeeCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <div className={styles.card__personal}>
          <div className={styles['card__personal-picture']}>
            <img src={`${process.env.PUBLIC_URL}/images/image.jpeg`} alt='profile picture' className={styles['personal-image']}/>
          </div>
          <p className={styles['card__personal-name']}>Monica Doe</p>
        </div>
        <div className={styles.card__role}>
          <div className={styles['card__role-elem']}>
            <p className={styles['elem-title']}>Position</p>
            <p className={styles['elem-name']}>Front-end developer</p>
          </div>
          <div className={styles['card__role-elem']}>
            <p className={styles['elem-title']}>Company</p>
            <p className={styles['elem-name']}>Adobe</p>
          </div>
        </div>
        <div className={styles.card__id}>
          <p className={styles.id}>Employee #: 2901346</p>
        </div>
      </div>
      <div className={styles.card__options}>
        <button className={styles['options-add']}>
          <i className="fa fa-plus"></i>
        </button>

        <div className={styles['options-more']}>
          <div className={styles['options-more-handler']}>
            <i className="fa fa-ellipsis-h"></i>
          </div>
          <div className={styles['options-additional']}>
            <i className="fa fa-clone"></i>
            <i className="fa fa-paper-plane"></i>
            <i className="fa fa-cog"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;