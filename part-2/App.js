const App = () => (
    <div>
        <Tweet 
            username="Dogtopia" 
            name="Laika" 
            msg="BORK BORK BORK!"
            date="6/9/2024"
            comments={Math.floor(Math.random() * 10) + 1}
            retweets={Math.floor(Math.random() * 10) + 1}
            likes={Math.floor(Math.random() * 10) + 1}
            />
        <Tweet 
            username="needkibs" 
            name="Emma" 
            msg="Why is my food bowl empty??"
            date="6/10/2024" 
            comments={Math.floor(Math.random() * 10) + 1}
            retweets={Math.floor(Math.random() * 10) + 1}
            likes={Math.floor(Math.random() * 10) + 1}            
            />            
        <Tweet 
            username="hugmeplz" 
            name="Bobo" 
            msg="need 2 poop"
            date="6/11/2024" 
            comments={Math.floor(Math.random() * 10) + 1}
            retweets={Math.floor(Math.random() * 10) + 1}
            likes={Math.floor(Math.random() * 10) + 1}            
            />            
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))    