import styles from "./table-home.module.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import React, { useState } from "react";
import DataPersonal from "../data-personal/data-personal";
import StepBar from "../step-bar/step-bar";
import Riwayat from "../riwayat-pendidikan/riwayat-pendidikan";
import Pengalaman from "../pengalaman-kerja/pengalaman-kerja";
import AddSkills from "../data-skills/data-skills";
import Preview from "../preview/preview";
import { useSelector } from "react-redux";
const TableHome = () => {
    const setStepBar = useSelector((state) => state);
    let arrDefault = [
        [
            {
                namaLengkap: "",
                email: "",
                alamat: "",
                noTelepon: "",
                linkRepo: "",
            },
        ],
    ];
    // localStorage.setItem("testing", JSON.stringify(arrDefault));
    const itemList = JSON.parse(localStorage.getItem("teravin"));
    let [formDisplay, setFormDisplay] = useState(true);
    console.log(itemList, "cek");
    console.log(itemList);
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
                    {itemList === null ? (
                        <h1>data masih kosong</h1>
                    ) : (
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
                                {itemList[0].map((list, i) => (
                                    <tr key={i}>
                                        <td>{i}</td>
                                        <td>{list.namaLengkap}</td>
                                        <td>{list.alamat}</td>

                                        <td>
                                            <RemoveRedEyeIcon style={{ fill: "#525252" }} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            ) : (
                <div>
                    <p>Form Submission</p>
                    <StepBar />
                    {setStepBar.stepBarReducer.setStepBar == 0 ? (
                        <DataPersonal />
                    ) : setStepBar.stepBarReducer.setStepBar == 1 ? (
                        <Riwayat />
                    ) : setStepBar.stepBarReducer.setStepBar == 2 ? (
                        <Pengalaman />
                    ) : setStepBar.stepBarReducer.setStepBar == 3 ? (
                        <AddSkills />
                    ) : (
                        <Preview />
                    )}
                </div>
            )}
        </React.Fragment>
    );
};

export default TableHome;
