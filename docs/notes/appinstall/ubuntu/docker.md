# Docker的安装和使用

## 在 Ubuntu 上安装 Docker

在 Ubuntu 上安装 Docker 非常直接。我们将会启用 Docker 软件源，导入 GPG key，并且安装软件包。
- 首先，更新软件包索引，并且安装必要的依赖软件，来添加一个新的 HTTPS 软件源：
```
sudo apt update
sudo apt install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
```
- 使用下面的`curl`导入源仓库的 GPG key：
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
- 将 Docker APT 软件源添加到你的系统：
```
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```
> 如果是在国内的服务器可以使用阿里的源`sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"`

> 现在，Docker 软件源被启用了，你可以安装软件源中任何可用的 Docker 版本。

- 安装 Docker 最新版本，运行下面的命令。
```
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io
```
- 一旦安装完成，Docker 服务将会自动启动。你可以输入下面的命令，验证它：
```
sudo systemctl status docker
```
输出将会类似下面这样：
```
● docker.service - Docker Application Container Engine
     Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
     Active: active (running) since Thu 2020-05-21 14:47:34 UTC; 42s ago
...
```

## 卸载 Docker
在卸载 Docker 之前，你最好 移除所有的容器，镜像，卷和网络。

- 运行下面的命令停止所有正在运行的容器，并且移除所有的 docker 对象：
```
docker container stop $(docker container ls -aq)
docker system prune -a --volumes
```
- 现在你可以使用apt像卸载其他软件包一样来卸载 Docker：
```
sudo apt purge docker-ce
sudo apt autoremove
```

## Docker 常用命令

### 一、docker基础命令

- 启动docker
```
systemctl start docker
```
- 关闭docker
```
systemctl stop docker
```
- 重启docker
```
systemctl restart docker
```
- docker设置随服务启动而自启动
```
systemctl enable docker
```
- 查看docker 运行状态

>------如果是在运行中 输入命令后 会看到绿色的active
```
systemctl status docker
```
- 查看docker 版本号信息
```
docker version

docker info
```

- docker 帮助命令

> 忘记了某些命令便可使用此进行查看与回顾
```
docker --help
```
> 比如 咱忘记了 拉取命令 不知道可以带哪些参数 咱可以这样使用
```
docker pull --help
```

### 二、docker镜像命令

- 查看自己服务器中docker 镜像列表
```
docker images
```
- 搜索镜像
```
docker search 镜像名

docker search --filter=STARS=9000 mysql   //搜索 STARS >9000的 mysql 镜像
```
- 拉取镜像 不加tag(版本号) 即拉取docker仓库中 该镜像的最新版本latest ,加:tag 则是拉取指定版本
```
docker pull 镜像名 
docker pull 镜像名:tag
```
- 运行镜像
```
docker run 镜像名
docker run 镜像名:Tag
```
- 删除镜像
```
#删除一个
docker rmi -f 镜像名/镜像ID

#删除多个 其镜像ID或镜像用用空格隔开即可 
docker rmi -f 镜像名/镜像ID 镜像名/镜像ID 镜像名/镜像ID

#删除全部镜像  -a 意思为显示全部, -q 意思为只显示ID
docker rmi -f $(docker images -aq)
```
- 强制删除镜像
```
docker image rm 镜像名称/镜像ID
```

### 三、docker容器命令

- 查看正在运行容器列表
```
docker ps
```
- 查看所有容器 -----包含正在运行 和已停止的
```
docker ps -a
```
- 运行一个容器
```
# -it 表示 与容器进行交互式启动 -d 表示可后台运行容器 （守护式运行）  --name 给要运行的容器 起的名字  /bin/bash  交互路径
docker run -it -d --name 要取的别名 镜像名:Tag /bin/bash 
```
> 例如我们要启动一个redis 把它的别名取为redis001 并交互式运行 需要的命令 —我这里指定版本号为5.0.5
```
#1. 拉取redis 镜像
docker pull redis:5.0.5
#2.命令启动
docker run -it -d --name redis001 redis:5.0.5 /bin/bash
```

