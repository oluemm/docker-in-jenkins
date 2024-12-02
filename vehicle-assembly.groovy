pipeline {
    agent any
    environment{
        BUILD_FILE_NAME = 'ferrari.txt'
    }
    stages {
        stage('Build') {
            steps {
                cleanWs()
                echo "Building new car $BUILD_FILE_NAME"
                sh '''
                    mkdir -p build
                    touch build/$BUILD_FILE_NAME
                    echo "Engine" >> build/$BUILD_FILE_NAME
                    cat build/$BUILD_FILE_NAME
                '''
            }
        }
        stage('Test Engine') {
            steps {
                echo 'Testing engine assembly'
                sh '''
                    test -f build/$BUILD_FILE_NAME
                    grep "Engine" build/$BUILD_FILE_NAME
                '''
            }
        }
    }
    post {
        success{
            archiveArtifacts artifacts: 'build/**'
        }
    }
}


