const App = () => (
    <div>
        <Person name="Macy" age={12} hobbies={['crochet', 'reading', 'theater']}/>       
        <Person name="Alexander" age={19} hobbies={['band', 'swimming', 'movies']}/>     
        <Person name="Robert" age={18} hobbies={['stargazing', 'pinball', 'gaming']}/>                
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))       