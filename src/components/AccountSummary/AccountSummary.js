import styles from './AccountSummary.module.scss';

const AccountSummary = () => {

  const locations = [
    { name: 'Starbucks Coffee', hour: '2:30PM', date: '17-08-2017', color: 'orange'},
    { name: 'H&M', hour: '1:00PM', date: '17-08-2017', color: 'purple'},
    { name: 'Eye Doctor', hour: '6:00PM', date: '17-08-2017', color: 'red'},
  ];

  return (
    <div className={styles.card}>
      <h2 className={styles.card__title}>Your account summary</h2>
      <div className={styles.card__content}>
        {locations.map(location => 
          <button className={styles.card__item} key={location.name} style={{backgroundColor: location.color}}>
            <div className={styles['item-data']}>
              <p className={styles['item-data-location']}>{location.name}</p>
              <p className={styles['item-data-date']}>{`${location.hour}, ${location.date}`}</p>
            </div>
            <div className={styles['item-arrow']}>
              <i className="fa fa-arrow-right"></i>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default AccountSummary;