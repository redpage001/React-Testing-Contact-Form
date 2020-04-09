import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });
  const onSubmit = data => {
    setData(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName" id="firstNameLabel">First Name*</label>
          <input
            name="firstName"
            placeholder="bill"
            aria-labelledby="firstNameLabel"
            ref={register({ required: true, maxLength: 3 })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" id="lastNameLabel">Last Name*</label>
          <input
            name="lastName"
            aria-labelledby="lastNameLabel"
            placeholder="luo"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" id="emailLabel">
            Email*
          </label>
          <input 
              name="email" 
              aria-labelledby="emailLabel"
              ref={register({ required: true })} 
              placeholder="bluebill1049@hotmail.com"/>
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message" id="messageLabel">
              Message*
          </label>
          <textarea 
              name="message" 
              aria-labelledby="messageLabel"
              ref={register({ required: false })} />
        </div>
        {data && (
          <pre data-testid={"preData"} style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit" data-testid="submitButton"/>
      </form>
    </div>
  );
};

export default ContactForm;
