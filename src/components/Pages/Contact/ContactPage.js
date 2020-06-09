import React from "react";
import styles from './ContactPage.module.css'
import CardPage from "../../Common/CardPage";
import CardInfo from "../../Common/CardInfo";
import ContactInfo from "../../Common/ContactInfo";

class ContactPage extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <CardPage title={"2+ years coding experience plus demonstrated success in a mentor role."
                    } width={800}>
                    <div className={styles.info}>
                        <CardInfo text={"3 reasons I'm the right choice for you:"}
                            choice1={"1) I led R&D at an Israeli startup shortly after" + 
                            " graduating an online coding school. More than simply demonstrating coding" +
                            "  knowhow, my experience will inspire online learners to see what is possible."}
                            choice2={"2) I responded to the Covid-19 shutdown by creating" +
                            " and leading an online classroom for 25+ students. My efforts resulted in" +
                            " course grades of 84 and higher for participating students."}
                            choice3={"3) I run a mentor-based education project in Bududa Uganda. Seeing" +
                            " the smiling faces of african kids thriving is forever heartwarming. My" +
                            " passion for bringing out the best in others is what fuels me everyday."}/>
                        <ContactInfo title={"I'd love to share more! Reach out:"}
                            email={"meyertaffel@gmail.com"}
                            phone={"404-946-3390"}/>
                    </div>
                </CardPage>
            </div>
        )
    }
}

ContactPage.propTypes = {};

export default ContactPage;