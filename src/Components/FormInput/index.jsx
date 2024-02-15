/* eslint-disable react/display-name */
import { forwardRef } from 'react';


const FormInput = forwardRef(function(prps, ref) {
    return <input type="text" placeholder="write somthing..." ref={ref} />;
})

// const FormIntput = forwardRef((props, ref) => {
//     return <input type="text" placeholder="write somthing..." ref={ref} />;
// });

export default FormIntput;
