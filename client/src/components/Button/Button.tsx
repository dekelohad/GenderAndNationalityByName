import React from 'react'
import './Button.css';

interface ButtonProps {
    children: React.ReactNode;
    onClick: (e: React.SyntheticEvent) => void;
    isDisabled?: boolean;
    className?: string;
}

export default function Button({ children, onClick, isDisabled = false, className, ...rest }: ButtonProps) {

    return (
        <button disabled={isDisabled} onClick={onClick} className={`btn ${isDisabled ? 'btn-disabled' : ''} ${className}`
        } {...rest} >{children}</button>
    )
}
