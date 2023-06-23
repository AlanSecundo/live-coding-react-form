import { Checkbox as AntdCheckbox } from "antd";
import { Controller, useController } from "react-hook-form";

const Checkbox = ({ control, placeholder, name }) => {
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
        <AntdCheckbox {...field}>{placeholder}</AntdCheckbox>
      )}
    />
  );
};

export default Checkbox;
