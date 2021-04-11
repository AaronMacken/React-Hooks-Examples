import React from 'react';
import { UserContext, PreferencesContext } from '../../App';

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <PreferencesContext.Consumer>
                                {
                                    pref => {
                                        return (
                                            <>
                                                <div>User context value {user}</div>
                                                <div>Preference vaue: {pref} </div>
                                            </>
                                        )
                                    }
                                }
                            </PreferencesContext.Consumer>
                        ) 
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF;

// consume context - no hooks
// import the context
// render the UserContext.Consumer wrapper
// use the render props pattern to display the values - VERBOSE
// multiple context? Multiple render props pattern... 🤢
