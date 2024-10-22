        document.addEventListener('DOMContentLoaded',function() {
            const avatar = document.querySelector('#avatar');
            const nome = document.querySelector('#name');
            const username = document.querySelector('#username');
            const repos = document.querySelector('#repos');
            const followers = document.querySelector('#followers');
            const following = document.querySelector('#following');
            const link = document.querySelector('#link');
            const bio = document.querySelector('#bio');

            fetch('https://api.github.com/users/caiodiasol')
            .then(function(res){
                return res.json();
            })
            .then(function(json) {
                avatar.src = json.avatar_url;
                nome.innerHTML = json.name;
                username.innerHTML = json.login;
                repos.innerHTML = json.public_repos;
                followers.innerHTML = json.followers;
                following.innerHTML = json.following;
                link.href = json.html_url;
                bio.innerHTML = json.bio;
            })
            .catch(function(error){
                alert('Um erro inesperado aconteceu ao carregar a página, tente novamente em instantes.');
            }) 
        })