FROM ubuntu:latest
MAINTAINER Rodrigo Braga "rodrigobraga@msn.com"

# avoid debconf and initrd
ENV DEBIAN_FRONTEND noninteractive
ENV INITRD No

RUN locale-gen en_US en_US.UTF-8 pt_BR pt_BR.UTF-8

# update and install prerequisites
RUN apt-get -qq update
RUN apt-get install -y g++ make curl gsl-bin libgsl0-dev ruby1.9.1 ruby1.9.1-dev ruby-gsl python python-dev python-software-properties software-properties-common

# install Node
RUN add-apt-repository -y ppa:chris-lea/node.js
RUN apt-get update -y
RUN apt-get install nodejs -y

# install Jekyll, dependencies and extras
RUN gem install rubygems-update
RUN update_rubygems 
RUN gem install rdoc -f
RUN gem install jekyll
RUN gem install rb-gsl

VOLUME ["/opt/app"]

WORKDIR /opt/app

EXPOSE 4000

CMD ["jekyll", "serve", "--watch", "--port", "4000"]
