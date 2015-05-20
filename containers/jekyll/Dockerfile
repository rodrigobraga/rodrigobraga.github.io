FROM ruby:2.2.0
MAINTAINER Rodrigo Braga "rodrigobraga@msn.com"

# avoid debconf and initrd
ENV DEBIAN_FRONTEND noninteractive
ENV INITRD No

RUN apt-get update && apt-get install -y \
    apt-utils \
    nodejs

# install Jekyll, dependencies and extras
RUN gem install \
    jekyll \
    github-pages

VOLUME ["/opt/app"]

WORKDIR /opt/app

EXPOSE 4000

CMD ["jekyll", "serve", "--watch", "--port", "4000"]
