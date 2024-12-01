import { useState } from "react";
import Button from "./Button";
import TextArea from "./TextArea";

const InputData = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
}) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default function Inputs() {
  const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputData
        label="Name"
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handler}
        required
      />
      <InputData
        label="Email"
        type="email"
        placeholder="Enter your email"
        name="email"
        value={formData.email}
        onChange={handler}
        required
      />
      <InputData
        label="Subject"
        type="text"
        placeholder="Enter your subject"
        name="subject"
        value={formData.subject}
        onChange={handler}
        required
      />
      <TextArea
        label="Message"
        name="message"
        placeholder="Enter your message"
        value={formData.message}
        onChange={handler}
        required
      />
      <br />
      <Button label="Submit" type="submit" />
    </form>
  );
}
