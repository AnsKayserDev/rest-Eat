import { Children } from "react";

export const WrapDomElement = ({ condition, wrapper, children }) => {

    condition ? wrapper(children) : Children
}
// .. this is to wrapp component dynamically
