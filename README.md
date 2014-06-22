# Template for my blog  [![devDependency Status](https://david-dm.org/rodrigobraga/rodrigobraga.github.io.png)](https://david-dm.org/rodrigobraga/rodrigobraga.github.io#info=devDependencies)
=============

To *build* the theme, after change the files, you need to run ```grunt``` to update assets and then ```jekyll serve``` to generate and serve the static content.

Dockerfile
-------------

Use this to build a new image

    $ sudo docker build .

With a tag for easier reuse

    $ sudo docker build -t rbraga/blog .

Running the container

    $ sudo docker run -d -p 4000:4000 -v /home/vagrant/repos/rodrigobraga.github.io/:/opt/app rbraga/blog

Now go to `<your ip>:4000` in your browser

Connect

    $ sudo docker run -i -t rbraga/blog /bin/bash
