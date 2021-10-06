import React,{ useState, useContext, createContext} from "react";

const userContext = createContext([
    {
        firstName: "Bob",
        lastName: "Bobberson",
        suffix: 1,
        email: "bobbobberson@exaple.com"
    },
    (obj) => obj
]);

const LevelFive = () => {
    const [user, setUser] = useContext(userContext);

    return(
        <div>
            <h5>{`${user.firstName} ${user.lastName} the ${user.suffix} born`}</h5>
            <button
            onClick={() => {setUser(Object.assign({}, user, {suffix: user.suffix+1}))}}
            >increment</button>
        </div>
    )
}

const LevelFour = () => (
    <div>
        <h2>Fourth Level</h2>
        <LevelFive />
    </div>
)

const LevelThree = () => (
    <div>
        <h2>Third Level</h2>
        <LevelFour />
    </div>
)

const LevelTwo = () => (
    <div>
        <h2>Second Level</h2>
        <LevelThree />
    </div>
)


const ContextComponent = () => {
    const userState = useState({
        firstName: "james",
        lastName: "jamson",
        suffix: 1,
        email: "jamesjamesson@example.com"
    });

    return (
        <userContext.Provider value={userState}>
            <h1>First Level</h1>
            <LevelTwo />
        </userContext.Provider>
    )
}

export default ContextComponent;