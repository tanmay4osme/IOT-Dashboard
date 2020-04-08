# Installation & Setup

## Install tooling

{% tabs %}
{% tab title="MAC" %}
### Install homebrew package manager

{% hint style="info" %}
Homebrew will ask for a root password ! After installation you need to restart your terminal application
{% endhint %}

```bash
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### Install Git 

{% hint style="info" %}
If you don't want to work with the CLI you can install a GUI version from this link : [https://desktop.github.com/](https://desktop.github.com/)
{% endhint %}

```text
$ brew install git

# To verify that git installed succesfully run
$ git --version
```

### Install Node.js and NPM

> Take a look at the node website \([https://nodejs.org/en/](https://nodejs.org/en/)\) and pick the LTS version.

```bash
$ brew install node@12.16.2
```

### Install Docker

Download and install docker from the following link[  
https://docs.docker.com/docker-for-mac/install/](https://docs.docker.com/docker-for-mac/install/)

### Install Vue CLI \(optional\)

{% hint style="warning" %}
You only need to install the Vue CLI when you want to create new vue apps
{% endhint %}

```bash
$ npm i -g @vue/cli
```

{% hint style="success" %}
You are now ready to proceed !
{% endhint %}
{% endtab %}

{% tab title="Windows" %}

{% endtab %}
{% endtabs %}

## Clone the repository

Clone the  repository using the following command:

```
$ git clone https://github.com/JensVanhulst/IOT-Dashboard.git
```

## Setup development environment

{% tabs %}
{% tab title="Client" %}
#### Install packages

> Install the node packages

```text
$ cd App/client
$ npm install
```

#### To run development server \(client\)

> If you want to develop on web version run the commands below This will start a local development server on `http://localhost:8080`

```text
$ npm run serve
```

> If you want to develop for electron app run commands below This will open an electron window with hot reloading

```text
$ npm run electron:serve
```
{% endtab %}

{% tab title="Server" %}
#### Install packages

> Install the node packages

```text
$ cd App/server
$ npm install
```

#### To run development server \(server\)

> This will start a local development server on `http://localhost:5000`

```text
$ npm start
```
{% endtab %}
{% endtabs %}

#### 



