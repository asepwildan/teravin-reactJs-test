import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import React, { useState } from "react";
import styles from "./form-subs.module.css";
const FormSubs = () => {
    let localArr = [];
    const tesLocal = () => {
        localArr.push({ nama: "Awn", age: 20 });
        console.log(localArr);
        localStorage.setItem("testing", JSON.stringify(localArr));
    };
    const tesLocal2 = () => {
        localArr.push({ nama: "Awn2", age: 22 });
        console.log(localArr);
        localStorage.setItem("testing", JSON.stringify(localArr));
    };

    let [item, setItem] = useState();
    const getItem = () => {
        setItem(JSON.parse(localStorage.getItem("testing")));
        console.log(item, "waw");
    };
    let personalData = ["Nama Lengkap", "Email", "No Telephone", "Alamat", "Link Github/Gitlab"];

    return (
        <div className={styles.formSubsContainer}>
            <div>
                <form>
                    {personalData.map((item, i) => (
                        <div key={i}>
                            <label htmlFor="fullname">{item}</label>
                            <input type="text" id="fullname" />
                        </div>
                    ))}
                </form>
            </div>
            <button onClick={tesLocal}>tes local storage</button>
            <button onClick={tesLocal2}>tes local storage2</button>
            <button onClick={getItem}>get item</button>
        </div>
    );
};

export default FormSubs;
