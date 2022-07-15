import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import {
  IconButton,
  Button,
  TextField,
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
import SendIcon from "@mui/icons-material/Send";
import DownloadIcon from "@mui/icons-material/Download";
import { jsPDF } from "jspdf";

import { WrapperVariantContext } from "@mui/lab/internal/pickers/wrappers/WrapperVariantContext";

const Prescription = (props) => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useAuth();
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [prescription, setPrescription] = useState("");
  const [prescriptions, setPrescriptions] = useState([]);

  
  var doctorName = "";
  var doctorRegNumber = "";
  var doctorSpeciality = "";
  var patientName = "";
  var patientAge = "";
  var patientGender = "";
  var doctorimageURL;

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

  //FETCHING ALL PRESCRIPTIONS FROM DATABASE
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
        doctorimageURL = doctor.imageURL;

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

  const handleClickPrint = () => {
    window.print();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //SEND PRESCRIPTION FUNCTION
  const sendPrescription = (e) => {
    e.preventDefault();

    //PUSHING MESSAGE IN DATABASE
    db.collection("doctors")
      .doc(`${props.doctorUID}`)
      .collection("patients")
      .doc(`${props.patientUID}`)
      .collection("prescriptions")
      .add({
        prescription: prescription,
        senderUid: props.doctorUID,
        senderEmail: currentUser.email,
        sentAt: new Date(),
        appointmentID: props.meetingID,
      });

    setPrescription("");
  };
  const deletePrescription = (e) => {
    e.preventDefault();

    //PUSHING MESSAGE IN DATABASE
    db.collection('doctors')
    .doc(`${props.doctorUID}`)
    .collection("patients")
    .doc(`${props.patientUID}`)
    .collection("prescriptions").get().then(querySnapshot => {
      querySnapshot.docs.forEach(snapshot => {
          snapshot.ref.delete();
      })
  })

    setPrescription("");
  };

 



  //DOWNLOAD PRESCRIPTION FUNCTION
  const downloadPrescription = () => {
    var doc = new jsPDF();    
    var i = 20;
    var j = 150;
    doc.setFontSize("17");
    doc.addImage("/images/title.png", "PNG", 60, 3, 100, 20);
    doc.addImage("/images/paofiLogo.png", "PNG", 0, 15, 50, 25); //top left, space sa taas(margin-top), width, height
    doc.addImage("/images/clinic_logo.png", "PNG", 170, 15,30, 20);
    doc.text("FATHER ANGELO FALARDI HEALTH CLINIC", 43, 30  );
    doc.text("13 Sto. Niño St. Area A Payatas, Quezon City", 43, 35);
    doc.setFontSize("25");
    doc.text("Date : ", 130, 55);
    doc.text(date, 160, 55);
    doc.text("Doctor's Name : ",70, 270);
    doc.text(doctorName, 150, 270);
    doc.text("License # : ", 70, 280);
    doc.text(doctorRegNumber, 150, 280);
    doc.text("Patient : ", 20, 70);
    doc.text(patientName, 60, 70);
    doc.text("Age : ", 20, 80);
    doc.text(patientAge, 50, 80);
    doc.text("Gender : ", 20, 90);
    doc.text(patientGender, 60, 90);
    doc.addImage("/images/Rx.png", "PNG", 5, 100, 50, 25);
    prescriptions.map((prescript) => {
      doc.text(prescript.prescription, i, j);
      j = j + 10;
    }); 
    doc.autoPrint();
    window.open(doc.output('bloburl'), '_blank',"toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=700,height=500");
    
   
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
              <ListItem style={{ margin: "0" }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  {currentUser.email}
                </Typography>
              </ListItem>
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

          {/* FORM TO WRITE PRESCRIPTION */}

          <form onSubmit={sendPrescription} >
            <TextField
              id="outlined"
              required
              label="Prescription"
              color="primary"
              placeholder="Enter prescription..."
              value={prescription}
              onChange={(e) => {
                setPrescription(e.target.value);
              }}
            />
            <Button type="submit" startIcon={<SendIcon />} />
          </form>
        </DialogContent>
        <DialogActions>
          {/* DOWNLOAD REPORT BUTTON */}
          <Button
            onClick={downloadPrescription}
            type = "submit"
            style={{
              textTransform: "none",
              margin: "2%",
            }}
            
            startIcon={<DownloadIcon />}
          >
            Download Prescription
          </Button>
          <Button
            onClick={deletePrescription}
            style={{
              textTransform: "none",
              margin: "2%",
            }}
          > 
            Delete Prescription
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
