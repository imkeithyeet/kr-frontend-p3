import React from "react";

function Contact() {


    return (
            <div>
                <h2 style={{color: "black"}}>Contact</h2>
                <h3>Find us at some address at some place or call us at some number</h3>
                <h2>Reserve a table, ask for today's special, or just send us a message:</h2>
                <form>
                    <label>Name:</label>
                    <input placeholder="Name..." type="text" name="name" />
                    <label>How Many People</label>
                    <input placeholder="How Many People" type="text" name="howmanypeople" />
                    <label>Date</label>
                    <input placeholder="Date" type="date" name="date" />
                    <label>Message</label>
                    <input placeholder="Message" type="text" name="message" />
                    <div className="Submit">
                    <button  type="submit">Send Message</button>
                    </div>
                </form>
            </div>
    )
}

export default Contact;