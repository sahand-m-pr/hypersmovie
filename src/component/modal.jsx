import React, { useEffect, useRef } from 'react';

// Styles import
import cn from 'classnames';
import styles from './modal.module.sass';
import { useClickOutsideHandler } from './useClickoutside';

const Modal = ({children, open, setOpen}) => {
    const modalRef = useRef(null);

    // close  when clicked out side range
    useClickOutsideHandler(() => {
        if(open) {
            setOpen(false);
            if(!open) document.body.style.overflow = 'hidden'
            else document.body.style.removeProperty('overflow');
        }
    }, modalRef, [open]);

    useEffect(() => {
        if(open) document.body.style.overflow = 'hidden'
        else document.body.style.removeProperty('overflow');
    }, [open]);
    
    if(open) return (
        <div className={cn(styles.modal__backdrop, {[styles.active]:open})}>
            <div ref={modalRef} className={cn(styles.drawer__wrapper, {[styles.active]:open})}>
                {open ? children : null}
            </div>
        </div>
    );
};

export default Modal;