pipeline {
    agent{
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
                      image: circleci/node:10-browsers  
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
                    echo "`pwd`"
                    sh """
                        yarn install
                        yarn test
                    """
                }
            }
        }
    }
}
