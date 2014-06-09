FROM ubuntu:13.10
MAINTAINER Rodrigo Braga "rodrigobraga@msn.com"
RUN apt-get -qq update
RUN apt-get install -y g++ make curl git vim vim-scripts ruby1.9.1 ruby1.9.1-dev python python-dev python-software-properties software-properties-common

RUN locale-gen en_US.UTF-8

RUN add-apt-repository -y ppa:chris-lea/node.js
RUN apt-get update -y
RUN apt-get install nodejs -y

RUN gem install rubygems-update
RUN update_rubygems 
RUN gem install rdoc -f
RUN gem install jekyll

RUN git config --global user.email "rodrigobraga@msn.com"
RUN git config --global user.name "Rodrigo Braga"

ADD . /home/repos/rodrigobraga.github.io

EXPOSE 8000
CMD ["/bin/sh", "-e", "/usr/local/bin/run"]
