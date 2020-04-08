# Build for production

{% tabs %}
{% tab title="Client" %}
### Build client 

> If you want to build for electron app make sure you are in the App folder and run :

```text
$ npm run electron:build
```

> If you want to build the web version run : This will create a `dist` folder that you need to transfer the content to the `public` folder.

```text
$ npm run build
```
{% endtab %}

{% tab title="Server" %}
### Build server

Make a directory on the server ...

> To build the docker containers run:

```text
$ docker-compose build
```

> To spin up the server instance run:

```text
$ docker-compose up
```

> To stop the server instance run :

```text
$ docker-compose down
```

> To get into a docker container and get a bash shell run:

```text
$ docker exec -it <container name> /bin/bash
```
{% endtab %}
{% endtabs %}

