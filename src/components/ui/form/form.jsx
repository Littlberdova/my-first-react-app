import React, {useState} from "react";
import Button from "../button/button.jsx";
import styles from "./form.module.scss";

function Form (props) {
    const [firstName, setFirstNameInputState] = useState("");
    const [lastName, setLastNameInputState] = useState("");
    const [email, setEmailInputState] = useState("");
    const [phone, setPhoneInputState] = useState("");
    const [country, setCountryInputState] = useState("");
    const [city, setCityInputState] = useState("");

    return (
        <form method="post" action="https://httpbin.org/post"> 

            <ul className={styles.list}>
                <li>
                    <label>  
                    <span className={styles.label}> First Name </span>   
                    <input className={styles.input} value={firstName} onChange={(evt)=> setFirstNameInputState(evt.target.value)} type="text" name="first-name" placeholder="First Name" autoComplete="off"/>
                    </label>
                </li>
                <li>
                    <label>  
                    <span className={styles.label}> Last Name</span>   
                    <input className={styles.input} value={lastName} onChange={(evt)=> setLastNameInputState(evt.target.value)} type="text" name="last-name" placeholder="Last Name" autoComplete="off"/>
                    </label>
                </li>
                <li>
                    <label>  
                    <span className={styles.label}> E-mail </span>   
                    <input className={styles.input} value={email} onChange={(evt)=> setEmailInputState(evt.target.value)} type="email" name="e-mail" placeholder="adrian_shp@yahoo.com" autoComplete="off"/>
                    </label>
                </li>
                <li>
                    <label>  
                    <span className={styles.label}> Phone </span>   
                    <input className={styles.input} value={phone} onChange={(evt)=> setPhoneInputState(evt.target.value)} type="tel" name="phone" placeholder="0752549328" autoComplete="off"/>
                    </label>
                </li>
                <li>
                    <label>  
                    <span className={styles.label}> Country </span>   
                    <input className={styles.input} value={country} onChange={(evt)=> setCountryInputState(evt.target.value)} type="text" name="country" placeholder="Romania" autoComplete="off"/>
                    </label>
                </li>
                <li>
                    <label>  
                    <span className={styles.label}> City </span>   
                    <input className={styles.input} value={city} onChange={(evt)=> setCityInputState(evt.target.value)} type="text" name="city" placeholder="Ramnicu Valcea" autoComplete="off"/>
                    </label>
                </li>
            </ul>

                <div className={styles.buttonContainer}> 
                <Button type="submit" text="Save setting" />
                
                </div>
        </form>
    );
}

export default Form;