import styles from "./data-skills.module.css";
import React, { useState } from "react";
import { setStepBarAsync, addSkillsAsync } from "../../redux/actions";
import { useDispatch } from "react-redux";
const AddSkills = () => {
    const dispatch = useDispatch();

    let [skills, setSkills] = useState([
        {
            id: 1,
            skillName: "",
        },
    ]);

    const handleChange = (i) => (e) => {
        const value = e.target.value;
        const name = e.target.name;
        let items = [...skills];
        items[i] = { ...items[i], [name]: value };
        setSkills(items);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addSkillsAsync(skills));
        dispatch(setStepBarAsync());
    };

    const tambahSkills = () => {
        let idCount = skills[skills.length - 1].id + 1;
        setSkills((skills) => [
            ...skills,
            {
                id: idCount,
                skillName: "",
            },
        ]);
    };

    return (
        <div className={styles.formSubsContainer}>
            <div>
                <p className={styles.skillsTitle}>Skills</p>
                <form id="my-form" onSubmit={handleSubmit}>
                    {skills.map((input, i) => (
                        <div key={input.id} className={styles.inputContainer}>
                            <input
                                type="text"
                                onChange={handleChange(i)}
                                className={styles.inputForm}
                                value={input.skillName}
                                placeholder="input skill"
                                name="skillName"
                                required
                            />
                        </div>
                    ))}
                </form>

                <div className={styles.buttonContainer}>
                    <button onClick={tambahSkills}>Tambah Skill</button>
                    <button form="my-form">next</button>
                </div>
            </div>
        </div>
    );
};
export default AddSkills;
