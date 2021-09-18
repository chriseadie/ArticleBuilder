import React from 'react';
import { StateProvider } from './StateProvider/context';


export default function Provider({ children }) {
    return (
        <StateProvider>
            {children}
        </StateProvider>
    )
}