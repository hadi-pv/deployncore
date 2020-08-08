import React , {Component}from 'react';
import './App.css';
import { HashRouter ,Switch,Route,Redirect} from 'react-router-dom';
import About from '../src/components/AboutCompoent';
import Smiles from '../src/components/SmilesComponent';
import Main from '../src/components/MainComponent';
import Sub from '../src/components/SubComponent';
import Home from '../src/components/HomeComponent';
import Photos from '../src/components/GalleryComponent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class App extends Component {
  render(){
    return (
      <HashRouter>
        <div className="App">
        <TransitionGroup>
          <CSSTransition classNames="page" timeout={3000}>
            <Switch>
              <Route exact path='/' component={()=><Home />}/>
              <Route exact path='/about' component={()=><About/>} />
              <Route exact path='/smiles' component={() => <Smiles />} />
              <Route exact path="/home" component={()=> <Home />} />
              <Route exact path='/main' component={()=><Main />} />
              <Route exact path='/sub' component={() => <Sub />} />
              <Route exact path='/gallery' component={() => <Photos />} />
              <Redirect to='/'/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        </div>
      </HashRouter>
  
    );
  
  }
}

export default App;
