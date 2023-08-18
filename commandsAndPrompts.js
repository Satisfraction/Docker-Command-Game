const commandsAndPrompts = [
  {
    command: "docker run",
    prompt: "Run a container from an image",
    hint: 'Use "docker run <image-name>" to run a container from an image',
  },
  {
    command: "docker build",
    prompt: "Build an image from a Dockerfile",
    hint: 'Use "docker build <directory>" to build an image from a Dockerfile',
  },
  {
    command: "docker ps",
    prompt: "List running containers",
    hint: 'Use "docker ps" to list running containers',
  },
  {
    command: "docker stop",
    prompt: "Stop a running container",
    hint: 'Use "docker stop <container-name>" to stop a running container',
  },
  {
    command: "docker rm",
    prompt: "Remove a container",
    hint: 'Use "docker rm <container-name>" to remove a container',
  },
  {
    command: "docker rmi",
    prompt: "Remove an image",
    hint: 'Use "docker rmi <image-name>" to remove an image',
  },
  {
    command: "docker exec",
    prompt: "Run a command in a running container",
    hint: 'Use "docker exec <container-name> <command>" to run a command in a running container',
  },
  {
    command: "docker inspect",
    prompt: "Return low-level information on Docker objects",
    hint: 'Use "docker inspect <object-name>" to return low-level information on Docker objects',
  },
  {
    command: "docker network",
    prompt: "Manage Docker networks",
    hint: 'Use "docker network <subcommand>" to manage Docker networks',
  },
  {
    command: "docker images",
    prompt: "List images",
    hint: 'Use "docker images" to list images',
  },
  {
    command: "docker compose-up",
    prompt: "Create and start containers defined in a Docker Compose file",
    hint: 'Use "docker-compose up" to create and start containers defined in a Docker Compose file',
  },
  {
    command: "docker compose-down",
    prompt: "Stop and remove containers created by Docker Compose",
    hint: 'Use "docker-compose down" to stop and remove containers created by Docker Compose',
  },
  {
    command: "docker logs",
    prompt: "Fetch the logs of a container",
    hint: 'Use "docker logs <container-name>" to fetch the logs of a container',
  },
  {
    command: "docker stats",
    prompt: "Display a live stream of container(s) resource usage statistics",
    hint: 'Use "docker stats <container-name>" to display a live stream of container(s) resource usage statistics',
  },
  {
    command: "docker volume",
    prompt: "Manage Docker volumes",
    hint: 'Use "docker volume <subcommand>" to manage Docker volumes',
  },
  {
    command: "docker swarm",
    prompt: "Manage a Docker swarm",
    hint: 'Use "docker swarm <subcommand>" to manage a Docker swarm',
  },
  {
    command: "docker cp",
    prompt: "Copy files/folders between a container and the local filesystem",
    hint: 'Use "docker cp <container-name>:<path-to-file-or-folder> <local-path>" to copy files/folders from a container to the local filesystem',
  },
  {
    command: "docker commit",
    prompt: "Create a new image from a container's changes",
    hint: 'Use "docker commit <container-name> <new-image-name>" to create a new image from a container\'s changes',
  },
  {
    command: "docker diff",
    prompt:
      "Inspect changes to files or directories on a container's filesystem",
    hint: 'Use "docker diff <container-name>" to inspect changes to files or directories on a container\'s filesystem',
  },
  {
    command: "docker export",
    prompt: "Export a container's filesystem as a tar archive",
    hint: 'Use "docker export <container-name>" to export a container\'s filesystem as a tar archive',
  },
  {
    command: "docker history",
    prompt: "Show the history of an image",
    hint: 'Use "docker history <image-name>" to show the history of an image',
  },
  {
    command: "docker login",
    prompt: "Log in to a Docker registry",
    hint: 'Use "docker login" to log in to a Docker registry',
  },
  {
    command: "docker push",
    prompt: "Push an image to a Docker registry",
    hint: 'Use "docker push <image-name>" to push an image to a Docker registry',
  },
  {
    command: "docker pull",
    prompt: "Pull an image from a Docker registry",
    hint: 'Use "docker pull <image-name>" to pull an image from a Docker registry',
  },
  {
    command: "docker tag",
    prompt: "Create a tag for an image",
    hint: 'Use "docker tag <image-name> <new-image-name>" to create a tag for an image',
  },
  {
    command: "docker system prune",
    prompt: "Remove unused data",
    hint: 'Use "docker system prune" to remove unused data (e.g. stopped containers, unused networks, dangling images)',
  },
  {
    command: "docker network ls",
    prompt: "List Docker networks",
    hint: 'Use "docker network ls" to list Docker networks',
  },
  {
    command: "docker network create",
    prompt: "Create a new Docker network",
    hint: 'Use "docker network create <network-name>" to create a new Docker network',
  },
  {
    command: "docker network inspect",
    prompt: "Display detailed information about a Docker network",
    hint: 'Use "docker network inspect <network-name>" to display detailed information about a Docker network',
  },
  {
    command: "docker network connect",
    prompt: "Connect a container to a Docker network",
    hint: 'Use "docker network connect <network-name> <container-name>" to connect a container to a Docker network',
  },
  {
    command: "docker network disconnect",
    prompt: "Disconnect a container from a Docker network",
    hint: 'Use "docker network disconnect <network-name> <container-name>" to disconnect a container from a Docker network',
  },
  {
    command: "docker volume ls",
    prompt: "List Docker volumes",
    hint: 'Use "docker volume ls" to list Docker volumes',
  },
  {
    command: "docker volume create",
    prompt: "Create a new Docker volume",
    hint: 'Use "docker volume create <volume-name>" to create a new Docker volume',
  },
  {
    command: "docker volume inspect",
    prompt: "Display detailed information about a Docker volume",
    hint: 'Use "docker volume inspect <volume-name>" to display detailed information about a Docker volume',
  },
  {
    command: "docker volume rm",
    prompt: "Remove a Docker volume",
    hint: 'Use "docker volume rm <volume-name>" to remove a Docker volume',
  },
  {
    command: "docker swarm init",
    prompt: "Initialize a Docker swarm",
    hint: 'Use "docker swarm init" to initialize a Docker swarm on the current node',
  },
  {
    command: "docker swarm join",
    prompt: "Join a Docker swarm as a worker node",
    hint: 'Use "docker swarm join --token <worker-token> <manager-ip>" to join a Docker swarm as a worker node',
  },
  {
    command: "docker swarm leave",
    prompt: "Leave a Docker swarm",
    hint: 'Use "docker swarm leave" to leave the current Docker swarm',
  },
  {
    command: "docker swarm deploy",
    prompt: "Deploy a stack or service to a Docker swarm",
    hint: 'Use "docker swarm deploy -c <compose-file> <stack-name>" to deploy a stack or service to a Docker swarm',
  },
  {
    command: "docker config ls",
    prompt: "List Docker configs",
    hint: 'Use "docker config ls" to list Docker configs',
  },
  {
    command: "docker config create",
    prompt: "Create a new Docker config",
    hint: 'Use "docker config create <config-name>" to create a new Docker config',
  },
  {
    command: "docker config inspect",
    prompt: "Display detailed information about a Docker config",
    hint: 'Use "docker config inspect <config-name>" to display detailed information about a Docker config',
  },
  {
    command: "docker config rm",
    prompt: "Remove a Docker config",
    hint: 'Use "docker config rm <config-name>" to remove a Docker config',
  },
  {
    command: "docker secret ls",
    prompt: "List Docker secrets",
    hint: 'Use "docker secret ls" to list Docker secrets',
  },
  {
    command: "docker secret create",
    prompt: "Create a new Docker secret",
    hint: 'Use "docker secret create <secret-name> <secret-file>" to create a new Docker secret from a file',
  },
  {
    command: "docker secret inspect",
    prompt: "Display detailed information about a Docker secret",
    hint: 'Use "docker secret inspect <secret-name>" to display detailed information about a Docker secret',
  },
  {
    command: "docker secret rm",
    prompt: "Remove a Docker secret",
    hint: 'Use "docker secret rm <secret-name>" to remove a Docker secret',
  },
  {
    command: "docker service ls",
    prompt: "List Docker services",
    hint: 'Use "docker service ls" to list Docker services',
  },
  {
    command: "docker service create",
    prompt: "Create a new Docker service",
    hint: 'Use "docker service create <image-name>" to create a new Docker service from an image',
  },
  {
    command: "docker service inspect",
    prompt: "Display detailed information about a Docker service",
    hint: 'Use "docker service inspect <service-name>" to display detailed information about a Docker service',
  },
  {
    command: "docker service update",
    prompt: "Update a Docker service",
    hint: 'Use "docker service update --image <new-image-name> <service-name>" to update a Docker service with a new image',
  },
  {
    command: "docker service scale",
    prompt: "Scale a Docker service",
    hint: 'Use "docker service scale <service-name>=<replica-count>" to scale a Docker service to a specific number of replicas',
  },
  {
    command: "docker service rm",
    prompt: "Remove a Docker service",
    hint: 'Use "docker service rm <service-name>" to remove a Docker service',
  },
  {
    command: "docker node ls",
    prompt: "List Docker swarm nodes",
    hint: 'Use "docker node ls" to list nodes in a Docker swarm',
  },
  {
    command: "docker node inspect",
    prompt: "Display detailed information about a Docker swarm node",
    hint: 'Use "docker node inspect <node-id>" to display detailed information about a Docker swarm node',
  },
  {
    command: "docker node update",
    prompt: "Update a Docker swarm node",
    hint: 'Use "docker node update --availability <availability> <node-id>" to update the availability of a Docker swarm node',
  },
  {
    command: "docker node ps",
    prompt: "List tasks running on Docker swarm nodes",
    hint: 'Use "docker node ps <node-id>" to list tasks running on a specific Docker swarm node',
  },
  {
    command: "docker stack ls",
    prompt: "List Docker stacks",
    hint: 'Use "docker stack ls" to list Docker stacks in a swarm',
  },
  {
    command: "docker stack deploy",
    prompt: "Deploy a stack to a Docker swarm",
    hint: 'Use "docker stack deploy -c <compose-file> <stack-name>" to deploy a stack to a Docker swarm',
  },
  {
    command: "docker stack ps",
    prompt: "List tasks of a Docker stack",
    hint: 'Use "docker stack ps <stack-name>" to list tasks of a Docker stack',
  },
  {
    command: "docker stack services",
    prompt: "List services in a Docker stack",
    hint: 'Use "docker stack services <stack-name>" to list services in a Docker stack',
  },
  {
    command: "docker stack rm",
    prompt: "Remove a Docker stack",
    hint: 'Use "docker stack rm <stack-name>" to remove a Docker stack',
  },
  {
    command: "docker plugin ls",
    prompt: "List Docker plugins",
    hint: 'Use "docker plugin ls" to list Docker plugins',
  },
  {
    command: "docker plugin install",
    prompt: "Install a Docker plugin",
    hint: 'Use "docker plugin install <plugin-name>" to install a Docker plugin',
  },
  {
    command: "docker plugin inspect",
    prompt: "Display detailed information about a Docker plugin",
    hint: 'Use "docker plugin inspect <plugin-name>" to display detailed information about a Docker plugin',
  },
  {
    command: "docker plugin disable",
    prompt: "Disable a Docker plugin",
    hint: 'Use "docker plugin disable <plugin-name>" to disable a Docker plugin',
  },
  {
    command: "docker plugin enable",
    prompt: "Enable a Docker plugin",
    hint: 'Use "docker plugin enable <plugin-name>" to enable a Docker plugin',
  },
  {
    command: "docker plugin upgrade",
    prompt: "Upgrade a Docker plugin",
    hint: 'Use "docker plugin upgrade <plugin-name>" to upgrade a Docker plugin',
  },
];
