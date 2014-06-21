FROM ubuntu:latest
MAINTAINER Rodrigo Braga "rodrigobraga@msn.com"
RUN apt-get -qq update
RUN apt-get install -y g++ make curl ruby1.9.1 ruby1.9.1-dev python python-dev python-software-properties software-properties-common

RUN locale-gen en_US.UTF-8

RUN add-apt-repository -y ppa:chris-lea/node.js
RUN apt-get update -y
RUN apt-get install nodejs -y

RUN gem install rubygems-update
RUN update_rubygems 
RUN gem install rdoc -f
RUN gem install jekyll

VOLUME ["/opt/app"]

WORKDIR /opt/app

EXPOSE 4000

CMD ["jekyll", "serve", "--watch", "--port", "4000"]
