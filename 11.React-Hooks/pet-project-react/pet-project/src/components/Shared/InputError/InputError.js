import { Fragment } from "react";

const InputError = ({ children }) => (
    <Fragment>
        {children ? <div className="input-error">{children}</div> : null}
        <style jsx>{`.input-error{color:red; font-weight: bold;}`}</style>
    </Fragment>
);
export default InputError;