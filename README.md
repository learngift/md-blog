# tutorial pour faire un mini blog node mongodb inspiré de Markdown-Blog

Le but de ce projet est de faire un mini blog en utilisant node, express, mongodb et de documenter le process de création pour éventuellement en faire un tutorial.

Ce README est donc le journal de mes étapes, tatonnements, erreurs, réflexions,...

## 20 sept 2021

    mkdir MdBlog
    cd MdBlog
    npm init
    git init
    git add package.json
    git commit -m "premier commit"

Sous github, création d'un repository. Je ne m'embête pas à renommer la brancher master, mais au moment de faire le push, j'ai envie de changer d'identité.

    git config --list
    rm -rf .git
    git config user.name pulpficti
    git config user.email pulpficti@gmail.com
    git add package.json README.md
    git commit -m "premier commit"

J'édite ~/.ssh/config pour ajouter une section

    Host github_as_pulp
      Hostname github.com
      User git
      IdentityFile /home/jef/.ssh/pulpficti/id_rsa
      IdentitiesOnly yes

Je crée les clefs et je l'associe à mon compte github

    ssh-keygen -t rsa -b 4096 -C "pulpficti@gmail.com"

    git remote add origin git@github_as_pulp:learngift/md-blog.git
    git push -u origin master