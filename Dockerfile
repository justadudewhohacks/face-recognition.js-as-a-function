FROM amazonlinux:latest

# set locale
# RUN echo LC_ALL=en_US.UTF-8 >> /etc/environment
# ENV LC_ALL=en_US.UTF-8

# install node and build tools
RUN curl --silent --location https://rpm.nodesource.com/setup_6.x | bash - && \
    yum install -y nodejs gcc-c++ make git cmake libX11-devel libpng-devel openblas-devel

# install serverless
# RUN npm install -g serverless

RUN mkdir -p /var/task
WORKDIR /var/task
# ENV PATH /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/var/lang/bin
ENTRYPOINT ["npm", "install"]