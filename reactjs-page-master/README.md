# reactjs-page

A demo reactjs webpage

## Three parts
There are three parts: Components, Actions, Reducers

- Compontents: Webpage contents. App.js is the entry. It do several work:
    - Rendering the main page and modals.
    - Maintaining the state which stores the name, address and favourite temas. This state holds the variables between modals and main page.
    - Trigger the udpate action to update the global props

- Actions: Actions dispatch the value and opertaion type to reducers, for example, the editName() function dispatch the new name and EDIT_NAME to reducers, so that reducers will do the actual update
   
- Reducers: Reducers receive the payload from actions and return the new state to the App.js



## Loop:

App.js (Initial the empty state) &rarr; Adding/Editing name/address/favourite teams &rarr; Actions (dispatch payload to Reducers) &rarr; Reducers (return the new state to App.js)