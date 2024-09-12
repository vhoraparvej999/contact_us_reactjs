import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <>
      <div className={`${styles.contact_section} conatiner`}>
        <h1>CONTACT US</h1>
        <p>
          Thank you for considering reaching out to us. We value every
          opportunity to connect with our community and customers, and we're
          here to assist you in any way we can. Whether you have questions, need
          support, or want to share feedback, our team is dedicated to providing
          the best possible experience.
        </p>
      </div>
    </>
  );
};

export default ContactHeader;
