pipeline {
    agent{
        kubernetes {
            label 'cv'
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
                        ln -s `pwd` /home/circleci/cv
                        cd /home/circleci/cv
                        yarn install
                        yarn test
                    """
                }
            }
        }
    }
}
