import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import PagePromotionSearch from './promotion/Search';
import PagePromotionForm from './promotion/Form';

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={PagePromotionSearch}/>
                <Route path='/create' component={PagePromotionForm}/>
                <Route path='/edit/:id' component={PagePromotionForm}/>
            </Switch>
        </Router>
    )
}

export default Root;