import React, { useEffect, useState } from "react";
import { Form, Col } from "react-bootstrap";
import { mask, unMask } from "remask";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(props.val);
  }, [props]);

  const id = props.id ? props.id : props.name;

  const chave = props.chave ? props.chave : "id";
  const description = props.description ? props.description : "nome";

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
      <Form.Group as={Col} controlId={id} md={props.size}>
        <Form.Label>
          {props.label}: {required()}
        </Form.Label>
        <Form.Control
          as="select"
          ref={register(validator[props.name])}
          {...props}
          value={value}
          isInvalid={errors[props.name]}
          onChange={handleChange}
        >
          <option value="">{props.firstoption}</option>
          {props.data.map((item) => (
            <option key={item.id} value={item[chave]}>
              {item[description]}
            </option>
          ))}
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors[props.name]?.message}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};
