import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import contactFormImg from '../../assets/03.jpg'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {

  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const getUserData = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { Name, Email, Message } = user;

    if (!Name || !Email || !Message) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const res = await fetch(
        "https://contactform-73fe0-default-rtdb.firebaseio.com/contactform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name,
            Email,
            Message,
          }),
        }
      );

      const data = await res.json();
      console.log(data);

      setUser({
        Name: "",
        Email: "",
        Message: "",
      });

      alert("Data Stored Successfully");
    } catch (error) {
      console.log(error);
      alert("An error occurred while storing the data");
    }
  };

 
  return (
    <>
      <section className={styles.conatiner}>
        {/* Button section */}
        <div className={styles.conatct_form}>
          <div className={styles.top_button}>
            <Button
              text="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize="24px" />}
            />
            <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
          </div>
          <Button
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<HiMail fontSize="24px" />}
          />

          <form  className="form" method="POST">
            <div className={styles.form_controler}>
              <label htmlFor="name">Name</label>
              <input
              placeholder="Your Name"
              name="Name"
              type="text"
              value={user.Name}
              onChange={getUserData}
            />
            </div>
            <div className={styles.form_controler}>
              <label htmlFor="email">Email</label>
              <input
              placeholder="Your Email"
              name="Email"
              type="text"
              value={user.Email}
              onChange={getUserData}
            />
            </div>
            <div className={styles.form_controler}>
              <label htmlFor="text">Text</label>
              <textarea placeholder="Your Message"
              name="Message"
              type="text"
              rows="8"
              value={user.Message}
              onChange={getUserData}/>
            </div>
            <div>
              <Button text="SUBMIT BUTTON" className="submit" onClick={postData}/>
            </div>
          </form>
        </div>

        {/* image section */}
        <div className={styles.contact_Image}>
          <img src={contactFormImg} alt="contact image" />
        </div>
      </section>

    </>
  );
};

export default ContactForm;
