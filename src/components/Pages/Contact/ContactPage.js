import React from "react";
import styles from './ContactPage.module.css'
import CardPage from "../../Common/CardPage";
import CardInfo from "../../Common/CardInfo";
import ContactInfo from "../../Common/ContactInfo";

class ContactPage extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <CardPage title={"My current and past pursuits allow me to excel as a coding mentor."
                    } width={800}>
                    <div className={styles.info}>
                        <CardInfo text={"3 reasons I'm the right choice for you:"}
                            choice1={"1) I led R&D at an Israeli startup shortly after" + 
                            " graduating an online coding school. Sharing this" +
                            " experience with students will demonstrate what is possible."}
                            choice2={"2) I responded to the Covid-19 shutdown by creating" +
                            " and leading an online study group with 15+ members."}
                            choice3={"3) I run an education project in Bududa Uganda. My passion for teaching others is what fuels me everyday."}/>
                        <ContactInfo title={"I'd love to share more! Reach out:"}
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