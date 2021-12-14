import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import React, { useState } from "react";
import styles from "./step-bar.module.css";
import { useSelector } from "react-redux";

const StepBar = () => {
    const setStepBar = useSelector((state) => state);
    const steps = ["Data Personal", "Riwayat Pendidikan", "Pengalaman Kerja", "Keahlian"];

    return (
        <div className={styles.stepBarContainer}>
            <Box sx={{ width: "100%" }}>
                <Stepper activeStep={setStepBar.stepBarReducer.setStepBar} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </div>
    );
};

export default StepBar;
