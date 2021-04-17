import { css } from "@emotion/react";

const Text = ({ children }) => (
    <span css={css`
    font-size: 1rem;
    color: blue;
    `}>{children}</span>
);

const Button = ({ children }) => (
    <button css={css`
    border-radius: 15px;
    padding: 1rem;
    margin: 3rem;
    `}>
        <Text>{children}</Text>
    </button>
);

export {
    Button
};