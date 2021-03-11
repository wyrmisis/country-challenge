import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';
import { useState } from 'preact/hooks';

import Home from '../routes/home';
import NotFoundPage from '../routes/notfound';
import Header from './header';

const App: FunctionalComponent = () => {
    const [isDark, setIsDark] = useState<boolean>(false);

    return (
        <div id="app" class={isDark && 'dark'}>
            <Header onDarkModeToggle={(): void => setIsDark(!isDark)} />
            <Router>
                <Route path="/" component={Home} />
                <NotFoundPage default />
            </Router>
        </div>
    );
};

export default App;
