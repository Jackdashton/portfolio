import React from "react";
import styles from "./ContactForm.module.css";

const ENDPOINT =
  'example';

function ContactForm() {

  const [email, setEmail] = React.useState('');
  const [name, setName] =React.useState('');
  const [message, setMessage] =React.useState('');

  // idle / loading / error / success
  const [status, setStatus] = React.useState('idle');

  const id = React.useId();
  const nameId = `${id}-name`;
  const emailId = `${id}-email`;
  const messageId = `${id}-message`;

async function handleSubmit(event) {
  event.preventDefault();
  setStatus("loading");

  const response = await fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });
  const json = await response.json();
  console.log(json);
  console.log(email)
  console.log(name)
  console.log(message)
}

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor={nameId}>Name </label>
          <input
          required={true}
          disabled={status==="loading"}
          type="text"
          value={name}
          id={nameId}
          onChange={(event) => {
            setName(event.target.value);
          }}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor={emailId}>Email </label>
          <input
          required={true}
          disabled={status==="loading"}
          type="email"
          value={email}
          id={emailId}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor={messageId}>Message </label>
          <input
          required={true}
          disabled={status==="loading"}
          type="text"
          value={message}
          id={messageId}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          />
        </div>

        <button
        disabled={status==="loading"}
        >
          { status==="loading" ? "Submitting" : "Submit" }
        </button>
      </form>
      {status === "success" && "Message Sent!" }
      {status === "error" && "Something went wrong! Try resubmitting your message" }
    </div>
  );
}

export default ContactForm;
