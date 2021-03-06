import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  Typography,
  Divider,
  Tooltip,
} from "@mui/material";
import MedicationIcon from "@mui/icons-material/Medication";
import DownloadIcon from "@mui/icons-material/Download";
import { jsPDF } from "jspdf";

const Prescription = (props) => {
  const [open, setOpen] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);

  var doctorName = "";
  var doctorRegNumber = "";
  var doctorSpeciality = "";
  var patientName = "";
  var patientAge = "";
  var patientGender = "";

  var date = new Date().toLocaleDateString("en-US");

  // FETCH DOCTOR'S DATA FROM DB
  useEffect(() => {
    db.collection("doctors").onSnapshot((snapshot) => {
      setDoctors(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  // FETCH PATIENT'S DATA FROM DB
  useEffect(() => {
    db.collection("patients").onSnapshot((snapshot) => {
      setPatients(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  ///FETCHING ALL PRESCRIPTIONS FROM DATABASE
  useEffect(() => {
    db.collection(
      `doctors/${props.doctorUID}/patients/${props.patientUID}/prescriptions`
    )
      .orderBy("sentAt", "asc")
      .onSnapshot((snapshot) => {
        setPrescriptions(snapshot.docs.map((doc) => doc.data()));
      });
  }, [props.meetingID]);

  {
    doctors.map((doctor) => {
      if (doctor.uid === props.doctorUID) {
        doctorName = doctor.name;
        doctorSpeciality = doctor.medicalSpeciality;
        doctorRegNumber = doctor.regNumber;
      }
    });
  }

  {
    patients.map((patient) => {
      if (patient.uid === props.patientUID) {
        patientName = patient.name;
        patientAge = patient.age;
        patientGender = patient.gender;
      }
    });
  }

  //FUNCTIONS TO OPEN AND CLOSE DIALOG BOX
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //DOWNLOAD PRESCRIPTION FUNCTION
  const downloadPrescription = () => {
    var doc = new jsPDF();
    var i = 20;
    var j = 150;
    doc.setFontSize("15");
    doc.addImage("/images/paofiLogo.png", "PNG", 0, 5, 50, 20); //top left, space sa taas(margin-top), width, height
    doc.addImage("/images/title.png", "PNG", 162, 5, 50, 20);
    doc.text("FATHER ANGELO FALARDI HEALTH CLINIC", 50, 10, 0, 25 );
    doc.text("13 Sto. Ni??o St. Area A Payatas, Quezon City", 50, 20, 0, 10);
    doc.text("Date : ", 20, 40);
    doc.text(date, 50, 40);
    doc.text("Doctor : ", 20, 50);
    doc.text(doctorName, 50, 50);
    doc.text("Medical Speciality : ", 20, 60);
    doc.text(doctorSpeciality, 70, 60);
    doc.text("License Number : ", 20, 70);
    doc.text(doctorRegNumber, 70, 70  );
    doc.text("Patient : ", 20, 80);
    doc.text(patientName, 50, 80);
    doc.text("Age : ", 20, 90);
    doc.text(patientAge, 50, 90);
    doc.text("Gender : ", 20, 100);
    doc.text(patientGender, 50, 100);
    doc.text("Prescription  : ", 20, 130);
    prescriptions.map((prescript) => {
      doc.text(prescript.prescription, i, j);
      j = j + 10;
    });
    doc.save("doctor_prescription.pdf");
  };

  return (
    <div>
      {/* PRESCRIPTION BUTTON */}

      <Tooltip title="Prescription" placement="top">
        <IconButton onClick={handleClickOpen} style={{ color: "#ffffff" }}>
          <MedicationIcon />
        </IconButton>
      </Tooltip>

      {/* PRESCRIPTION DIALOG BOX */}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">PRESCRIPTION</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            <List>
              {prescriptions.map((prescript) => {
                if (prescript.appointmentID === props.meetingID)
                  return (
                    <>
                      <ListItem style={{ margin: "0" }}>
                        <Typography>{prescript.prescription}</Typography>
                      </ListItem>
                    </>
                  );
              })}
            </List>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          {/* DOWNLOAD REPORT BUTTON */}
          <Button
            onClick={downloadPrescription}
            style={{
              textTransform: "none",
              margin: "2%",
            }}
            startIcon={<DownloadIcon />}
          >
            Download Prescription
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Prescription;
