import React from "react";
import styles from './ContactPage.module.css'
import CardPage from "../../Common/CardPage";
import CardInfo from "../../Common/CardInfo";
import ContactInfo from "../../Common/ContactInfo";

class ContactPage extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <CardPage title={"The aim? Engagement, Simplicity, and Focus for your user." +
                    " Let's iterate."
                    } width={800}>
                    <div className={styles.info}>
                        <CardInfo title={"Need a problem solved?"}
                            text={"For an even sharper reply, include an answer to one of" +
                            " these questions:"}
                            choice1={"1) What is your website's purpose? How does it mesh" +
                            " with your vision?"}
                            choice2={"2) What feelings should your users experience? Be" +
                            " descriptive! Use your stage voice :-)"}
                            choice3={"3) Dream or Nightmare? Describe an experience you" +
                            " had working with a developer."}/>
                        <ContactInfo title={"Put it all together and reach out:"}
                            email={"meyertaffelwebsolutions@gmail.com"}
                            phone={"404-946-3390"}/>
                    </div>
                </CardPage>
            </div>
        )
    }
}

ContactPage.propTypes = {};

export default ContactPage;