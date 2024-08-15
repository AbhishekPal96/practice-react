import { useContext } from "react";
import UserContext from "../utils/UserContext"
const About = () => {

    const {loggedInUser} = useContext(UserContext);

    return(
        <div>
            <h1>About</h1>
            <h2>Hii hello hni knlkdhvlknvldsvdv</h2>
            <h1>{loggedInUser}</h1>
        </div>
    );
}

export default About;