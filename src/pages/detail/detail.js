import styles from "./detail.module.css";
import { useParams } from "react-router-dom";
import back from "./babck.png";
import { Link } from "react-router-dom";
const Detail = () => {
    let { id } = useParams();
    let local = JSON.parse(localStorage.getItem("teravin"));

    return (
        <div className={styles.detailContainer}>
            <header>
                <Link to={`/`} style={{ textDecoration: "none" }}>
                    <div className={styles.backBox}>
                        <img src={back} alt="back" />
                        <p>kembali</p>
                    </div>
                </Link>
            </header>
            <div className={styles.headerBox}>
                <p className={styles.namaHeader}>{local[id].namaLengkap} </p>
            </div>

            <div className={styles.detailBox}>
                <div className={styles.dataPersonal}>
                    <div className={styles.dataPersonalDetail}>
                        <p>Nama :</p> <p>{local[id].namaLengkap}</p>
                    </div>
                    <div className={styles.dataPersonalDetail}>
                        <p>Email :</p> <p>{local[id].email}</p>
                    </div>
                    <div className={styles.dataPersonalDetail}>
                        <p>Nomor Telepon :</p> <p>{local[id].telepon}</p>
                    </div>
                    <div className={styles.dataPersonalDetail}>
                        <p>Alamat :</p> <p>{local[id].alamat}</p>
                    </div>
                    <div className={styles.dataPersonalDetail}>
                        <p>Link Github/Gitlab :</p> <p>{local[id].repo}</p>
                    </div>
                </div>
                <div className={styles.dataPendidikan}>
                    <div className={styles.pendidikanHeader}>
                        <p>Riwayat Pendidikan</p>
                    </div>
                    {local[id].riwayatPendidikan.map((e, i) => (
                        <div key={i} className={styles.dataPendidikanDetail}>
                            <p>{e.namaSekolah}</p>
                            <p>
                                {e.tahunMasuk}-{e.tahunLulus}
                            </p>
                        </div>
                    ))}
                </div>
                <div className={styles.dataPendidikan}>
                    <div className={styles.pendidikanHeader}>
                        <p>Pengalaman Kerja</p>
                    </div>
                    {local[id].pengalamanKerja.map((e, i) => (
                        <div key={i} className={styles.dataPendidikanDetail}>
                            <p>{e.namaPerusahaan}</p>
                            <p>{e.roleKerja}</p>
                            <p>
                                {e.tahunMasuk}-{e.tahunSelesai}
                            </p>
                        </div>
                    ))}
                </div>
                <div className={styles.dataSkillsContainer}>
                    <div className={styles.pendidikanHeader}>
                        <p>Skills</p>
                    </div>
                    {local[id].skills.map((e) => (
                        <div key={e.id} className={styles.dataSkills}>
                            <p>{e.skillName}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Detail;
