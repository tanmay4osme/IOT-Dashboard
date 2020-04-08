---
description: >-
  This page will guide you through the installation and setup of the tools
  needed to work on the project.
---

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
{% endtab %}

{% tab title="Windows" %}
### Install Git 

{% hint style="info" %}
If you don't want to work with the CLI you can install a GUI version from this link : [https://desktop.github.com/](https://desktop.github.com/)
{% endhint %}

1. Download git from the following link : [https://git-scm.com/download/win](https://git-scm.com/download/win)

2. When you've successfully started the installer, you should see the **Git Setup** wizard screen. Follow the **Next** and **Finish** prompts to complete the installation. The default options are pretty sensible for most users.

3. Open a Command Prompt \(or Git Bash if during installation you elected not to use Git from the Windows Command Prompt\).

4. Run the following commands to configure your Git username and email using the following commands, replacing Emma's name with your own. These details will be associated with any commits that you create:

```text
$ git config --global user.name "a b"
$ git config --global user.email "a@b.com"
```

### Install Node.js and NPM

> Install Nodejs using the following link   
> [https://www.guru99.com/download-install-node-js.html](https://www.guru99.com/download-install-node-js.html)

### Install Docker

1. Double-click **Docker Desktop Installer.exe** to run the installer.

   If you haven’t already downloaded the installer \(`Docker Desktop Installer.exe`\), you can get it from [**Docker Hub**](https://hub.docker.com/editions/community/docker-ce-desktop-windows/). It typically downloads to your `Downloads` folder, or you can run it from the recent downloads bar at the bottom of your web browser.  

2. Follow the instructions on the installation wizard to accept the license, authorize the installer, and proceed with the install.

   When prompted, authorize the Docker Desktop Installer with your system password during the install process. Privileged access is needed to install networking components, links to the Docker apps, and manage the Hyper-V VMs.  

3. Click **Finish** on the setup complete dialog and launch the Docker Desktop application.

### Install Vue CLI \(optional\)

{% hint style="warning" %}
You only need to install the Vue CLI when you want to create new vue apps
{% endhint %}

```bash
$ npm i -g @vue/cli
```
{% endtab %}
{% endtabs %}

{% hint style="success" %}
You are now ready to proceed !
{% endhint %}

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



