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
        // console.log("index: ", i);
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

    console.log(formValues, "pengalaman");
    return (
        <div className={styles.formSubsContainer}>
            <div>
                <p>Pengalaman Kerja</p>
                <form onSubmit={handleSubmit}>
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
                    <button>next</button>
                </form>
                <button onClick={tambahPengalaman}>Tambah Pengalaman Kerja</button>
            </div>
        </div>
    );
};
export default Pengalaman;
