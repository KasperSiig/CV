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
                      image: kasperns/node-jenkins  
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
