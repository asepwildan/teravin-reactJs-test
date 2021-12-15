import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./preview.module.css";
const Preview = () => {
    const {
        namaLengkap,
        email,
        telepon,
        alamat,
        repo,
        riwayatPendidikan,
        pengalamanKerja,
        skills,
    } = useSelector((state) => state.getPersonalDataReducer);

    const itemList = JSON.parse(localStorage.getItem("teravin"));
    let [arrLocal, setArrLocal] = useState(itemList);

    const [newArr, setNewArr] = useState({
        namaLengkap: namaLengkap,
        email: email,
        telepon: telepon,
        alamat: alamat,
        repo: repo,
        riwayatPendidikan: riwayatPendidikan,
        pengalamanKerja: pengalamanKerja,
        skills: skills,
    });

    useEffect(() => {
        if (itemList === null) {
            return;
        } else {
            setArrLocal([...arrLocal, newArr]);
        }
    }, [newArr]);

    const saveLocal = () => {
        if (itemList === null) {
            let newArr2 = [newArr];
            localStorage.setItem("teravin", JSON.stringify(newArr2));
        } else {
            localStorage.setItem("teravin", JSON.stringify(arrLocal));
        }
        window.location = "/";
    };

    return (
        <div className={styles.previewContainer}>
            <div className={styles.detailBox}>
                <div className={styles.headerPreview}>
                    <p className={styles.previewTitle}>PREVIEW</p>
                    <button className={styles.buttonSave} onClick={saveLocal}>
                        save
                    </button>
                </div>

                <div className={styles.dataPersonal}>
                    <div className={styles.dataPersonalDetail}>
                        <p>Nama :</p> <p>{namaLengkap}</p>
                    </div>
                    <div className={styles.dataPersonalDetail}>
                        <p>Email :</p> <p>{email}</p>
                    </div>
                    <div className={styles.dataPersonalDetail}>
                        <p>Nomor Telepon :</p> <p>{telepon}</p>
                    </div>
                    <div className={styles.dataPersonalDetail}>
                        <p>Alamat :</p> <p>{alamat}</p>
                    </div>
                    <div className={styles.dataPersonalDetail}>
                        <p>Link Github/Gitlab :</p> <p>{repo}</p>
                    </div>
                </div>
                <div className={styles.dataPendidikan}>
                    <div className={styles.pendidikanHeader}>
                        <p>Riwayat Pendidikan</p>
                    </div>
                    {riwayatPendidikan.map((detail, i) => (
                        <div key={i} className={styles.dataPendidikanDetail}>
                            <p>{detail.namaSekolah}</p>
                            <p>
                                {detail.tahunMasuk}-{detail.tahunLulus}
                            </p>
                        </div>
                    ))}
                </div>
                <div className={styles.dataPendidikan}>
                    <div className={styles.pendidikanHeader}>
                        <p>Pengalaman Kerja</p>
                    </div>
                    {pengalamanKerja.map((detail, i) => (
                        <div key={i} className={styles.dataPendidikanDetail}>
                            <p>{detail.namaPerusahaan}</p>
                            <p>{detail.roleKerja}</p>
                            <p>
                                {detail.tahunMasuk}- {detail.tahunSelesai}
                            </p>
                        </div>
                    ))}
                </div>
                <div className={styles.dataSkillsContainer}>
                    <div className={styles.pendidikanHeader}>
                        <p>Skills</p>
                    </div>
                    {skills.map((list) => (
                        <div key={list.id} className={styles.dataSkills}>
                            <p>{list.skillName}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Preview;
