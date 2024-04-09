import React, { useState } from "react";
// import "frontend/src/styles/FlowerDelivery.css";
// import {Button} from "@mui/material";
import styles from "../../styles/FlowerDelivery.module.css";
// import {Link} from "react-router-dom"; // Import your CSS file
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "@mui/material";
import axios from "axios";

// interface FlowerDeliveryProps {
//   // Define your props here
// }

const FlowerDelivery: React.FC = () => {
  const [formState, setFormState] = useState({
    senderName: "", //text box
    receiverName: "", //text box
    roomNumber: "", //numbers only
    flowerType: "", //radio buttons
    message: "", //text box
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);
    // Handle form submission here
    try {
      const response = await axios.post("/api/form", formState);
      console.log("Form data sent successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return isSubmitted ? (
      <>
          <div className={`${styles.flowerPageContainer}`}>
              <div className={`${styles.flowerPage} vh-100`}>
                  <h1 className={`${styles.flowerPageTitle} text-center mb-5 pt-5`}>
                      Flowers For A Loved One
                  </h1>
                  <div
                      id={`${styles.completedFormBox}`}
                      className={"container-fluid text-center"}
                  >
                      <h1 id={`${styles.goodbyeMsg}`}>Your request has been received!</h1>
                      <div className={`${styles.returnButtonsContainer}`}>
                          <Link href="/">
                              <button className={`${styles.returnButton} py-3 mt-5 mx-2`}>Home</button>
                          </Link>
                          <Link href={"/flower-delivery"}>
                              <button className={`${styles.returnButton} py-3 mt-5 mx-2`}>
                                  Send Another
                              </button>
                          </Link>
                      </div>
                  </div>
                  {/*<p>Sender Name: {formState.senderName}</p>*/}
                  {/*<p>Receiver Name: {formState.receiverName}</p>*/}
                  {/*<p>Room Number: {formState.roomNumber}</p>*/}
                  {/*<p>Flower Type: {formState.flowerType}</p>*/}
                  {/*<p>Message: {formState.message}</p>*/}
              </div>
          </div>
      </>
  ) : (
      <>
          <div className={`${styles.flowerPageContainer}`}>
              <div className={`${styles.flowerPage} vh-100`}>
                  <h1 className={`${styles.flowerPageTitle} text-center mb-5 pt-5`}>
                      Flowers For A Loved One
                  </h1>
                  <form
                      id={`${styles.flowerPageForm}`}
                      className={"container-fluid"}
                      onSubmit={handleSubmit}
                  >
                      <div className="form-group">
                          <label>Receiver's Name</label>
                          <input
                              type="text"
                              name="senderName"
                              placeholder={"Name"}
                              value={formState.senderName}
                              onChange={handleChange}
                              className="form-control"
                              required
                          />
                      </div>
                      <div className="form-group">
                          <label>Sender's Name</label>
                          <input
                              type="text"
                              name="receiverName"
                              placeholder={"Name"}
                              value={formState.receiverName}
                              onChange={handleChange}
                              className="form-control"
                              required
                          />
                      </div>
                      <div className="row form-group">
                          <div className={"col-5"}>
                              <label>Room Number</label>
                              <input
                                  type="number"
                                  name="roomNumber"
                                  placeholder={"eg. 112"}
                                  value={formState.roomNumber}
                                  onChange={handleChange}
                                  className="form-control"
                                  required
                              />
                          </div>
                          <div className={"col-7"}>
                              <div className={"row"}>
                                  <label>Flower Type</label>
                                  <div className={`form-check col ${styles.radioButtons}`}>
                                      <input
                                          className="form-check-input"
                                          type="radio"
                                          name="flowerType"
                                          value="Rose"
                                          onChange={handleChange}
                                          required
                                      />
                                      <label className="form-check-label">Rose</label>
                                  </div>
                                  <div className={`form-check col ${styles.radioButtons}`}>
                                      <input
                                          className="form-check-input"
                                          type="radio"
                                          name="flowerType"
                                          value="Tulip"
                                          onChange={handleChange}
                                          required
                                      />
                                      <label className="form-check-label">Tulip</label>
                                  </div>
                                  <div className={`form-check col ${styles.radioButtons}`}>
                                      <input
                                          className="form-check-input"
                                          type="radio"
                                          name="flowerType"
                                          value="Lily"
                                          onChange={handleChange}
                                          required
                                      />
                                      <label className="form-check-label">Lily</label>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="form-group">
                          <label>Message (optional)</label>
                          <input
                              type="text"
                              name="message"
                              placeholder={"Best Wishes..."}
                              value={formState.message}
                              onChange={handleChange}
                              id={`${styles.messageBox}`}
                              className="form-control"
                          />
                      </div>
                      <div className={`text-center`}>
                          <button type="submit" className={`${styles.submitButton} py-3 px-5`}>
                              Send
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </>
  );
};

export default FlowerDelivery;
