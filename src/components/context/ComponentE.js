import React, { useContext } from 'react';
import ComponentF from './ComponentF';

import { UserContext, PreferencesContext } from '../../App';

function ComponentE() {
    const user = useContext(UserContext);
    const preference = useContext(PreferencesContext);

    return (
        <div>
            {user} - {preference}
        </div>
    )
}

export default ComponentE;

// Destruct useContext
// Import your context
// call useContext, pass in context as arg

// way cleaner than render props pattern! (Check ComponentF)
