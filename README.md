# Jenkins - Github 배포

**1. Docker로 Jenkins 실행**

```bash
$ docker pull jenkins/jenkins
$ docker run -d -p 8080:8080 --name jenkins -v /var/run/docker.sock:/var/run/docker.sock -u root jenkins/jenkins
```

**2. Jenkins 컨테이너에 docker, docker-compose 설치**
```bash
# docker
$ curl -fsSLO https://get.docker.com/builds/Linux/x86_64/docker-17.04.0-ce.tgz
$ tar xzvf docker-17.04.0-ce.tgz
$ mv docker/docker /usr/local/bin
$ rm -r docker docker-17.04.0-ce.tgz
$ docker -v

# docker-compose
$ curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

$ chmod +x /usr/local/bin/docker-compose
$ ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
$ docker-compose -v
```

**3.Jenkins - Github 연동 / 스크립트 작성**
```
$ docker-compose rm -s -f -v
$ docker-compose up -d --build
```
