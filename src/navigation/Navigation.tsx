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
import CreateEmployerProfile from "../components/profile/createEmployerProfile";


const Navigation = ({history} : any) => {
    const {isLogged} = useSelector((state: ApplicationState) => state.authReducer);
    const {existEmployerProfile} = useSelector((state : ApplicationState) => state.profileEmployerReducers);
    const {existEmployeeProfile} = useSelector((state : ApplicationState) => state.profileEmployeeReducers);
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

                        <Route exact path={"/profileempy/edit"} render={() => (
                            <>
                            <NavBar/>
                            <Route component={ProfileScreen}/>
                            <Footer/>
                            </>
                        )}/>
                            
                        <Route exact path={"/createHireProfile"} render={() => (
                            existEmployerProfile
                            ?
                            <Redirect to={'/'}/>
                            :
                            <>
                                <NavBar/>
                                <Route component={CreateEmployerProfile}/>
                                <Footer/>
                            </>
                        )}/>

                        {/* <Route exact path={'creteJobProfile'} render={()=>(
                            existEmployeeProfile
                            ?
                            <Redirect to={'/'}/>
                            :
                            <>
                                <NavBar/>
                                <Route component={CreateEmployeeProfile}/>
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


