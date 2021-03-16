# Hacker du dimanche

Ce projet est un projet de cours, en groupe de 3. C'est un projet NodeJS utilisant également Docker et NGinx

## Consignes

Le	système	est	composé:

• D'une	base de	données	mariaDB. Celle-ci sera chiffrée	et compressée. Un rôle admin délégué (pour		phpMyadmin, RW + admin sur la base) et un rôle application (lecture	écriture) pour les deux	instances	de	serveur	Nodejs

• 2	instances NodeJS hébergeant	la	même application js	de saisie et de	lecture	de formulaire (saisie	de	coordonnées	:	nom,	prénom,	date de	naissance,	adresse	mail, téléphone, adresse postale).
Les	saisies	devront	être sécurisées	contre l'injection	SQL.

• Une instance Nginx agissant en réverse proxy et load balancer	sur	les	deux instances	NodeJS.	L'accès	extérieur à	ce serveur ne pourra se	faire qu'en	HTTPS. La mise en oeuvre d'un certificat auto signé devra être réalisée.

• Un add-on	Nginx WAF (version éval	30 jours) jouant le	rôle de	firewall et	de protection contre les	attaques WEB classique.


## Initialisation du projet 

npm init


## Installation 

npm install


## Démarrer le projet

node app.js


## License
[MIT](https://choosealicense.com/licenses/mit/)