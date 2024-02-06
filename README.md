# Filtered.

![](./assets/preview.png)

## Tech Stack

- `Next.Js`
- `Typescript`
- `Firebase`
- `Newsapi` - [Link](https://newsapi.org)
- `Kubernetes`
- `Github Actions`
## Setting up locally

- Clone the Repository

```bash
  git clone https://github.com/siddhantprateek/filtered.git
  cd filtered # Navigate to the Project Directory
```
**Install Dependencies**

```bash
  npm install 
  # or
  bun install
```

**Set Up Firebase environment variable**

- Create a new project on the [Firebase Console](https://console.firebase.google.com/).
- In the project settings, find and copy the configuration values for the web app.
- Create a `.env.local` file in the project root and add the following:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id
NEXT_PUBLIC_NEWS_APIKEY= # Set Up News API Key
```



**Run the Development Server:**

```bash
   npm run dev
  #  or if you're using Yarn:
  yarn dev
   #  or if you're using Bun:
  bun run dev
```
**Open in Browser**

Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

## MockUps

- Sign In with Google Account

![](./assets/signin.png)

- Grid View of Home Page

![](./assets/home.png)

- Search Any Topics

![](./assets/search.png)

## DevOps Workflow

| All Kubernetes manifest files are present in `kubernetes` directory.

- To run the app on local machine using kubernetes
- Install minikube  and start it by running `minikube start`.
- Apply all the deployment and service resources using command `kubectl apply -f ./kubernetes/`

```bash
$ kubectl get all

NAME                                READY   STATUS    RESTARTS   AGE
pod/filtered-web-85c495bfbd-27frq   1/1     Running   0          30m
pod/filtered-web-85c495bfbd-4zslm   1/1     Running   0          30m

NAME                   TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
service/filtered-svc   NodePort    10.110.45.153   <none>        3000:32478/TCP   43m
service/kubernetes     ClusterIP   10.96.0.1       <none>        443/TCP          185d

NAME                           READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/filtered-web   2/2     2            2           30m

NAME                                      DESIRED   CURRENT   READY   AGE
replicaset.apps/filtered-web-85c495bfbd   2         2         2       30m
```

- The `filtered-web` deployment has a desired state of 2 replicas, which matches the current state (2 pods running).
- `filtered-svc` is a NodePort service, exposing `filtered-web` deployment at`port `3000` internally in the cluster and mapping it to port `32478` externally.




### Author 
[Siddhant Prateek Mahanayak](https://github.com/siddhantprateek)