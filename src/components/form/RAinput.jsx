import { TextField } from "@mui/material";

const RAinput = ({
  name,
  label,
  value,
  type = "text",
  autoFocus = false,
  required = false,
  onChange
}) => {
  console.log('input: ', value)
  return (
    <TextField
      autoFocus={autoFocus}
      required={required}
      margin="normal"
      id={name}
      name={name}
      label={label}
      type={type}
      fullWidth
      defaultValue={value}
      onChange={onChange}
    />
  );
};

export default RAinput;
