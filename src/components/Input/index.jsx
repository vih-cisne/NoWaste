import { InputField } from "./styled"

const Input = ({Field, label, Icon, SecondIcon, children, error, register, name, ...rest}) => {
    
    return (
        <InputField isError={!!error}>
            <label>{label}{!!error && <span> - {error}</span>}</label>
            {Icon && Icon}
            {register ? (
                <Field {...register(name)} {...rest}>
                {children}
                </Field>
            ) : (
                <Field {...rest}>
                {children}
                </Field>
            )}
            {SecondIcon && SecondIcon}
        </InputField>
    )
}

export default Input