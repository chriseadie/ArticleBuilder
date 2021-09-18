import React from 'react';
import { StateProvider } from './StateProvider/context';


export default function Provider({ children }:{children:any}) {
    return (
        <StateProvider>
            {children}
        </StateProvider>
    )
}