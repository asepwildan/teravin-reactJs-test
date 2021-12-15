import styles from "./pengalaman-kerja.module.css";
import React, { useState } from "react";
import { setStepBarAsync, addPengalamanAsync } from "../../redux/actions";
import { useDispatch } from "react-redux";
const Pengalaman = () => {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState([
        { namaPerusahaan: "", tahunMasuk: "", tahunSelesai: "", roleKerja: "" },
    ]);

    const handleChange = (i) => (e) => {
        const value = e.target.value;
        const name = e.target.name;
        let items = [...formValues];
        items[i] = { ...items[i], [name]: value };
        setFormValues(items);
    };

    const tambahPengalaman = () => {
        setFormValues((formValues) => [
            ...formValues,
            { namaPerusahaan: "", tahunMasuk: "", tahunSelesai: "", roleKerja: "" },
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPengalamanAsync(formValues));
        dispatch(setStepBarAsync());
    };

    return (
        <div className={styles.formSubsContainer}>
            <div>
                <p className={styles.pengalamanTitle}>Pengalaman Kerja</p>
                <form id="my-form" onSubmit={handleSubmit}>
                    {formValues.map((item, i) => (
                        <div key={i} className={styles.inputContainer}>
                            <div className={styles.inputBoxSekolah}>
                                <label className={styles.labelSekolah}>Nama Perusahaan</label>
                                <input
                                    type="text"
                                    className={styles.inputForm}
                                    onChange={handleChange(i)}
                                    name="namaPerusahaan"
                                    value={item.namaPerusahaan}
                                    required
                                />
                            </div>
                            <div className={styles.inputBoxSekolah}>
                                <label className={styles.labelSekolah}>Jabatan</label>
                                <input
                                    type="text"
                                    className={styles.inputForm}
                                    onChange={handleChange(i)}
                                    name="roleKerja"
                                    value={item.roleKerja}
                                    required
                                />
                            </div>
                            <div className={styles.inputBox}>
                                <label className={styles.labelSekolah}>Tahun Masuk</label>
                                <input
                                    type="number"
                                    className={styles.inputForm}
                                    onChange={handleChange(i)}
                                    name="tahunMasuk"
                                    value={item.tahunMasuk}
                                    required
                                />
                            </div>
                            <div className={styles.inputBox}>
                                <label className={styles.labelSekolah}>Tahun Selesai</label>
                                <input
                                    type="number"
                                    className={styles.inputForm}
                                    onChange={handleChange(i)}
                                    name="tahunSelesai"
                                    value={item.tahunSelesai}
                                    required
                                />
                            </div>
                        </div>
                    ))}
                </form>

                <div className={styles.buttonContainer}>
                    <button onClick={tambahPengalaman}>Tambah Pengalaman Kerja</button>
                    <button form="my-form">next</button>
                </div>
            </div>
        </div>
    );
};
export default Pengalaman;
