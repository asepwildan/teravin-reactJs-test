import styles from "./riwayat.module.css";

import React, { useState, useEffect } from "react";

const Riwayat = () => {
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

        // setFormValues([...formValues, { [name]: value }]);
    };
    const handleSubmit = (e) => {
        e.preventDevault();
    };

    const tambahRiwayat = () => {
        setFormValues((formValues) => [
            ...formValues,
            { namaSekolah: "", tahunMasuk: "", tahunLulus: "" },
        ]);
    };

    console.log(formValues, "sss");
    return (
        <div className={styles.formSubsContainer}>
            <div>
                <p>Pendidikan</p>
                <form onSubmit={handleSubmit}>
                    {formValues.map((item, i) => (
                        <div key={i}>
                            <label htmlFor="nama-sekolah">Nama Sekolah</label>
                            <input
                                type="text"
                                onChange={handleChange(i)}
                                name="namaSekolah"
                                id="nama-sekolah"
                                value={item.namaSekolah}
                                required
                            />
                            <label htmlFor="tahun-masuk">tahun masuk</label>
                            <input
                                type="number"
                                onChange={handleChange(i)}
                                name="tahunMasuk"
                                id="tahun-masuk"
                                value={item.tahunMasuk}
                                required
                            />
                        </div>
                    ))}
                </form>
                <button onClick={tambahRiwayat}>tambah riwayat pendidikan</button>
            </div>
        </div>
    );
};
export default Riwayat;
