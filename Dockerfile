FROM ubuntu:13.10
MAINTAINER Rodrigo Braga "rodrigobraga@msn.com"
RUN apt-get -qq update
RUN apt-get install -y g++ make curl git vim vim-scripts ruby1.9.1 ruby1.9.1-dev

RUN gem install rubygems-update
RUN update_rubygems 
RUN gem install jekyll

ADD . /home/repos/rodrigobraga.github.io

EXPOSE 8000
CMD ["/bin/sh", "-e", "/usr/local/bin/run"]
