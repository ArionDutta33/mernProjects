import styles from "./ContactHeader.module.css";
const ContactHeader = () => {
  return (
    <div
      className={`container 
    ${styles.contact_section}
    `}
    >
      <h1>Contact us</h1>
      <p>
        LET&apos;S CONNECT: WE&apos;RE HERE TO HELP, AND WE&apos;D LOVE TO HEAR
        FROM YOU! WHTHER YOU HAVE A QUESTION, COMMENT ,OR JUST WANT OT CHAT, YOU
        CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE ,OR BY PHONE
        EMAIL,OR SOCIAL MEDIA
      </p>
    </div>
  );
};

export default ContactHeader;
