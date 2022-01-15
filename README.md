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

# 2021/09/24 Boilerplate
La commande

    npx express-generator-typescript mdblog

permet de créer un projet qui ressemble à ce qu'on veut. On va s'en servir comme source de copier/coller.

Dans MdBlog, on fait 

    npm install typescript --save-dev
    npm install @types/node --save-dev
    npm install express
    npm install @types/express --save-dev
    npm install cookie-parser
    npm install @types/cookie-parser --save-dev
    npm install nodemon --save-dev
    npm install esbuild --save-dev
    npm install ts-node --save-dev
    $(npm bin)/tsc -init

Cette dernière commande crée un fichier tsconfig.json. On changera :

"target" : "es6", car on ne supporte pas IE8  
"outDir": "dist", et on créera ce répertoire  
paths, include et exclude

express est le framework minimal pour faire un serveur node. cookie-parser est un module essentiel pour parser les cookies avec express.
nodemon est un utilitaire cli qui surveille le system de fichier pour redémarer le serveur lorsqu'un fichier source a changé.

ts-node est un hack pour pouvoir lancer des fichiers ts directement, comme si c'était du javascript. Ca sert en développement.

On modifie le fichier package.json pour ajouter la partie nodemonConfig:

    "nodemonConfig": {
      "watch": [
        "src"
      ],
      "ext": "ts, html",
      "ignore": [
        "src/public"
      ],
      "exec": "./node_modules/.bin/ts-node -r tsconfig-paths/register ./src"
    },



Pour la structure du code, je me suis inpiré de /mnt/x/save_disk/src/GAE/helloworld (monté par mount_nfs2)

