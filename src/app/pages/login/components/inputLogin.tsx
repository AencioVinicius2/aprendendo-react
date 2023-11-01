import React from 'react';

interface IInputLoginProps {
    label: string,
    value: string,
    type?: string,
    onChange: (value: string) => void;
    onPressEnter?: () => void;
}

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
    return (
        <label>
            <span>{props.label}</span>
            <input 
                ref={ref}
                value={props.value}
                type={props.type} 
                onChange={e => props.onChange(e.target.value)}
                onKeyDown={e => e.key === 'Enter' 
                    ? props.onPressEnter && props.onPressEnter()
                    : undefined
                }
            />
        </label>
    )
})