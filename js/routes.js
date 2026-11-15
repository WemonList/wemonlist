import List from './pages/List.js';
import Leaderboard from './pages/Leaderboard.js';
import PlatformerList from './pages/Platformerlist.js';
import Roulette from './pages/Roulette.js';

export default [
    { path: '/', component: List },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/platformerlist', component: PlatformerList },
    { path: '/roulette', component: Roulette },
];
