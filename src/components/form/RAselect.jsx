import { Box, InputLabel, FormControl, Select, MenuItem } from "@mui/material";

const RAselect = ({
  name,
  label,
  value,
  autoFocus = false,
  required = false,
  onChange,
  options,
}) => {
  return (
    <Box marginTop='15px'>
    <FormControl fullWidth>
      <InputLabel id={`label_${name}`}>{label}</InputLabel>
      <Select
        fullWidth
        labelId={`label_${name}`}
        id={name}
        name={name}
        defaultValue={value}
        label={label}
        required={required}
        autoFocus={autoFocus}
        onChange={onChange}
      >
        {options?.map((o, idx) => (
          <MenuItem key={idx} value={o.value}>
            {o.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    </Box>
  );
};

export default RAselect;
