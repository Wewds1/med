import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDateTimePicker from "@mui/lab/DesktopDateTimePicker";

const Book_Appointment = (props) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("");
  const [mode, setMode] = useState("");
  const [name, setName] = useState("");
  const [timeSlot, setTimeSlot] = useState(new Date());
  const [symptoms, setSymptoms] = useState("");
  const [timeError, setTimeError] = useState("");
  const { currentUser } = useAuth();

  

  const handleClickOpen = () => {
    setOpen(true);
    setScroll("paper");
    setTimeError("");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const leaveMeeting = () => {
    alert("You Booked an appointment");
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleChangeTimeSlot = (e) => {
    setTimeSlot(e.target.value);
    if (
      timeSlot.getHours() <
        new Date(props.startTime.seconds * 1000).getHours() ||
      timeSlot.getHours() > new Date(props.endTime.seconds * 1000).getHours()
    ) {
      setTimeError("Please enter time in the time slot of the doctor!");
    }
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (
      timeSlot.getHours() <
        new Date(props.startTime.seconds * 1000).getHours() ||
      timeSlot.getHours() > new Date(props.endTime.seconds * 1000).getHours()
    ) {
      setTimeError("Please enter time in the time slot of the doctor!");
      alert("Enter the working hours of doctor");
    } else {
      // PUSHING APPOINTMENT DATA IN DB

      
      db.collection("appointments").add({
        name: name,
        mode: mode,
        timeSlot: timeSlot,
        symptoms: symptoms,
        isConfirmed: "pending",
        doctorUID: props.doctorUID,
        patientUID: currentUser.uid,
        bookedAt: new Date(),
      });

     

      setOpen(false);

     
    }
    
  };
  

  
  

  // console.log(timeSlot.getDay());
  // console.log(new Date(props.startTime.seconds * 1000).getDay());
  // console.log(new Date(props.endTime.seconds * 1000).getDay());

  return (
    <>
    {timeError && <Alert severity="error">{timeError}</Alert>}
      <Button variant="contained" onClick={() => handleClickOpen()}>
        Book Appointment
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        PaperProps={{ sx: { position: "fixed", top: 0, m: 0 } }}
      >
        <DialogTitle id="scroll-dialog-title">Book Appointment</DialogTitle>
        <form onSubmit={handleSubmit}>
          
          <DialogContent dividers={scroll === "paper"}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              <Grid container spacing={1}>
              <Grid item xs={12}>
                  <TextField
                    id="mode"
                    name="mode"
                    required
                    label="Patient's Full Name"
                    fullWidth
                    size="small"
                    onChange={(e) => setMode(e.target.value)}
                  />
                </Grid>
                {/* MODE OF CONSULTATION */}
               
                {/* DATE AND TIME SLOT */}
                <Grid item xs={12}>
                  <Typography>Preferred Date and Time Slot </Typography>
                </Grid>

                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDateTimePicker
                      value={timeSlot}
                      onChange={(newValue) => {
                        setTimeSlot(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          required
                          id="timeSlot"
                          name="timeSlot"
                          fullWidth
                          size="small"
                          onChange={(e) => handleChangeTimeSlot()}
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>

                {/* SYMPTOMS */}
                <Grid item xs={12}>
                  <TextField
                    id="symptoms"
                    name="symptoms"
                    label="Patient's Complaints"
                    fullWidth
                    size="small"
                    onChange={(e) => setSymptoms(e.target.value)}
                  />
                </Grid>
              </Grid>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant = "contained" onClick={() => handleClose()}>Cancel</Button>
            <Button variant = "contained" onClick = {leaveMeeting} type = "submit">Book</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default Book_Appointment;
