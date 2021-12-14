import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./preview.module.css";
const Preview = () => {
    const { personalData2, riwayatPendidikan, pengalamanKerja, skills } = useSelector(
        (state) => state.getPersonalDataReducer
    );

    console.log(riwayatPendidikan, "preview");
    const [newArr, setNewArr] = useState([
        personalData2,
        riwayatPendidikan,
        pengalamanKerja,
        skills,
    ]);
    const saveLocal = () => {
        let newArr2 = [newArr];
        localStorage.setItem("teravin", JSON.stringify(newArr2));
        console.log(newArr2);
    };
    return (
        <div className={styles.previewContainer}>
            <button onClick={saveLocal}>save</button>
            <div>
                <p>Nama: {personalData2.namaLengkap}</p>
                <p>Email: {personalData2.email}</p>
                <p>No telepon: {personalData2.telepon}</p>
                <p>Alamat: {personalData2.alamat}</p>
                <p>Link Github/gitlab: {personalData2.repo}</p>
            </div>

            <div>
                {riwayatPendidikan.map((detail, i) => (
                    <div key={i}>
                        <p>Pendidikan: {detail.namaSekolah}</p>
                        <p>Tahun Masuk: {detail.tahunMasuk}</p>
                        <p>Tahun Masuk: {detail.tahunLulus}</p>
                    </div>
                ))}
            </div>
            <div>
                <h3>Pengalaman Kerja</h3>
                {pengalamanKerja.map((detail, i) => (
                    <div key={i}>
                        <p>Nama Perusahaan: {detail.namaPerusahaan}</p>
                        <p>Jabatan: {detail.roleKerja}</p>
                        <p>Tahun Masuk: {detail.tahunMasuk}</p>
                        <p>Tahun Selesai: {detail.tahunSelesai}</p>
                    </div>
                ))}
            </div>
            <div>
                <h3>Skills</h3>
                {skills.map((list) => (
                    <div key={list.id}>
                        <p>{list.skillName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Preview;
