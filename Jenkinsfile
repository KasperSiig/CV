pipeline {
  agent {
    kubernetes {
      label 'app'
      defaultContainer 'jnlp'
      yaml """
          apiVersion: v1
          kind: Pod
          metadata:
            labels:
              component: ci
          spec:
            serviceAccount: jenkins
            containers:
              - name: node
                image: kasperns/node-jenkins  
                command:
                  - cat
                tty: true
              - name: docker
                image: gcr.io/cloud-builders/docker
                command:
                  - cat
                tty: true
                volumeMounts:
                  - name: dockerSock
                    mountPath: /var/run/docker.sock
              - name: kubectl
                image: gcr.io/cloud-builders/kubectl
                command:
                  - cat
                tty: true
            volumes:
              - name: dockerSock
                hostPath:
                  path: /var/run/docker.sock
          """
    }
  }
  stages {
    stage('Test1') {
      steps {
        container('node') {
          sh("yarn install")
          sh("yarn test")
          sh("yarn buildprod")
        }
      }
    }
    stage('Building & Pushing Image') {
      steps {
        container('docker') {
          sh("docker build -t test .")
        }
      }
    }
  }
}
