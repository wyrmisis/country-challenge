import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';
import { useState } from 'preact/hooks';

import Home from '../routes/home';
import Country from '../routes/country';
import NotFoundPage from '../routes/notfound';
import Header from './header';

const App: FunctionalComponent = () => {
    const [isDark, setIsDark] = useState<boolean>(false);

    return (
        <div id="app" class={isDark && 'dark'}>
            <Header onDarkModeToggle={(): void => setIsDark(!isDark)} />
            <Router>
                <Route path="/" component={Home} />
                <Route path="/country/:countryId" component={Country} />
                <NotFoundPage default />
            </Router>
        </div>
    );
};

export default App;
