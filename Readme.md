
# Todo App Deployment with Minikube and ArgoCD

## Prerequisites

1. **Clone the repository:**
    ```sh
    git clone https://github.com/mohan2020coder/argocd-mern-demo.git
    cd argocd-mern-demo

    cd frontend
    npm install

    cd ..
    cd backend
    npm install
    ```

2. **Install required tools:**

    - **kubectl:**
      ```sh
      curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
      chmod +x kubectl
      sudo mv kubectl /usr/local/bin/
      ```

    - **Minikube:**
      ```sh
      curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
      sudo install minikube-linux-amd64 /usr/local/bin/minikube
      ```

    - **ArgoCD:**
      ```sh
      kubectl create namespace argocd
      kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
      ```

    - **ArgoCD CLI:**
      ```sh
      curl -sSL -o argocd-linux-amd64 https://github.com/argoproj/argo-cd/releases/latest/download/argocd-linux-amd64
      sudo install -m 555 argocd-linux-amd64 /usr/local/bin/argocd
      rm argocd-linux-amd64
      ```


## Deployment Steps

1. **Create an application in ArgoCD and manually sync the following:**
    - Persistent Volume (PV)
    - Persistent Volume Claim (PVC)
    - MongoDB Deployment and Service


2. **Build and Push Backend Image:**
    ```sh
    cd backend
    docker build -t monihub/todo-backend:latest .
    docker push monihub/todo-backend:latest
    ```




3. **Sync Backend Deployment and Service in ArgoCD.**

4. **Get Backend Service URL:**
    ```sh
    minikube service backend-service -n todo-app
    ```
|-----------|------------------|--------------|-----|
| NAMESPACE |       NAME       | TARGET PORT  | URL |
|-----------|------------------|--------------|-----|
| todo-app  | backend-service  |         5000 |     |
| todo-app  | frontend-service |           80 |     |
| todo-app  | mongo-service    | No node port |     |
|-----------|------------------|--------------|-----|


  ```sh
    minikube service backend-service -n todo-app
  ```
|-----------|-----------------|-------------|---------------------------|
| NAMESPACE |      NAME       | TARGET PORT |            URL            |
|-----------|-----------------|-------------|---------------------------|
| todo-app  | backend-service |        5000 | http://192.168.49.2:31100 |
|-----------|-----------------|-------------|---------------------------|
🏃  Starting tunnel for service backend-service.
|-----------|-----------------|-------------|------------------------|
| NAMESPACE |      NAME       | TARGET PORT |          URL           |
|-----------|-----------------|-------------|------------------------|
| todo-app  | backend-service |             | http://127.0.0.1:36635 |
|-----------|-----------------|-------------|------------------------|
🎉  Opening service todo-app/backend-service in default browser...
👉  http://127.0.0.1:36635


 - Note the URL (e.g., `http://127.0.0.1:36635`) and update the `App.js` file in the frontend project with this URL.


5. **Build and Push Frontend Image:**
    ```sh
    cd frontend
    docker build -t monihub/todo-frontend:latest .
    docker push monihub/todo-frontend:latest
    ```


#6. **Sync Frontend Deployment and Service in ArgoCD.**

7. **Get Frontend Service URL:**
    ```sh
    minikube service frontend-service -n todo-app
    ```

   



|-----------|------------------|-------------|---------------------------|
| NAMESPACE |       NAME       | TARGET PORT |            URL            |
|-----------|------------------|-------------|---------------------------|
| todo-app  | frontend-service |          80 | http://192.168.49.2:31000 |
|-----------|------------------|-------------|---------------------------|
🏃  Starting tunnel for service frontend-service.
|-----------|------------------|-------------|------------------------|
| NAMESPACE |       NAME       | TARGET PORT |          URL           |
|-----------|------------------|-------------|------------------------|
| todo-app  | frontend-service |             | http://127.0.0.1:46139 |
|-----------|------------------|-------------|------------------------|
🎉  Opening service todo-app/frontend-service in default browser...
👉  http://127.0.0.1:46139


 - Note the URL (e.g., `http://127.0.0.1:46139`) and open it in your browser.


 This guide provides steps for deploying the Todo App using Minikube and ArgoCD, including building Docker images, syncing services, and accessing the application.
