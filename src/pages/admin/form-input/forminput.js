import React, { Fragment } from "react";
import { Form, InputGroup } from "react-bootstrap";

export const FormInput = React.forwardRef(
  ({ label, type, style, ...rest }, ref) => {
    return (
      //     <input
      //       type={type}
      //       className="form-control"
      //       id="signin-email"
      //       placeholder={label}
      //       ref={ref}
      //       {...rest}
      //       required
      //  />
      <Fragment>
        <Form.Control
          className="form-control mb-3 "
          type={type}
          id="signin-email"
          placeholder={label}
          ref={ref}
          {...rest}
          required
          style={style}
        />
      </Fragment>
    );
  }
);
