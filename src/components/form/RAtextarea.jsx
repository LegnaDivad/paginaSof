import { TextField } from "@mui/material";

const RAinput = ({
  name,
  label,
  value,
  type = "text",
  autoFocus = false,
  required = false,
  rows = 4,
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
      multiline
      rows={rows}
      defaultValue={value}
      onChange={onChange}
    />
  );
};

export default RAinput;
