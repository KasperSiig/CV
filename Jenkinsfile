pipeline {
    agent { docker image: 'circleci/node:9.3-stretch-browsers' }
    stages {
        stage('build') {
            steps {
                sh 'yarn'
                sh 'ng test'
            }
        }
    }
}
