
function Quiz(){
    return(
        <>
        <div className="question-container">

            <div>
                <h1>Question</h1>
                <h3>1 of 15</h3>
                <h2>Which is the only mammal that cannot jump</h2>
            </div>

            <div className="options-container">
                <div>elephant</div>
                <div>Dog</div>
                <div>Goat</div>
                <div>Lion</div>
            </div>
            
            <div className="buttons">
                <button className="previous">previous</button>
                <button className="next">next</button>
                <button className="quit">Quit</button>
            </div>
            
        </div>
        <hr />
        </>
    )
}
export default Quiz