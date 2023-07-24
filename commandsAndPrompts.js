const commandsAndPrompts = [
  {
    command: 'docker run',
    prompt: 'Run a container from an image',
    hint: 'Use "docker run <image-name>" to run a container from an image'
  },
  {
    command: 'docker build',
    prompt: 'Build an image from a Dockerfile',
    hint: 'Use "docker build <directory>" to build an image from a Dockerfile'
  },
  {
    command: 'docker ps',
    prompt: 'List running containers',
    hint: 'Use "docker ps" to list running containers'
  },
  {
    command: 'docker stop',
    prompt: 'Stop a running container',
    hint: 'Use "docker stop <container-name>" to stop a running container'
  },
  {
    command: 'docker rm',
    prompt: 'Remove a container',
    hint: 'Use "docker rm <container-name>" to remove a container'
  },
  {
    command: 'docker rmi',
    prompt: 'Remove an image',
    hint: 'Use "docker rmi <image-name>" to remove an image'
  },
  {
    command: 'docker exec',
    prompt: 'Run a command in a running container',
    hint: 'Use "docker exec <container-name> <command>" to run a command in a running container'
  },
  {
    command: 'docker inspect',
    prompt: 'Return low-level information on Docker objects',
    hint: 'Use "docker inspect <object-name>" to return low-level information on Docker objects'
  },
  {
    command: 'docker network',
    prompt: 'Manage Docker networks',
    hint: 'Use "docker network <subcommand>" to manage Docker networks'
  },
  {
    command: 'docker images',
    prompt: 'List images',
    hint: 'Use "docker images" to list images'
  },
  {
    command: 'docker compose-up',
    prompt: 'Create and start containers defined in a Docker Compose file',
    hint: 'Use "docker-compose up" to create and start containers defined in a Docker Compose file'
  },
  {
    command: 'docker compose-down',
    prompt: 'Stop and remove containers created by Docker Compose',
    hint: 'Use "docker-compose down" to stop and remove containers created by Docker Compose'
  },
  {
    command: 'docker logs',
    prompt: 'Fetch the logs of a container',
    hint: 'Use "docker logs <container-name>" to fetch the logs of a container'
  },
  {
    command: 'docker stats',
    prompt: 'Display a live stream of container(s) resource usage statistics',
    hint: 'Use "docker stats <container-name>" to display a live stream of container(s) resource usage statistics'
  },
  {
    command: 'docker volume',
    prompt: 'Manage Docker volumes',
    hint: 'Use "docker volume <subcommand>" to manage Docker volumes'
  },
  {
    command: 'docker swarm',
    prompt: 'Manage a Docker swarm',
    hint: 'Use "docker swarm <subcommand>" to manage a Docker swarm'
  },
  {
    command: 'docker cp',
    prompt: 'Copy files/folders between a container and the local filesystem',
    hint: 'Use "docker cp <container-name>:<path-to-file-or-folder> <local-path>" to copy files/folders from a container to the local filesystem'
  },
  {
    command: 'docker commit',
    prompt: 'Create a new image from a container\'s changes',
    hint: 'Use "docker commit <container-name> <new-image-name>" to create a new image from a container\'s changes'
  },
  {
    command: 'docker diff',
    prompt: 'Inspect changes to files or directories on a container\'s filesystem',
    hint: 'Use "docker diff <container-name>" to inspect changes to files or directories on a container\'s filesystem'
  },
  {
    command: 'docker export',
    prompt: 'Export a container\'s filesystem as a tar archive',
    hint: 'Use "docker export <container-name>" to export a container\'s filesystem as a tar archive'
  },
  {
    command: 'docker history',
    prompt: 'Show the history of an image',
    hint: 'Use "docker history <image-name>" to show the history of an image'
  },
  {
    command: 'docker login',
    prompt: 'Log in to a Docker registry',
    hint: 'Use "docker login" to log in to a Docker registry'
  },
  {
    command: 'docker push',
    prompt: 'Push an image to a Docker registry',
    hint: 'Use "docker push <image-name>" to push an image to a Docker registry'
  },
  {
    command: 'docker pull',
    prompt: 'Pull an image from a Docker registry',
    hint: 'Use "docker pull <image-name>" to pull an image from a Docker registry'
  },
  {
    command: 'docker tag',
    prompt: 'Create a tag for an image',
    hint: 'Use "docker tag <image-name> <new-image-name>" to create a tag for an image'
  },
  {
    command: 'docker system prune',
    prompt: 'Remove unused data',
    hint: 'Use "docker system prune" to remove unused data (e.g. stopped containers, unused networks, dangling images)'
  }
];
