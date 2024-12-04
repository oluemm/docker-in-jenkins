pipeline {
    agent any

    stages {
        stage('Unit Test') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
              sh '''
                ls -la
                node --version
                npm --version
                npm ci
                npm run build
                ls -la
              '''
            }
        }
        stage('E2E Test') {
            steps {
                sh 'test -f build/index.html'
                echo 'E2E Test Successful'
            }
        }
    }
    post {
        always {
            junit 'test-results/junit.xml'
        }
    }
}
