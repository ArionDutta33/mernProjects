import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
const ContactForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          {" "}
          <Button
            text="VIEW SUPPORT CHAT"
            icon={<MdMessage fontSize={"24px"} />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize={"24px"} />} />
        </div>
        <Button
          isOutlined={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize={"24px"} />}
        />
        <form action="">
          <div className={styles.form_controller}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="text">Text</label>
            <textarea rows={8} name="text" id="email" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT BUTTON" />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/logo.svg" alt="Contact image" />
      </div>
    </div>
  );
};

export default ContactForm;
