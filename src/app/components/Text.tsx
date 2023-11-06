import React from 'react';

type TextProps = {
    variant?:
        | 'title'
        | 'subtitle'
        | 'text'
        | 'subtext'
        | 'link'
        | 'success'
        | 'warning';
    children: React.ReactNode;
    className?: string;
};

const Text = ({
    variant = 'text',
    children,
    className = '',
    ...rest
}: TextProps) => {
    let textClasses = 'font-light text-slate-800';

    switch (variant) {
        case 'title':
            textClasses = 'text-6xl text-center text-slate-800 font-thin';
            break;
        case 'subtitle':
            textClasses = 'text-3xl text-center font-extralight text-slate-500';
            break;
        case 'text':
            textClasses = 'font-light text-slate-800';
            break;
        case 'subtext':
            textClasses = 'text-sm font-light text-slate-500';
            break;
        case 'link':
            textClasses =
                'underline underline-offset-1 font-light decoration-slate-300 hover:decoration-slate-400 text-slate-500 hover:cursor-pointer hover:text-slate-900';
            break;
        case 'success':
            textClasses =
                'font-light underline decoration-emerald-300 text-emerald-800';
            break;
        case 'warning':
            textClasses =
                'font-light underline decoration-pink-300 text-pink-900';
            break;
        default:
            break;
    }

    return (
        <p className={`${textClasses} ${className}`} {...rest}>
            {children}
        </p>
    );
};

export default Text;
