import React, {useState} from "react";
import Button from "../button/button.jsx";
import styles from "./checkbox-from.module.scss";


function CheckboxForm (props) {
    const [email, setEmailChecked] = useState(false);
    const [notifications, setNotificationsChecked] = useState(true);
    const [messages, setMessagesChecked] = useState(true);
    const [calls, setCallsChecked] = useState(true);
    const [emailMessages, setEmailMessagesChecked] = useState(false);
    const [notificationsMessages, setNotificationsMessagesChecked] = useState(false);
    const [textMessages, setTextMessagesChecked] = useState(false);

    return (
        <form className={styles.container} method="post" action="https://httpbin.org/post"> 

           <div className={styles.wrapper}>
                <h3 className={styles.header}> Notifications </h3>
                <ul className={styles.list}>
                   <li> 
                       <input className={styles.input} id="email" name="email" type="checkbox" checked={email} onChange={() => setEmailChecked(!email)}/>
                        <label className={styles.label} htmlFor="email">
                          <span className={styles.mark}></span>
                          <span className={styles.name}> Email </span>
                        </label>
                    </li>
                   <li> 
                       <input className={styles.input} id="notifications" name="push-notifications" type="checkbox" checked={notifications} onChange={() => setNotificationsChecked(!notifications)}/>
                        <label className={styles.label}  htmlFor="notifications">
                          <span className={styles.mark}></span>
                          <span className={styles.conditionContainer}>
                          <span className={styles.name}> Push notifications </span>
                          <span className={styles.note}>  For your mobile or tablet device </span>
                          </span>
                        </label>
                    </li>
                   <li> 
                       <input className={styles.input} id="messages" name="text-messages" type="checkbox" checked={messages} onChange={() => setMessagesChecked(!messages)}/>
                        <label className={styles.label}  htmlFor="messages">
                          <span className={styles.mark}></span>
                          <span className={styles.name}> Text Messages </span>
                        </label>
                    </li>

                    <li> 
                       <input className={styles.input} id="calls" name="phone-calls" type="checkbox" checked={calls} onChange={() => setCallsChecked(!calls)}/>
                        <label className={styles.label}  htmlFor="calls">
                          <span className={styles.mark}></span>
                          <span className={styles.name}> Phone Calls </span>
                        </label>
                    </li>
                </ul>
            </div>
           <div className={styles.wrapper}>
                <h3 className={styles.header}> Messages </h3>
                <ul className={styles.list}>
                   <li> 
                       <input className={styles.input} id="email-messages" name="email" type="checkbox" checked={emailMessages} onChange={() => setEmailMessagesChecked(!emailMessages)}/>
                        <label className={styles.label}  htmlFor="email-messages">
                          <span className={styles.mark}></span>
                          <span className={styles.name}> Email </span>
                        </label>
                    </li>
                   <li> 
                       <input className={styles.input} id="notifications-messages" name="push-notifications" type="checkbox" checked={notificationsMessages} onChange={() => setNotificationsMessagesChecked(!notificationsMessages)}/>
                        <label className={styles.label}  htmlFor="notifications-messages">
                          <span className={styles.mark}></span>
                          <span className={styles.name}> Push notifications </span>
                        </label>
                    </li>
                   <li> 
                       <input className={styles.input} id="text-messages" name="text-messages" type="checkbox" checked={textMessages} onChange={() => setTextMessagesChecked(!textMessages)}/>
                        <label className={styles.label}  htmlFor="text-messages">
                          <span className={styles.mark}></span>
                          <span className={styles.name}> Text Messages </span>
                        </label>
                    </li>
                </ul>
            </div>

            <div className={styles.buttonContainer}> 
            <Button type="submit" text="Save" />
            </div>

        </form>
    );


};

export default CheckboxForm;