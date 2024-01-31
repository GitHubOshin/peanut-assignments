import React from "react";

interface ChildProps {
    colour: string;
    onClick: () => void;
    children: React.ReactNode

}

export const Child = ({ colour, onClick }: ChildProps) => {
    return (
        <div>Child: The colour = {colour}!!!
            <button onClick={onClick}>Click Me</button>
        </div>
    )
}

export const ChildAsFC: React.FC<ChildProps> = ({ colour, onClick, children }) => {
    return (
        <div>ChildAsFC: {colour}
{children}
            <button onClick={onClick}>Click Me</button>
        </div>)
}