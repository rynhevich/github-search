const MILLION = 1000000;
const THOUSAND = 1000;
const TEN = 10;

export default class GithubService {

    #apiBase = 'https://api.github.com/users/'

    getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`something went wrong`)
        };

        return await res.json();
    };

    getUser = async (username) => {
        const userData = await this.getResource(`${this.#apiBase}${username}`)

        if (!userData) {
            return false
        };

        return this.#transformUserData(userData)
    };

    getRepos = async (reposURL, page, maxCardsOnPage) => {
        const reposList = await this.getResource(`${reposURL}?per_page=${maxCardsOnPage}&page=${page}`)

        if (reposList && !reposList.length) {
            return []
        };
        
        return reposList.map((repo) => this.#transformRepo(repo))
    };

    #transformRepo = (repo) => ({
        repoId: repo.id,
        repoTitle: repo.name,
        repoDescription: repo.description,
        repoURL: repo.html_url,
    });

    #transformLargeNumber = (num) => {      
        if (num >= MILLION) return Math.floor(num / MILLION * TEN) / TEN + 'M';
        if (num >= THOUSAND) return Math.floor(num / THOUSAND * TEN) / TEN + 'k';
        return num;
    };

    #transformUserData = (userData) => ({
        name: userData.name,
        login: userData.login,
        avatarURL: userData.avatar_url,
        reposNumber: userData.public_repos,
        reposURL: userData.repos_url,
        userURL: userData.html_url,
        followers: this.#transformLargeNumber(userData.followers),
        following: this.#transformLargeNumber(userData.following),
        userFound: true,
    });
};
