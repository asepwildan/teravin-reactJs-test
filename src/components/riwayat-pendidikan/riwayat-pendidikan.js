import styles from "./riwayat.module.css";
import React, { useState, useEffect } from "react";
import { setStepBarAsync, addRiwayatAsync } from "../../redux/actions";
import { useDispatch } from "react-redux";
const Riwayat = () => {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState([
        { namaSekolah: "", tahunMasuk: "", tahunLulus: "" },
    ]);

    const handleChange = (i) => (e) => {
        // console.log("index: ", i);
        const value = e.target.value;
        const name = e.target.name;
        let items = [...formValues];
        items[i] = { ...items[i], [name]: value };
        setFormValues(items);
    };

    const tambahRiwayat = () => {
        setFormValues((formValues) => [
            ...formValues,
            { namaSekolah: "", tahunMasuk: "", tahunLulus: "" },
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addRiwayatAsync(formValues));
        dispatch(setStepBarAsync());
    };

    console.log(formValues, "sss");
    return (
        <div className={styles.formSubsContainer}>
            <div>
                <p className={styles.pendidikanTitle}>Pendidikan</p>
                <form id="my-form" onSubmit={handleSubmit}>
                    {formValues.map((item, i) => (
                        <div key={i} className={styles.inputContainer}>
                            <div className={styles.inputBoxSekolah}>
                                <label htmlFor="nama-sekolah" className={styles.labelSekolah}>
                                    Nama Sekolah
                                </label>
                                <input
                                    type="text"
                                    className={styles.inputForm}
                                    onChange={handleChange(i)}
                                    name="namaSekolah"
                                    id="nama-sekolah"
                                    value={item.namaSekolah}
                                    required
                                />
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="tahun-masuk" className={styles.labelSekolah}>
                                    Tahun Masuk
                                </label>
                                <input
                                    type="number"
                                    className={styles.inputForm}
                                    onChange={handleChange(i)}
                                    name="tahunMasuk"
                                    id="tahun-masuk"
                                    value={item.tahunMasuk}
                                    required
                                />
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="tahun-lulus" className={styles.labelSekolah}>
                                    Tahun Lulus
                                </label>
                                <input
                                    type="number"
                                    className={styles.inputForm}
                                    onChange={handleChange(i)}
                                    name="tahunLulus"
                                    id="tahun-lulus"
                                    value={item.tahunLulus}
                                    required
                                />
                            </div>
                        </div>
                    ))}
                </form>
                <div className={styles.buttonContainer}>
                    <button onClick={tambahRiwayat}>Tambah Riwayat Pendidikan</button>
                    <button form="my-form">next</button>
                </div>
            </div>
        </div>
    );
};
export default Riwayat;
