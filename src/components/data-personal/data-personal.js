import React, { useState, useEffect } from "react";
import styles from "./data-personal.module.css";
import { setStepBarAsync, addPersonalDataAsync } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const DataPersonal = () => {
    const setStepBar = useSelector((state) => state);
    let [arr1, setArr1] = useState([]);
    let [item2, setItem2] = useState(JSON.parse(localStorage.getItem("testing")));
    const { personalData2 } = useSelector((state) => state.getPersonalDataReducer);
    const dispatch = useDispatch();

    const [values, setValues] = useState({
        namaLengkap: "",
        email: "",
        telepon: "",
        alamat: "",
        repo: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // setArr1([...arr1, values]);
        dispatch(addPersonalDataAsync(values));
        dispatch(setStepBarAsync());
    };

    return (
        <div className={styles.formSubsContainer}>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="nama-lengkap">Nama Lengkap</label>
                        <input
                            onChange={handleChange}
                            className={styles.inputForm}
                            type="text"
                            id="nama-lengkap"
                            name="namaLengkap"
                            value={values.namaLengkap}
                            required
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={handleChange}
                            className={styles.inputForm}
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            required
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="telepon">No Telepon</label>
                        <input
                            onChange={handleChange}
                            className={styles.inputForm}
                            type="number"
                            id="telepon"
                            name="telepon"
                            value={values.telepon}
                            required
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="alamat">Alamat</label>
                        <input
                            onChange={handleChange}
                            className={styles.inputForm}
                            type="text"
                            id="alamat"
                            name="alamat"
                            value={values.alamat}
                            required
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="repo">Link Github/Gitlab</label>
                        <input
                            onChange={handleChange}
                            className={styles.inputForm}
                            type="text"
                            id="repo"
                            name="repo"
                            value={values.repo}
                            required
                        />
                    </div>
                    <div className={styles.buttonNext}>
                        <button>next</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DataPersonal;
