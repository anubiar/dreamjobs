import React from "react";
import {
    Router,
    Route,
    Redirect, Switch
} from 'react-router'
import AuthScreen from "../screens/auth/AuthScreen";
import {useSelector} from "react-redux";
import {ApplicationState} from "../redux/reducers";
import Main from "../screens/main/Main";
import NavBar from "../components/navBar/NavBar";
import RegisterScreen from "../screens/auth/RegisterScreen";
import PageNotFound from "../screens/pageNotFound/PageNotFound";
import Footer from "../components/footer/Footer";
import ProfileScreen from "../screens/profile/ProfileScreen";


const Navigation = ({history} : any) => {
    const {isLogged} = useSelector((state: ApplicationState) => state.authReducer);
    return (
        <Router history={history}>
            <Switch>
                {!isLogged ?
                    <Switch>
                        <Route exact path={'/'} component={AuthScreen}/>
                        <Route exact path={'/SignIn'} component={AuthScreen}/>
                        <Route exact path={'/SignUp'} component={RegisterScreen}/>
                        <Route path={'/*'} component={() => <Redirect to={'signIn'}/>}/>
                    </Switch>

                    :
                    <Switch>
                        <Route exact path={'/'} render={() =>(
                            <>
                                <NavBar/>
                                <Route component={Main}/>
                                <Footer/>
                            </>)}
                        />
                        <Route exact path={'/signIn'} render={() =>(
                            !isLogged ?
                                <Route component={AuthScreen} />
                                :
                                <Redirect to={'/'}/>
                        )
                        }/>
                        <Route exact path={'/signUp'} render={()=>(
                            !isLogged ?
                                <Route component={RegisterScreen} />
                                :
                                <Redirect to={'/'}/>
                        )
                        }/>

                        <Route exact path={"/profileempy/edit"}>
                            <NavBar/>
                            <Route component={ProfileScreen}/>
                            <Footer/>
                        </Route>

                        

                        {/* <Route exact path={'/profile'} render={()=>(
                            <>
                                <NavBar/>
                                <Route component={}/>
                                <Footer/>
                            </>)}
                        /> */}

                        {/* <Route exact path={'/profile/edit'} render={()=>(
                            <>
                                <NavBar/>
                                <Route component={EditProfile}/>
                                <Footer/>
                            </>)}
                        /> */}

                        
                        {/* <Route path={'/profile'} render={() => (
                            <>
                                <NavBar/>
                                <ProfileForeignScreen/>
                                <Footer/>
                            </>
                        )}/> */}
                        <Route path={'/*'} component={PageNotFound}/>
                    </Switch>
                }
                <Route path={'/*'} component={PageNotFound}/>
            </Switch>
        </Router>
    )
}

export default Navigation
