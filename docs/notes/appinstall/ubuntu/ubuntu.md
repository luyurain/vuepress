# Ubuntu的安装、部署和配置

## VM 中 Ubuntu 的安装

- 还没有实操，暂略

## 如何更新 Ubuntu Linux

> 新的系统刚安装好，需要先更新一下软件包

1. 命令：`sudo apt update && sudo apt upgrade -y`
- 打开终端，输入命令：
```
sudo apt update && sudo apt upgrade -y
```
- 它实际上不是单个命令，而是两个命令的组合。&& 是一种在 Linux中运行多个命令的方式，使得第二个命令仅在前一个命令成功执行时再执行。

- 当命令`apt upgrade`在安装更新之前要求确认时，最后的`-y`会自动输入`yes`。

> 注意，你也可以单独使用这两个命令，一一使用：
```
sudo apt update
sudo apt upgrade
```

2. 说明：`sudo apt update`
- 此命令更新可用包的本地数据库。如果不运行此命令，本地数据库将不会更新，你的系统将不知道是否有任何新版本的软件包可用。

- 这就是为什么当运行`sudo apt update`命令时，会在输出中看到很多URL。该命令从相应的存储库（即在输出中看到的URL）获取包信息。

- 在命令的末尾，它会告诉可以升级多少个包。可以通过运行以下命令来查看这些包
```
apt list --upgradable
```

3. 说明：`sudo apt upgrade`
- 此命令将已安装软件包的版本与本地数据库相对比，然后它会列出那些有更新版本可用的包。此时，它会询问是否要将已安装的软件包升级到较新的版本。

- 输入`yes`或`y`，或者直接按回车键确认安装更新。

- 所以区别是`sudo apt update`检查新软件包版本的可用性，而`sudo apt upgrade`实际上是安装新版本。

## 在 Ubuntu 上安装 JDK

### 1、安装

- 我这里下载的是jdk-8u181-linux-x64.tar.gz安装包，并将其直接放在了root目录下

- 在/usr/local/下创建java文件夹并进入

```
cd /usr/local/
mkdir java
cd java
```

- 将上面准备好的JDK安装包解压到/usr/local/java中即可

```
tar -zxvf /root/jdk-8u181-linux-x64.tar.gz -C ./
```

- 解压完之后，/usr/local/java目录中会出现一个jdk.1.8.0_181的目录

### 2、配置环境变量

- 编辑/etc/profile文件，在文件尾部加入如下JDK环境配置即可

```
JAVA_HOME=/usr/local/java/jdk1.8.0_181
CLASSPATH=$JAVA_HOME/lib/
PATH=$PATH:$JAVA_HOME/bin
export PATH JAVA_HOME CLASSPATH
```

- 然后执行如下命令让环境变量生效

```
source /etc/profile
```

### 3、验证安装结果

- 输入如下命令即可检查安装结果：

```
java -version
javac
```