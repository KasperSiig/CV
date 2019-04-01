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
              - name: kaniko
                image: gcr.io/kaniko-project/executor
                command:
                  - /busybox/cat
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
          sh("yarn install")
          sh("yarn test")
          sh("yarn buildprod")
        }
      }
    }
    stage('Building & Pushing Image') {
      steps {
        git 'https://github.com/jenkinsci/docker-jnlp-slave.git'
        container(name: 'kaniko', shell: '/busybox/sh') {
          withEnv(['PATH+EXTRA=/busybox:/kaniko']) {
            sh '''
              #!/busybox/sh
              /kaniko/executor -f `pwd`/Dockerfile -c `pwd`--insecure --skip-tls-verify --cache=true --destination=kasperns/cv-test
            '''
          }
        }
      }
    }
  }
}
