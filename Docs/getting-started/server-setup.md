---
description: >-
  Guide from :
  https://github.com/NaturalHistoryMuseum/scratchpads2/wiki/Install-Docker-and-Docker-Compose-(Centos-7)
  and https://linuxize.com/post/how-to-install-and-use-docker-on-centos-7/
---

# Server setup

### 1. Install docker

> Start by updating your system packages and install the required dependencies:

```text
sudo yum update
```

> Install needed packages

```text
$ sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

> Configure the docker-ce repository

```text
$ sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

> Install docker-ce:

```text
$ sudo yum install docker-ce
```

> Add your user to the docker group with the following command.

```text
$ sudo usermod -aG docker $(whoami)
```

> Set Docker to start automatically at boot time:

```text
$ sudo systemctl enable docker.service
```

> Finally, start the Docker service:

```text
$ sudo systemctl start docker.service
```

> To verify that the Docker service is running type:

```
sudo systemctl status docker
```

> The output should look something like this:

```
● docker.service - Docker Application Container Engine
   Loaded: loaded (/usr/lib/systemd/system/docker.service; enabled; vendor preset: disabled)
   Active: active (running) since Wed 2018-10-31 08:51:20 UTC; 7s ago
     Docs: https://docs.docker.com
 Main PID: 2492 (dockerd)
   CGroup: /system.slice/docker.service
           ├─2492 /usr/bin/dockerd
           └─2498 docker-containerd --config /var/run/docker/containerd/containerd.toml
```

### 2. Install docker-compose

> Install Extra Packages for Enterprise Linux

```text
$ sudo yum install epel-release
```

> Install python-pip

```text
$ sudo yum install -y python-pip
```

> Then install Docker Compose:

```text
$ sudo pip install docker-compose
```

> You will also need to upgrade your Python packages on CentOS 7 to get docker-compose to run successfully:

```text
$ sudo yum upgrade python*
```

> To verify a successful Docker Compose installation, run:

```text
$ docker-compose version
```

### 3. Install nodejs

> Install NVM \(Node Version Manager\)  
> To download the `nvm` install script run the following command:

```text
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

> The script will clone the nvm repository from Github to `~/.nvm` and add the script Path to your Bash or ZSH profile.

```text
=> Close and reopen your terminal to start using nvm or run the following to use it now:

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

> As the output above shows, you should either close and reopen your terminal or run the commands to [add the path](https://linuxize.com/post/how-to-add-directory-to-path-in-linux/) to `nvm` script to your current session.

> To verify that nvm was properly installed type:

```text
nvm --version
```

```text
0.33.11
```

#### Install Node.js using NVM <a id="2-install-nodejs-using-nvm"></a>

> Now that the `nvm` tool is installed we can install the latest available version of Node.js, by typing:

```text
nvm install node
```

```text
Downloading and installing node v12.6.0...
Downloading https://nodejs.org/dist/v11.0.0/node-v11.0.0-linux-x64.tar.xz...
######################################################################## 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v11.0.0 (npm v6.4.1)
Creating default alias: default -> node (-> v11.0.0)
```

> Verify the Node.js version, by typing:

```text
node --version
```

The output tell us that the entry with an arrow on the left \(-&gt; v8.12.0\), is the version used in the current shell session and the default version is set to v11.0.0. Default version is the version that will be active when opening new shells.

> To change the currently active version you can use the following command:

```text
nvm use 12.6.0
```

> The output will look like something this:

```text
Now using node v10.13.0 (npm v6.4.1)
```

> To change the default Node.js version type:

```text
nvm alias default 10.13.0
```

```text
default -> 10.13.0 (-> v10.13.0)
```

