Bienvenue sur l'API MSPR
=====================


Pré-requis
-------------

Afin de pouvoir lancer l'application, vous devez avoir un IDE : 

 - [Eclipse](https://www.eclipse.org/downloads/packages/release/2020-03/r/eclipse-ide-java-developers)
 ou
 - [IntelliJ](https://www.jetbrains.com/fr-fr/idea/download/#section=mac)

Une fois ceci fait, veuillez installer au minimum [Java JDK 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) sur votre machine minimum.
 
 Veuillez ensuite importer le projet dans votre IDE sous format Maven et faites un <i class="icon-refresh"></i>auto-import.

> **Note:**

> - Si vous avez un problème lors de l'import , n'hésitez pas à consulter la documentation de votre IDE.
> - Si vous êtes sur IntelliJ et avez des difficultés pour les imports maven, allez dans le terminal et faites
> `mvn clean` et un `mvn install`
> - Il y a dans les dépôts maven une dependance pour l'auto-compilation, pour l'activer dans votre IDE , veuillez regarder la documentation ci-jointe [<i class="icon-file"></i>](https://dev.to/suin/spring-boot-developer-tools-how-to-enable-automatic-restart-in-intellij-idea-1c6i)

Port et lancement de l'application
-------------

Quand vous allez run l'application, elle va se lancer sur le port 8080, si vous voulez le changer, ajoutez `server.port = monPort` dans le <i class="icon-file"></i> application.properties.


#### Recuperation du token

Afin d'accéder aux différents controller, vous allez devoir demander un token qui va vous autoriser à interagir avec l'API, pour cela, vous devez faire une requête POST sur /authenticate (par défaut : http://localhost:8080/authenticate) en envoyant un objet JSON :

    {
	    "username":"monUsername",
	    "password":"monPassword"
	}

#### Creation d'un Login

Si vous n'avez pas de Login, vous ne pouvez pas créer de token, pour cela, faite un post sur /Login en envoyant le même objet JSON que celui de la Recuperation du token ci-dessus.