# Utiliser l'image Ubuntu comme base
FROM ubuntu:latest

# Mettre à jour les packages du système
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y curl git

# Installer Node.js 14
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

# Installer Git LFS
RUN curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash && \
    apt-get install -y git-lfs

# Cloner le repo https://github.com/nuxeo/doc.nuxeo.com-content.git
RUN git clone https://github.com/nuxeo/doc.nuxeo.com-content.git

# Définir le répertoire de travail
WORKDIR /doc.nuxeo.com-content

# init git lfs and checkout static branch
RUN git lfs install && \
    git checkout static

RUN npm install

# Commande par défaut à l'exécution du conteneur
CMD ["sleep", "infinity"]
