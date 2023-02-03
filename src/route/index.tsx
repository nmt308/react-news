import DefaultLayout from '../layout';
import * as Page from '../pages';

type RouteType = {
    path: string;
    component: () => React.ReactElement;
    layout: ({ children }: { children: React.ReactNode }) => React.ReactElement;
};
export const routes: RouteType[] = [
    { path: '/', component: Page.Home, layout: DefaultLayout },
    { path: '/category/:category', component: Page.Category, layout: DefaultLayout },
    { path: '/search', component: Page.Search, layout: DefaultLayout },
];
