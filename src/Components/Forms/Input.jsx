import React, { useEffect, useState } from "react";
import { Form, Col } from "react-bootstrap";
import { mask, unMask } from "remask";

// eslint-disable-next-line import/no-anonymous-default-export
export default function Input(props) {
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(props.val);
  }, [props]);

  const id = props.id ? props.id : props.name;

  const { errors, register, validator } = props.reference;
  const required = () =>
    validator[props.name]?.required ? (
      <span className="text-danger">*</span>
    ) : (
        ""
      );

  function handleChange(event) {
    const val = props.mask
      ? mask(unMask(event.target.value), props.mask)
      : event.target.value;
    setValue(val);
  }

  return (
    <>
      <Form.Group as={Col} md={props.size} controlId={id}>
        <Form.Label>
          {props.label && (
            <>
              {props.label}: {required()}
            </>
          )}
        </Form.Label>
        <Form.Control
          ref={register(validator[props.name])}
          isInvalid={errors[props.name]}
          value={value}
          onChange={handleChange}
          {...props}
        />

        <Form.Control.Feedback type="invalid">
          {errors[props.name]?.message}
        </Form.Control.Feedback>
        {props.legend &&
          <Form.Text className="text-muted">
            {props.legend}
          </Form.Text>}
      </Form.Group>
    </>
  );
};
