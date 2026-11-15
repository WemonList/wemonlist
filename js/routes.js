import List from './pages/List.js';
import Leaderboard from './pages/Leaderboard.js';
import Listp from './pages/Listp.js';
import LeaderboardP from './pages/LeaderboardP.js';
import Roulette from './pages/Roulette.js';

export default [
    { path: '/', component: List },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/P', component: Listp },
    { path: '/leaderboardP', component: LeaderboardP },
    { path: '/roulette', component: Roulette },
];
