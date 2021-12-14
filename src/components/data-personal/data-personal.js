import React, { useState, useEffect } from "react";
import styles from "./data-personal.module.css";
import { setStepBarAsync, addPersonalDataAsync } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const DataPersonal = () => {
    const setStepBar = useSelector((state) => state);
    let localArr = [];
    let [arr1, setArr1] = useState([]);
    let [item2, setItem2] = useState(JSON.parse(localStorage.getItem("testing")));
    const { personalData2 } = useSelector((state) => state.getPersonalDataReducer);
    const dispatch = useDispatch();
    const tesLocal = () => {
        localStorage.removeItem("testing");
    };
    const tesLocal2 = () => {
        localArr.push({ nama: "Awn2", age: 22 });
        console.log(localArr);
        localStorage.setItem("testing", JSON.stringify(localArr));
    };

    const reducInc = () => {
        dispatch(setStepBarAsync(1));
    };

    const [values, setValues] = useState({
        namaLengkap: "",
        email: "",
        telepon: null,
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
        setArr1([...arr1, values]);

        dispatch(addPersonalDataAsync(values));
        dispatch(setStepBarAsync());
        // if (item2 !== null) {
        //     setItem2([...item2, values]);
        //     localStorage.setItem("testing", JSON.stringify(item2));
        // } else {
        //     localStorage.setItem("testing", JSON.stringify(arr1));
        // }
    };
    // const tesLocal3 = () => {
    //     if (item2 !== null) {
    //         setItem2([...item2, personalData2]);
    //         localStorage.setItem("testing", JSON.stringify(item2));
    //     } else {
    //         localStorage.setItem("testing", JSON.stringify(arr1));
    //     }
    // };

    const setLocal = () => {
        if (item2 !== null) {
            setItem2([...item2, personalData2]);
            return localStorage.setItem("testing", JSON.stringify(item2));
        } else {
            return localStorage.setItem("testing", JSON.stringify(arr1));
        }
    };

    useEffect(() => {
        setLocal();
    }, [setStepBar]);
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
                    <button>done</button>
                </form>
            </div>
            <button onClick={tesLocal}>Delete local storage</button>
            <button onClick={tesLocal2}>tes local storage2</button>
            <button onClick={reducInc}> step bar increment </button>

            {/* <button onClick={tesLocal3}> coba ke storage </button> */}
        </div>
    );
};

export default DataPersonal;
