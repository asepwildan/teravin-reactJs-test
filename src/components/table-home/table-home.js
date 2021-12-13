import styles from "./table-home.module.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import React, { useState } from "react";
import FormSubs from "../form-subs/form-subs";
import StepBar from "../step-bar/step-bar";
const TableHome = () => {
    const itemList = JSON.parse(localStorage.getItem("testing"));
    let [formDisplay, setFormDisplay] = useState(true);
    const addFormSubs = () => {
        setFormDisplay(false);
    };
    return (
        <React.Fragment>
            {formDisplay ? (
                <div className={styles.tableHomeContainer}>
                    <button onClick={addFormSubs} className={styles.addButton}>
                        + Add Data
                    </button>
                    <table className={styles.styledTable}>
                        <thead>
                            <tr>
                                <th>ID no</th>
                                <th>Nama</th>
                                <th>Alamat</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemList.map((list) => (
                                <tr>
                                    <td>03</td>
                                    <td>{list.nama}</td>
                                    <td>{list.age}</td>

                                    <td>
                                        <RemoveRedEyeIcon style={{ fill: "#525252" }} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div>
                    <p>Form Submission</p>
                    <StepBar />
                    <FormSubs />
                </div>
            )}
        </React.Fragment>
    );
};

export default TableHome;
