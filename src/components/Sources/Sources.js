import styles from './Sources.module.scss';

const Sources = () => {
  return (
    <div className={styles.sources}>
      <h3 className={styles.sources__title}>Designs:</h3> 
      <a href="https://www.dropbox.com/s/9vhz9dgaoh28keq/UI_Kit_Widgets.zip?file_subpath=%2FUI_Kit_Widgets%2FAccount_Summary.png" target="_blank" className={styles.sources__link}>
        Account_Summary.png
      </a>
      <a href="https://www.dropbox.com/s/9vhz9dgaoh28keq/UI_Kit_Widgets.zip?file_subpath=%2FUI_Kit_Widgets%2FAdd_Profile_Card.png" target="_blank" className={styles.sources__link}>
        Add_Profile_Card.png
      </a>
    </div>
  );
};

export default Sources; 