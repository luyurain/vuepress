# Ubuntu使用指南

## VM中ubuntud的安装

- 还没有实操，暂略

## 服务器上ubuntu的使用

### 一、如何更新 Ubuntu Linux

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

### 二、Ubuntu的jdk安装

- 略，方法同CentOS中jdk的安装

### 三、安装nginx服务器