
Logical Component ( Stateful component )
  do logic 
  state 
  Lifecycle Methods
    call back functions
    mounting
      rendering a component a page
  class 


Presentational Component ( stateless component )
  displaying onto the screen  
  const





  Lifecycle Methods
  Callbacks functions
  Mounting
    - rendering a component / Mounting
  Props change
  State change






Initialization:  (Component is rendered for the first time)
    *componentWillMount()
    render()
    componentDidMount()

  State changes:  (State changes can cause lifecycle hooks to run)
    shouldComponentUpdate()
    *componentWillUpdate()
    render()
    componentDidUpdate()

  Props changes: (A component receiving new props will trigger lifecycle hooks)
    *componentWillReceiveProps()
    shouldComponentUpdate()
    *componentWillUpdate()
    render()
    componentDidUpdate()

  Unmounting
    componentWillUnMount() 

    componentDidMount() {
      this.setState({ todos: ['eat breakfast']})
    }

    componentDidMount() {
      // grab the todos db
      this.setState({ todos: [...db] })
    }


  Gone in React 17:
    componentWillMount
    componentWillRecieveProps
    componentWillUpdate


  New in React 17: 
    UNSAFE_componentWillMount
    UNSAFE_componentWillRecieveProps
    UNSAFE_componentWillUpdate
    getDerivedStateFromProps
    getSnapshotBeforeUpdate


HOC 
  Higher ordered component

State - storage { users: [], firstName: '' }
  JS Object we can store properties in
  Component Storage
  When a value changes in state, render is called


Props 
  Properties passed down parent to child
  One way 
  Read only 



  /*                 Contact List Structure

                          Index (styles)
                            |
                           App (addC) (contacts) (remove)   
                           /  \         
                  (addC) Form   Contacts (contacts)  (remove)    
                                 |
                                Contact (remove) 

  */