# MYSQL数据库部署和安装

## 首先准备安装包

- 这里下载的是mysql-5.7.37-linux-glibc2.12-x86_64.tar.gz安装包，并将其放在root目录下

## 卸载系统自带的Mariadb(如果有)

- 如果系统之前自带Mariadb，可以先卸载之
- 首先查询已安装的Mariadb安装包

```
rpm -qa|grep mariadb
```