pipeline {
  environment {
    DOCKERUSERNAME = credentials("docker")
  }
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
                  - name: dockersock
                    mountPath: /var/run/docker.sock
              - name: kubectl
                image: gcr.io/cloud-builders/kubectl
                command:
                  - cat
                tty: true
          volumes:
            - name: dockersock
              hostPath:
                path: /var/run/docker.sock
        """
    }
  }
  stages {
    stage('Test') {
      steps {
        container('node') {
          sh("yarn install")
          sh("yarn test")
          sh("yarn buildprod")
        }
      }
    }
    stage('Build') {
      steps {
        container('docker') {
          sh("echo USERNAME=$DOCKERUSERNAME")
        }
      }
    }
  }
}
