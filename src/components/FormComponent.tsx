import styled from "styled-components";
import { StyledButton, StyledInput } from "@/components";
import type { FormComponentProps } from "@/types";
import { pxToRem } from "@/utils";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${pxToRem(16)};
`


function FormComponent(props: FormComponentProps) {
    const { inputs, buttons, messages } = props;

    return (
        <StyledForm>
            {inputs.map((inputProps, index) => (
                <StyledInput key={index} {...inputProps} />
            ))}
            {buttons.map((buttonProps, index) => (
                <StyledButton key={index} {...buttonProps} />

            ))}
            {messages && (
                <div style={{ color: messages.type === 'error' ? 'red' : 'green' }}>
                    {messages.message}
                </div>
            )}
        </StyledForm>
    );
    
}

export default FormComponent;