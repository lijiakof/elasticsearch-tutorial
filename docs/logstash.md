# Logstash

* 安装
* 使用
* 配置

## 安装

* java: sudo yum install java-1.8.0
* yum
    * sudo rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch
    * add /etc/yum.repos.d/logstash.repo
    * sudo yum install logstash
* logstash.repo

```
[logstash-6.x]
name=Elastic repository for 6.x packages
baseurl=https://artifacts.elastic.co/packages/6.x/yum
gpgcheck=1
gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
enabled=1
autorefresh=1
type=rpm-md
```

## 使用

* 启动：
    * ` cd /usr/share/logstash ` 
    * ` ./bin/logstash -e 'input { stdin { } } output { stdout {} }' `
* sudo /usr/share/logstash/bin/logstash -f /etc/logstash/conf.d/
* 做成服务：
    * 

## 配置

### 普通文本日志收集

```
# test-log.conf

input {
    file {
        path => ["/var/log/logstash/messages"]
        type => "system"
        start_position => "beginning"
    }
}

filter {

}
 
output {
    elasticsearch {
        hosts => "10.5.11.234:9200"
        index => "testlog-%{+YYYY.MM.dd}"
    }
}
```

### Nginx 收集

```
# sudo /usr/share/logstash/bin/logstash -f /etc/logstash/conf.d/

input {
    file {
        path => "/var/log/nginx/*access*.log"
        start_position => beginning
    }
}
 
filter {
}
 
output {
    elasticsearch {
        hosts => ["0.5.11.234:9200"]
        index => "nginxlog-%{+YYYY.MM.dd}"
    }
    stdout { codec => rubydebug }
}

```