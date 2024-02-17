import { useState } from "react";
import "./styles.css";

const faqs = [
    {
        title: "Where are these chairs assembled?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
        title: "How long do I have to return my chair?",
        text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
        title: "Do you ship to countries outside the EU?",
        text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
];

export default function App() {
    return (
        <div>
            <Accordion data={faqs} />
        </div>
    );
}

function Accordion({ data }) {
    const [currentOpen, setCurrentOpen] = useState(null);

    return (
        <div className="accordion">
            {data.map((item, index) => (
                <AccordionItem
                    currentOpen={currentOpen}
                    onSetCurrentOpen={setCurrentOpen}
                    num={index}
                    title={item.title}
                    key={index}
                >
                    {item.text}
                </AccordionItem>
            ))}

            <AccordionItem
                currentOpen={currentOpen}
                onSetCurrentOpen={setCurrentOpen}
                num={22}
                title="Test 1"
                key="test1"
            >
                <p>Allows React developers to:</p>
                <ul>
                    <li>Break UI into components</li>
                    <li>Make components reusable</li>
                    <li>Place state effeiciently</li>
                </ul>
            </AccordionItem>
        </div>
    );
}

function AccordionItem({
    num,
    title,
    currentOpen,
    onSetCurrentOpen,
    children,
}) {
    const isOpen = num === currentOpen;
    // console.log(isOpen, num, currentOpen);
    // const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        onSetCurrentOpen(isOpen ? null : num);
    }
    return (
        <div className={`item ${isOpen && "open"}`} onClick={handleClick}>
            <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>{" "}
            <> {/* num[8] will be 09, num[9] will be 10 */} </>
            <h2 className="title">{title}</h2>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen ? <div className="content-box">{children}</div> : null}
        </div>
    );
}
