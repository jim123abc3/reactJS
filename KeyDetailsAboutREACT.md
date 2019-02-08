<React.Fragment>
This allows us to return Sibling Elements. Without this it would throw error
</React.Fragment>

<!-- -------------------------------------------------------------------------------------------------------------------------------- -->

<React.Fragment>
    <form className="store-selector">
        <h2>Enter a store bitch</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store --></button>
    </form>
</React.Fragment>

<!-- -------------------------------------------------------------------------------------------------------------------------------- -->
Comments mustbe inside fragment or element, other it will be error: 

<form className="store-selector">
    {/* Comments in the code are good */}    
    <h2>Enter a store bitch</h2>
</form>

<!-- ------------------------------------------------------------------------------------------------------------------------------ -->

<button onClick={this.handClick}>Click This!</button>
this.handleClick doesnt have ending (), because that will make it run when website mounts/loads page 
not having the (), basically means, only do this when i activate it, rather than activate on page Load 

<input type="text" required placeholder="Store Name" defaultValue={getFunName()} />


<!-- --------------------------------------------IMPORTANT FUNCTOINS ---------------------------------------------------------------------------------- -->
componentDidMount(){

}