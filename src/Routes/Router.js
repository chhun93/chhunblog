import React,{Component} from "react"
import { Switch,Route } from "react-router-dom";
import { Content,WritePost } from "../Components";

const Router = () => {
    <Switch>
        <Route exact path = "/" component={Content}/>
        <Route exact path = "/writepost" component={WritePost}/>
    </Switch>
}