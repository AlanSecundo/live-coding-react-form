import { Input } from "antd";
import { Controller, useController } from "react-hook-form";
import styles from "./styles.module.css";

const TextInput = ({
  control,
  placeholder,
  name,
  required,
  minLength,
  minLengthMessage,
  validate,
  type
}) => {
  const {
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: {
      minLength: {
        value: minLength,
        message:
          minLengthMessage ??
          `O campo deve ter mais de ${minLength} caracteres`,
      },
      required: {
        value: required,
        message: "O campo deve ser preenchido",
      },
      validate: validate,
    },
  });

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            placeholder={placeholder}
            status={invalid && "error"}
            type={type}
          />
        )}
      />
      {error && <span className={styles.errorMessage}>{error?.message}</span>}
    </div>
  );
};

export default TextInput;
