import Button from "react-bootstrap/Button";
import "./Footer.css";

function MyFooter({ author, email, linkGithub }) {
    return (
        <footer>
            <p>Author: {author}</p>
            <p>Created by: {email} </p>
            <p>&copy; {new Date().getFullYear()} Lê Quang Đạt. All rights reserved </p>
            <p>Movies Management Project</p>
            <Button variant="link" href={linkGithub}>My Link Github</Button>
        </footer>
    )
}
export default MyFooter;
