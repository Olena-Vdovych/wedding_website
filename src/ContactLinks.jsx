import React, { Fragment } from 'react';
import { CONTACTS } from './config';

// Клікабельні номери телефонів (контакти беруться з config.js)
export default function ContactLinks({ className = '' }) {
    return (
        <span className={className}>
            {CONTACTS.map((contact, index) => (
                <Fragment key={contact.tel}>
                    {index > 0 && ' · '}
                    <a
                        href={`tel:${contact.tel}`}
                        className="font-medium underline underline-offset-2 whitespace-nowrap"
                    >
                        {contact.name} {contact.display}
                    </a>
                </Fragment>
            ))}
        </span>
    );
}