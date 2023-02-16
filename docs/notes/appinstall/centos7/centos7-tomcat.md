# Tomcat安装部署

## 准备安装包
- 这里使用的是8.5.79版本：apache-tomcat-8.5.79.tar.gz，直接将其放在了/root目录下

## 解压并安装

- 在/usr/local/下创建tomcat文件夹并进入

```
cd /usr/local/
mkdir tomcat
cd tomcat
```

- 将tomcat安装包解压到/usr/local/tomcat中即可

```
[root@localhost tomcat]# tar -zxvf /root/apache-tomcat-8.5.79.tar.gz -C ./
```

- 解压完之后，/usr/local/tomcat目录中会出现一个apache-tomcat-8.5.79的目录

## 启动tomcat

- 直接进apache-tomcat-8.5.79目录，执行其中bin目录下的启动脚本即可

```
[root@localhost apache-tomcat-8.5.79]# cd bin/
[root@localhost bin]# ./startup.sh
```

- 这时候浏览器访问：ip:8080,得到画面说明启动成功

## 配置快捷操作和开机启动

- 首先进入/etc/rc.d/inti.d目录，创建一个名为tomcat的文件，并赋予执行权限

```
cd /etc/rc.d/init.d/
touch tomcat
chmod +x tomcat
```

- 接下来编辑tomcat文件，并在其中加入如下内容：

```
#!/bin/bash
#chkconfig:- 20 90
#description:tomcat
#processname:tomcat
TOMCAT_HOME=/usr/local/tomcat/apache-tomcat-8.5.79
case $1 in
        start) su root $TOMCAT_HOME/bin/startup.sh;;
        stop) su root $TOMCAT_HOME/bin/shutdown.sh;;
        *) echo "require start|stop";;

esac
```

- 这样后续对于tomcat的开启和关闭只需要执行如下命令即可：

```
service tomcat start
service tomcat shop
```

- 最后加入开机启动即可：

```
chkconfig --add tomcat
chkconfig tomcat on
```
