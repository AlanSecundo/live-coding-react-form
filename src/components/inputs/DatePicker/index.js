import { DatePicker as AntdDatePicker } from "antd";
import { Controller, useController } from "react-hook-form";
import styles from "./styles.module.css";

const DatePicker = ({ name, control }) => {
  const { field } = useController({
    name,
    control,
  });

  return (
    <Controller
      name={name}
      control={control}
      inputRef={field.ref}
      onBlur={field.onBlur}
      onChange={field.onChange}
      render={({ field }) => (
        <AntdDatePicker
          {...field}
          format="DD/MM/YYYY"
          placeholder="Data de nascimento"
          className={styles.datePicker}
        />
      )}
    />
  );
};

export default DatePicker;
