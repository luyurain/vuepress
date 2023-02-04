# JDK在linux上的安装

- notice：这里安装的是Oracle JDK

## 环境声明

- 本页面所有文档的实验、环境、工具、软件均基于CentOS 7.9 64bit操作系统进行
- 为了避免安装过程中不必要的麻烦发生，建议先关闭防火墙

```
systemctl stop firewalld.service
```

## 准备JDK安装包

- 我这里下载的是jdk-8u181-linux-x64.tar.gz安装包，并将其直接放在了root目录下

## 卸载已有的openjdk(如果有)

- 如果系统自带有openJDK，可以按照如下步骤卸载之
- 首先查找已经安装的openJDK包

```
rpm -qa | grep java
```

- 接下来可以将java开头的安装包均卸载即可：

```
yum -y remove ...
```

## 创建目录并解压

1. 在/usr/local/下创建java文件夹并进入

```
cd /usr/local/
mkdir java
cd java
```

2. 将上面准备好的JDK安装包解压到/usr/local/java中即可

```
tar -zxvf /root/jdk-8u181-linux-x64.tar.gz -C ./
```

- 解压完之后，/usr/local/java目录中会出现一个jdk.1.8.0_181的目录

## 配置JDK环境变量

- 编辑/etc/profile文件，在文件尾部加入如下JDK环境配置即可

```
JAVA_HOME=/usr/local/java/jdk1.8.0_181
CLASSPATH=$JAVA_HOME/lib/
PATH=$PATH:$JAVA_HOME/bin
export PATH JAVA_HOME CLASSPATH
```

- 然后执行如下命令让环境变量生效

```
soure /etc/profile
```

## 验证JDK安装结果

- 输入如下命令即可检查安装结果：

```
java -version
javac
```
