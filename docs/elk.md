
## JDK
* yum install -y java-1.8.0-openjdk
* vi /etc/profile
```
JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.181-3.b13.el6_10.x86_64
PATH=$JAVA_HOME/bin:$PATH
CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
JAVACMD=/usr/bin/java
export JAVA_HOME JAVACMD CLASSPATH PATH
```
* source /etc/profile
* java -version

## Elasticsearch

### Install
* sudo rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch
* cd /etc/yum.repos.d/
* vi elasticsearch.repo
```
[elasticsearch-7.x]
name=Elasticsearch repository for 7.x packages
baseurl=https://artifacts.elastic.co/packages/7.x/yum
gpgcheck=1
gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
enabled=1
autorefresh=1
type=rpm-md
```
* sudo yum install elasticsearch

### Run
* sudo chkconfig --add elasticsearch
* sudo -i service elasticsearch start
* sudo -i service elasticsearch stop
* curl http://localhost:9200
* config /etc/elasticsearch/

```
# elasticsearch.yml
network.host: 0.0.0.0
http.port: 9200
discovery.seed_hosts: ["127.0.0.1"]
```



* config /etc/elasticsearch/jvm.options

```
-Xms1g
-Xmx1g
```


## Kabala
* sudo yum install kibana
* sudo service kibana start

## Filebeat

* sudo yum install filebeat
* sudo service filebeat start
* sudo service filebeat stop
* config /etc/filebeat/

```
# filebeat.yml
filebeat.inputs:
- type: log
	endable: true
	paths:
		- /home/bee/Documents/logs/*.log

output.elasticsearch:
  # Array of hosts to connect to.
  hosts: ["192.168.1.137:9200"]
  index: "quant-%{+yyyy.MM.dd}"

setup.ilm.enabled: false
setup.template.name: "quant"
setup.template.pattern: "quant-*"

output.logstash
	hosts: [""]
```



* https://www.elastic.co/guide/en/beats/filebeat/7.4/filebeat-module-logstash.html
* debug：https://www.elastic.co/guide/en/beats/filebeat/current/enable-filebeat-debugging.html




## 防火墙
* systemctl stop firewalld
* systemctl disable firewalld