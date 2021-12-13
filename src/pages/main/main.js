import TableHome from "../../components/table-home/table-home";
import styles from "./main.module.css";
const MainPage = () => {
    return (
        <div className={styles.mainContainer}>
            <p className={styles.testTitle}>Teravin test React.js</p>
            <TableHome />
        </div>
    );
};

export default MainPage;
