FROM ruby:2.2.0
MAINTAINER Rodrigo Braga "rodrigobraga@msn.com"

# avoid debconf and initrd
ENV DEBIAN_FRONTEND noninteractive
ENV INITRD No

RUN apt-get update -y

RUN apt-get install apt-utils -y
RUN apt-get install nodejs -y

# install Jekyll, dependencies and extras
RUN gem install jekyll
RUN gem install github-pages

VOLUME ["/opt/app"]

WORKDIR /opt/app

EXPOSE 4000

CMD ["jekyll", "serve", "--watch", "--port", "4000"]
