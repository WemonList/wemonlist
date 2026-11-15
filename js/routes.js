import List from './pages/List.js';
import PlatformerList from './pages/Platformerlist.js';
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';

export default [
    { path: '/', component: List },
    { path: '/platformerlist', component: PlatformerList },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/roulette', component: Roulette },
];
