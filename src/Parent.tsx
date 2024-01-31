import { Child, ChildAsFC } from "./Child"

const Parent = () => {
    return (
        <ChildAsFC colour="pink" onClick={() => console.log("Mahnoi rak papi")}>
            Henloooo
        </ChildAsFC>


    )
}

export default Parent