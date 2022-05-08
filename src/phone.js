import React,{useState} from "react";
import { Link } from "react-router-dom";
import PhoneInputWithCountrySelect from "react-phone-number-input";
//import {getOTP} from "react-phone-number-input"

const PhoneAuth = () =>
{
    const [value,setValue]= useState('')
    const [cont,setCont]= useState('IN')

    function click(e)
    {
        //e.preventDefault()
        setValue('')
        setCont('IN')
    }
    return(
    <div className="PhoneAuth" align="Center">
        <div style={{width:300}}>
        <PhoneInputWithCountrySelect 
        value={value}
        defaultCountry={cont}
        countryIcon={false}
        onChange={setValue}
        withCountryCallingCode={true}
        />
        <Link to='/phone'>
        <button onClick={click}>
           Cancel
        </button>
        </Link>

        <Link to='/otppage'>
        <button >
             Submit
        </button>
        </Link>
        </div>
    </div>
    )
}

export default PhoneAuth;