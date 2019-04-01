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
              - name: kubectl
                image: gcr.io/cloud-builders/kubectl
                command:
                  - cat
                tty: true
          """
    }
  }
  stages {
    stage('Test') {
      steps {
        container('node') {
          sh """
            yarn install
            yarn test
            """
          stash includes: 'node_modules/**/*', name: 'node_modules'
        }
      }
    }
    stage('Building & Pushing Image') {
      steps {
        container('docker') {
          unstash 'node_modules'
          sh("`pwd`")
        }
      }
    }
  }
}
